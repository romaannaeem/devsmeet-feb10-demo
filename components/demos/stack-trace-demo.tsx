"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type Product = {
  id: number;
  name: string;
  details?: { price: number };
};

const products: Product[] = [
  { id: 1, name: "Widget A", details: { price: 29.99 } },
  { id: 2, name: "Widget B" }, // details is undefined!
  { id: 3, name: "Widget C", details: { price: 49.99 } },
];

export function StackTraceDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Product List</CardTitle>
        <CardDescription>Renders product prices. Check stack trace when it crashes.</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {products.map((product) => (
            <li key={product.id} className="flex justify-between rounded-md border p-2">
              <span>{product.name}</span>
              {/* Bug: details can be undefined - causes runtime error */}
              <span>${(product as { details: { price: number } }).details.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
