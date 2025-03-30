"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface BuyCreditsModalProps {
  credits: number;
  setCredits: (newCredits: number) => void;
}

export default function BuyCreditsModal({ credits, setCredits }: BuyCreditsModalProps) {
  const [amount, setAmount] = useState(0);
  const [message, setMessage] = useState("");

  const handlePurchase = () => {
    if (amount <= 0 || isNaN(amount)) {
      setMessage("Please enter a valid amount.");
      return;
    }

    setCredits(credits + amount);
    setMessage(`Successfully purchased ${amount} credits!`);
    setAmount(0);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="mt-4">Buy Credits</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Buy More Credits</DialogTitle>
        </DialogHeader>
        <Card className="p-4 shadow-md">
          <CardContent>
            <p className="text-gray-600 mb-2">Enter the number of credits you want to buy:</p>

            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(parseInt(e.target.value))}
              placeholder="Enter amount"
              className="mb-3"
            />

            <Button onClick={handlePurchase}>Confirm Purchase</Button>

            {message && <p className="mt-2 text-green-600">{message}</p>}
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
}
