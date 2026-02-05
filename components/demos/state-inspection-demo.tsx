"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type User = { name: string; email: string };

function UserDisplay({ user }: { user?: User }) {
  // Child expects "user" - parent passes "usr" (typo), so this is undefined
  return (
    <div className="rounded-md border p-3">
      <p className="font-medium">{user?.name ?? "—"}</p>
      <p className="text-sm text-muted-foreground">{user?.email ?? "—"}</p>
    </div>
  );
}

export function StateInspectionDemo() {
  const user: User = { name: "Jane Doe", email: "jane@example.com" };

  return (
    <Card>
      <CardHeader>
        <CardTitle>User Profile</CardTitle>
        <CardDescription>Parent passes user to child. Inspect props in React DevTools.</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Intentional bug: passing usr instead of user */}
        <UserDisplay {...({ usr: user } as { user?: User })} />
      </CardContent>
    </Card>
  );
}
