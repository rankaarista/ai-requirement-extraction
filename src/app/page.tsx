"use client";

import { useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sun, Moon, History, Trash2, Copy, Check } from "lucide-react";
import BuyCreditsModal from "@/components/ui/BuyCreditsModal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function Home() {
  interface ExtractedData {
    category: string;
    software: string;
  }
  
  interface ExtractionHistory {
    id: string;
    timestamp: Date;
    requirement: string;
    extractedData: ExtractedData[];
  }
  
  const [requirement, setRequirement] = useState("");
  const [credits, setCredits] = useState(20);
  const [extractedData, setExtractedData] = useState<ExtractedData[]>([]);
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [history, setHistory] = useState<ExtractionHistory[]>([]);
  const [copied, setCopied] = useState(false);

  // Load theme from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
    }
    
    // Load history from localStorage
    const storedHistory = localStorage.getItem("extractionHistory");
    if (storedHistory) {
      try {
        const parsedHistory = JSON.parse(storedHistory);
        // Convert string dates back to Date objects
        parsedHistory.forEach((item: ExtractionHistory) => {
          item.timestamp = new Date(item.timestamp);
        });
        setHistory(parsedHistory);
      } catch (e) {
        console.error("Failed to parse history:", e);
      }
    }
  }, []);

  // Save theme to localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Save history to localStorage
  useEffect(() => {
    localStorage.setItem("extractionHistory", JSON.stringify(history));
  }, [history]);

  const handleExtract = async () => {
    if (credits <= 0) {
      setError("You've reached the limit. Please purchase more credits to continue.");
      return;
    }
  
    setIsLoading(true);
    setError(null);
    
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
        
        // Add to history
        const newHistoryItem: ExtractionHistory = {
          id: Date.now().toString(),
          timestamp: new Date(),
          requirement: requirement,
          extractedData: extracted
        };
        
        setHistory(prev => [newHistoryItem, ...prev]);
        setCredits((prevCredits) => prevCredits - 1); // Decrease credits after each extraction
      } else {
        setError(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error("Error fetching extracted requirements:", error);
      setError("Failed to extract requirements. Please try again.");
    } finally {
      setIsLoading(false);
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

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Dark Mode & Buy Credits */}
      <div className="absolute top-4 right-4 flex gap-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full"
              >
                {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-900 dark:text-gray-100" />}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Toggle {darkMode ? 'Light' : 'Dark'} Mode</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <Card className="w-full max-w-2xl p-4 shadow-md dark:bg-gray-800">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">AI Requirement Extractor</CardTitle>
          <CardDescription>Enter your software requirements below and get AI-powered recommendations</CardDescription>
        </CardHeader>
        <CardContent>
          <Textarea
            className="mt-3"
            placeholder="Paste your requirement here..."
            rows={4}
            value={requirement}
            onChange={(e) => setRequirement(e.target.value)}
          />

          <div className="flex justify-between items-center mt-4">
            <Button 
              onClick={handleExtract} 
              disabled={!requirement || credits <= 0 || isLoading}
              className="relative"
            >
              {isLoading ? (
                <>
                  <span className="opacity-0">Extract Requirements</span>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
                  </div>
                </>
              ) : (
                "Extract Requirements"
              )}
            </Button>
            <div className="flex items-center gap-2">
              <span className="text-gray-700 dark:text-gray-300">Credits: {credits}</span>
              <BuyCreditsModal credits={credits} setCredits={setCredits} />
            </div>
          </div>

          {error && (
            <p className="text-red-500 text-sm mt-2">
              {error}
            </p>
          )}

          {credits <= 0 && !error && (
            <p className="text-red-500 text-sm mt-2">
              You&apos;ve reached the limit. Please purchase more credits to continue.
            </p>
          )}
        </CardContent>
      </Card>

      {/* Results and History Tabs */}
      <Tabs defaultValue="results" className="w-full max-w-2xl mt-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="results">Results</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>
        
        <TabsContent value="results">
          {extractedData.length > 0 && (
            <Card className="p-4 shadow-md bg-white dark:bg-gray-800 dark:text-gray-100">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl">Extracted Requirements</CardTitle>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => copyToClipboard(JSON.stringify(extractedData, null, 2))}
                      >
                        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{copied ? 'Copied!' : 'Copy to clipboard'}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </CardHeader>
              <CardContent>
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
        </TabsContent>
        
        <TabsContent value="history">
          <Card className="p-4 shadow-md bg-white dark:bg-gray-800 dark:text-gray-100">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl">Extraction History</CardTitle>
              {history.length > 0 && (
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={clearHistory}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4 mr-1" />
                  Clear History
                </Button>
              )}
            </CardHeader>
            <CardContent>
              {history.length === 0 ? (
                <p className="text-center text-gray-500 dark:text-gray-400 py-4">
                  No extraction history yet
                </p>
              ) : (
                <div className="space-y-4">
                  {history.map((item) => (
                    <Card key={item.id} className="p-3 border dark:border-gray-700">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {formatDate(item.timestamp)}
                        </span>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => setExtractedData(item.extractedData)}
                        >
                          View Results
                        </Button>
                      </div>
                      <p className="text-sm line-clamp-2 mb-2">{item.requirement}</p>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {item.extractedData.length} categories extracted
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}
