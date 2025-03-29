"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const [requirement, setRequirement] = useState("");
  const [credits, setCredits] = useState(20);
  const [extractedData, setExtractedData] = useState<any[]>([]);

  const handleExtract = async () => {
    if (credits <= 0) {
      alert("You've reached the limit. Please purchase more credits to continue.");
      return;
    }
  
    setCredits(credits - 1);
  
    try {
      const response = await fetch("/api/extract", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ requirement: requirement }),
      });
  
      const data = await response.json();
      //console.log(data); //debugging log
  
      if (response.ok) {
        // Extract the structured response from Mistral API output
        const extracted = parseResponse(data.response.choices[0].message.content);
        setExtractedData(extracted);
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error("Error fetching extracted requirements:", error);
      alert("Failed to extract requirements. Please try again.");
    }
  };

  const parseResponse = (responseText: string) => {
    const lines = responseText.trim().split("\n").filter(line => line.trim() !== ""); // Remove empty lines
    const extracted = [];
  
    for (const line of lines) {
        const match = line.match(/^\d+\.\s*(.*?):\s*(.*?)$/); // Match "1. Category: Best Software"
      
        if (match) {
            const category = match[1].trim();
            const software = match[2].trim();
            extracted.push({ category, software });
        }
    }
    
    
    return extracted;
};


  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <Card className="w-full max-w-2xl p-4 shadow-md">
        <CardContent>
          <h1 className="text-2xl font-bold mb-4">AI Requirement Extractor</h1>
          <p className="text-gray-600">Enter your software requirements below:</p>
          
          <Textarea
            className="mt-3"
            placeholder="Paste your requirement here..."
            rows={4}
            value={requirement}
            onChange={(e) => setRequirement(e.target.value)}
          />

          <div className="flex justify-between items-center mt-4">
            <Button onClick={handleExtract} disabled={!requirement || credits <= 0}>
              Extract Requirements
            </Button>
            <span className="text-gray-700">Credits: {credits}</span>
          </div>

          {credits <= 0 && (
            <p className="text-red-500 text-sm mt-2">
              You've reached the limit. Please purchase more credits to continue.
            </p>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
