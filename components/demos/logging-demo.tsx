"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function LoggingDemo() {
  const [count, setCount] = useState(0);
  const justClickedRef = useRef(false);

  useEffect(() => {
    console.log("[LoggingDemo] Effect running, count was:", count);
    setCount((prev) => prev + 1); // 🐛
  }); // 🐛

  const handleIncrement = () => {
    console.log("[LoggingDemo] Button clicked");
    justClickedRef.current = true;
    setCount((prev) => prev + 1);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Counter</CardTitle>
        <CardDescription>Click to increment. Check console for clues.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-2xl font-bold">Count: {count}</p>
        <Button onClick={handleIncrement}>Increment</Button>
      </CardContent>
    </Card>
  );
}
