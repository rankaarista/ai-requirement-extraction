import { NextRequest, NextResponse } from "next/server";

const API_URL = "https://router.huggingface.co/together/v1/chat/completions";
const API_KEY = process.env.HUGGINGFACE_API_KEY; // Store API key securely

export async function POST(req: NextRequest) {
  try {
    const { requirement } = await req.json();

    if (!requirement) {
      return NextResponse.json({ error: "Requirement is required" }, { status: 400 });
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
      const errorData = await response.json();
      return NextResponse.json({ error: errorData }, { status: response.status });
    }

    const data = await response.json(); 
    //console.log(data); //debugging log

    return NextResponse.json({ response: data });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

