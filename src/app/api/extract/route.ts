import { NextRequest, NextResponse } from "next/server";

const API_URL = "https://router.huggingface.co/together/v1/chat/completions";
const API_KEY = process.env.HUGGINGFACE_API_KEY; // Store API key securely

// Simple in-memory rate limiting (for demo purposes)
// In production, use a proper rate limiting solution like Redis
const rateLimit = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 10; // Max 10 requests per minute

export async function POST(req: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = req.headers.get('x-forwarded-for') || 'unknown';
    
    // Check rate limit
    const now = Date.now();
    const userRateLimit = rateLimit.get(ip);
    
    if (userRateLimit) {
      if (now < userRateLimit.resetTime) {
        if (userRateLimit.count >= MAX_REQUESTS) {
          return NextResponse.json(
            { error: "Rate limit exceeded. Please try again later." },
            { status: 429 }
          );
        }
        userRateLimit.count += 1;
      } else {
        // Reset if window has passed
        userRateLimit.count = 1;
        userRateLimit.resetTime = now + RATE_LIMIT_WINDOW;
      }
    } else {
      // First request from this IP
      rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    }

    const { requirement } = await req.json();

    // Input validation
    if (!requirement) {
      return NextResponse.json({ error: "Requirement is required" }, { status: 400 });
    }
    
    if (typeof requirement !== 'string') {
      return NextResponse.json({ error: "Requirement must be a string" }, { status: 400 });
    }
    
    if (requirement.length < 10) {
      return NextResponse.json({ error: "Requirement must be at least 10 characters long" }, { status: 400 });
    }

    // Check if API key is available
    if (!API_KEY) {
      console.error("HUGGINGFACE_API_KEY is not set");
      return NextResponse.json({ error: "API configuration error" }, { status: 500 });
    }

    const prompt = `For the given requirement, extract all the categories from the requirement and provide the best software technology that can be implemented for a particular category and present it as number. \"Category\" : \"Best Software\" : ${requirement}`;

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: [{ role: "user", content: prompt }],
        max_tokens: 500,
        model: "mistralai/Mistral-7B-Instruct-v0.3",
        stream: false,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: "Unknown error" }));
      console.error("API Error Response:", errorData);
      return NextResponse.json({ 
        error: errorData.error || `API error: ${response.status} ${response.statusText}` 
      }, { status: response.status });
    }

    const data = await response.json();
    
    // Validate the response structure
    if (!data.choices || !data.choices[0] || !data.choices[0].message || !data.choices[0].message.content) {
      console.error("Unexpected API response structure:", data);
      return NextResponse.json({ error: "Invalid response from AI service" }, { status: 500 });
    }

    return NextResponse.json({ response: data });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ 
      error: error instanceof Error ? error.message : "Internal Server Error" 
    }, { status: 500 });
  }
}

