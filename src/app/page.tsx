"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const [requirement, setRequirement] = useState("");
  const [credits, setCredits] = useState(20);

  const handleExtract = async () => {
    if (credits <= 0) {
      alert("You've reached the limit. Please purchase more credits to continue.");
      return;
    }

    
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
