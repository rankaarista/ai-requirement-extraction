"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface BuyCreditsModalProps {
  credits: number;
  setCredits: (newCredits: number) => void;
}

// Credit packages with pricing
const CREDIT_PACKAGES = [
  { id: "small", name: "Small", credits: 10, price: "$5" },
  { id: "medium", name: "Medium", credits: 50, price: "$20" },
  { id: "large", name: "Large", credits: 100, price: "$35" },
];

export default function BuyCreditsModal({ credits, setCredits }: BuyCreditsModalProps) {
  const [selectedPackage, setSelectedPackage] = useState<string>("medium");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Reset form when modal opens/closes
  useEffect(() => {
    if (!isOpen) {
      setSelectedPackage("medium");
      setCustomAmount("");
      setMessage(null);
    }
  }, [isOpen]);

  const handlePurchase = () => {
    let amount = 0;
    
    if (selectedPackage === "custom") {
      const parsedAmount = parseInt(customAmount);
      if (isNaN(parsedAmount) || parsedAmount <= 0) {
        setMessage({ text: "Please enter a valid amount.", type: "error" });
        return;
      }
      amount = parsedAmount;
    } else {
      const selected = CREDIT_PACKAGES.find(pkg => pkg.id === selectedPackage);
      if (selected) {
        amount = selected.credits;
      }
    }

    setCredits(credits + amount);
    setMessage({ 
      text: `Successfully purchased ${amount} credits! You now have ${credits + amount} credits.`, 
      type: "success" 
    });
    
    // Close modal after successful purchase
    setTimeout(() => {
      setIsOpen(false);
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="mt-4">Buy Credits</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Buy More Credits</DialogTitle>
        </DialogHeader>
        <Card className="p-4 shadow-md">
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Select a credit package or enter a custom amount:</p>

            <RadioGroup 
              value={selectedPackage} 
              onValueChange={setSelectedPackage}
              className="mb-4"
            >
              {CREDIT_PACKAGES.map((pkg) => (
                <div key={pkg.id} className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value={pkg.id} id={pkg.id} />
                  <Label htmlFor={pkg.id} className="flex justify-between w-full">
                    <span>{pkg.name} Package</span>
                    <span className="font-medium">{pkg.credits} credits - {pkg.price}</span>
                  </Label>
                </div>
              ))}
              <div className="flex items-center space-x-2 mt-2">
                <RadioGroupItem value="custom" id="custom" />
                <Label htmlFor="custom" className="flex justify-between w-full">
                  <span>Custom Amount</span>
                </Label>
              </div>
            </RadioGroup>

            {selectedPackage === "custom" && (
              <div className="mb-4">
                <Label htmlFor="customAmount">Number of Credits</Label>
                <Input
                  id="customAmount"
                  type="number"
                  min="1"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="mt-1"
                />
              </div>
            )}

            {message && (
              <p className={`mt-2 ${message.type === "success" ? "text-green-600" : "text-red-600"}`}>
                {message.text}
              </p>
            )}

            <DialogFooter className="mt-4">
              <Button onClick={handlePurchase} className="w-full">
                Confirm Purchase
              </Button>
            </DialogFooter>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
}
