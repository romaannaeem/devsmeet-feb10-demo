"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type Product = {
  id: number;
  name: string;
  details?: { price: number };
};

const safeProducts: Product[] = [
  { id: 1, name: "Widget A", details: { price: 29.99 } },
  { id: 2, name: "Widget B", details: { price: 39.99 } },
];

const unsafeProducts: Product[] = [
  { id: 1, name: "Widget A", details: { price: 29.99 } },
  { id: 2, name: "Widget B" }, // 🐛 missing details
];

export function StackTraceDemo() {
  const [products, setProducts] = useState<Product[]>(safeProducts);

  const loadBadData = () => {
    setProducts(unsafeProducts);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Product List</CardTitle>
        <CardDescription>
          Click "Load More Products" to fetch additional data.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-2">
          {products.map((product) => (
            <li key={product.id} className="flex justify-between rounded-md border p-2">
              <span>{product.name}</span>
              <span>${product.details!.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <Button onClick={loadBadData}>Load More Products</Button>
      </CardContent>
    </Card>
  );
}