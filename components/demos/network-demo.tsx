"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type User = { id: number; name: string; email: string };

export function NetworkDemo() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      // Typo in endpoint - check Network tab for 404
      const res = await fetch("https://jsonplaceholder.typicode.com/userz");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Fetch Users</CardTitle>
        <CardDescription>Load users from API. Check Network tab if it fails.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button onClick={fetchUsers} disabled={loading}>
          {loading ? "Loading..." : "Fetch Users"}
        </Button>
        {error && <p className="text-destructive font-medium">Error: {error}</p>}
        {users.length > 0 && (
          <ul className="space-y-1 text-sm">
            {users.slice(0, 5).map((u) => (
              <li key={u.id}>{u.name} — {u.email}</li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
