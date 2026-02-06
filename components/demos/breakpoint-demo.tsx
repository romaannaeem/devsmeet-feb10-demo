"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function BreakpointDemo() {
  const [price, setPrice] = useState("100");
  const [discount, setDiscount] = useState("10");
  const [finalPrice, setFinalPrice] = useState<number | null>(null);

  const calculatePrice = () => {
    const p = parseFloat(price);
    const d = parseFloat(discount);
    if (isNaN(p) || isNaN(d)) return;

    // SET BREAKPOINT HERE - inspect p, d, and the result
    const discounted = p + (p * d) / 100; // Bug here!
    setFinalPrice(discounted);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Price Calculator</CardTitle>
        <CardDescription>Enter price and discount %. Final price should decrease.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Price ($)</label>
          <Input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="100"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Discount (%)</label>
          <Input
            type="number"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            placeholder="10"
          />
        </div>
        <Button onClick={calculatePrice}>Calculate</Button>
        {finalPrice !== null && (
          <p className="text-lg font-semibold">Final Price: ${finalPrice.toFixed(2)}</p>
        )}
      </CardContent>
    </Card>
  );
}
