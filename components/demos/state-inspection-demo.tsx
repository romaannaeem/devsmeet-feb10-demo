"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type Theme = "light" | "dark";

function Header({ theme }: { theme: Theme }) {
  return (
    <div className={`p-4 rounded ${theme === "dark" ? "bg-slate-800 text-white" : "bg-slate-100 text-black"}`}>
      <h2 className="font-bold">Header</h2>
      <p className="text-sm">Theme: {theme}</p>
    </div>
  );
}

function Sidebar({ theme }: { theme: Theme }) {
  return (
    <div className={`p-4 rounded ${theme === "dark" ? "bg-slate-800 text-white" : "bg-slate-100 text-black"}`}>
      <h2 className="font-bold">Sidebar</h2>
      <p className="text-sm">Theme: {theme}</p>
    </div>
  );
}

function Layout({ theme }: { theme: Theme }) {
  return (
    <div className="space-y-2">
      <Header theme={theme} />
      {/* 🐛 */}
      <Sidebar theme={"light"} />
    </div>
  );
}

export function StateInspectionDemo() {
  const [theme, setTheme] = useState<Theme>("light");

  return (
    <Card>
      <CardHeader>
        <CardTitle>Theme Switcher</CardTitle>
        <CardDescription>
          Toggle theme. Both Header and Sidebar should update.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Layout theme={theme} />
        <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          Toggle Theme
        </Button>
      </CardContent>
    </Card>
  );
}