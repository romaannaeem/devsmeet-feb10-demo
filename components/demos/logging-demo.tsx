"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function LoggingDemo() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    console.log("[LoggingDemo] handleIncrement called with count:", count);
    setCount((prev) => prev + 1);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Counter</CardTitle>
        <CardDescription>
          Should increment by 1. Check console if something seems off.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-2xl font-bold">Count: {count}</p>
        {/* 🐛 Bug: onClick on both wrapper div AND button */}
        <div>
          <Button onClick={handleIncrement}>Increment</Button>
        </div>
      </CardContent>
    </Card>
  );
}