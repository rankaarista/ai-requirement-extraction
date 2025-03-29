"use client";

import { useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sun, Moon } from "lucide-react";

export default function Home() {
  const [requirement, setRequirement] = useState("");
  const [credits, setCredits] = useState(20);
  const [extractedData, setExtractedData] = useState<any[]>([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Load theme from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);


  const handleExtract = async () => {
    if (credits <= 0) {
      alert("You've reached the limit. Please purchase more credits to continue.");
      return;
    }
  
    
  
    try {
      const response = await fetch("/api/extract", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ requirement: requirement }),
      });
  
      const data = await response.json();
  
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

    setCredits((prevCredits) => prevCredits - 1); // Decrease credits after each extraction
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
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-4 right-4 p-2 bg-gray-200 dark:bg-gray-700 rounded-full"
      >
        {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-900 dark:text-gray-100" />}
      </Button>
      <Card className="w-full max-w-2xl p-4 shadow-md dark:bg-gray-800">
        <CardContent>
          <h1 className="text-2xl font-bold mb-4">AI Requirement Extractor</h1>
          <p className="text-gray-600 dark:text-gray-300">Enter your software requirements below:</p>
          
          <Textarea
            className="mt-3"
            placeholder="Paste your requirement here..."
            rows={4}
            onChange={(e) => { setRequirement(e.target.value);  // Update requirement state
            }}
          />

          <div className="flex justify-between items-center mt-4">
            <Button onClick={handleExtract} disabled={!requirement || credits <= 0}>
              Extract Requirements
            </Button>
            <span className="text-gray-700 dark:text-gray-300">Credits: {credits}</span>
          </div>

          {credits <= 0 && (
            <p className="text-red-500 text-sm mt-2">
              You've reached the limit. Please purchase more credits to continue.
            </p>
          )}
        </CardContent>
      </Card>

      {/* Extracted Data Table */}
      {extractedData.length > 0 && (
      <Card className="w-full max-w-2xl mt-6 p-4 shadow-md bg-white dark:bg-gray-800 dark:text-gray-100">
        <CardContent>
          <h2 className="text-xl font-semibold mb-3">Extracted Requirements</h2>
          <div className="border rounded-md overflow-hidden">
            <table className="w-full border-collapse">
              <thead className="bg-gray-200 dark:bg-gray-700">
                <tr>
                  <th className="p-2 border dark:border-gray-600">Category</th>
                  <th className="p-2 border dark:border-gray-600">Recommended Software</th>
                </tr>
              </thead>
              <tbody>
                {extractedData.map((item, index) => (
                  <tr key={index} className="border dark:border-gray-600">
                    <td className="p-2 border dark:border-gray-600">{item.category}</td>
                    <td className="p-2 border dark:border-gray-600">{item.software}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    )}
    </main>
  );
}
