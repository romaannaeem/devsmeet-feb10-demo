"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LoggingDemo } from "@/components/demos/logging-demo";
import { BreakpointDemo } from "@/components/demos/breakpoint-demo";
import { NetworkDemo } from "@/components/demos/network-demo";
import { StateInspectionDemo } from "@/components/demos/state-inspection-demo";
import { StackTraceDemo } from "@/components/demos/stack-trace-demo";

export function DebugDemos() {
  return (
    <Tabs defaultValue="logging" className="w-full max-w-2xl">
      <TabsList className="flex w-full flex-wrap gap-1">
        <TabsTrigger value="logging">Logging</TabsTrigger>
        <TabsTrigger value="breakpoint">Breakpoint</TabsTrigger>
        <TabsTrigger value="network">Network</TabsTrigger>
        <TabsTrigger value="state">State</TabsTrigger>
        <TabsTrigger value="stack">Stack</TabsTrigger>
      </TabsList>
      <TabsContent value="logging" className="mt-6">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Logging Demo</h3>
          <p className="text-sm text-muted-foreground">
            Bug: Counter increments by 2 instead of 1. Use console.log to trace why.
          </p>
          <LoggingDemo />
        </div>
      </TabsContent>
      <TabsContent value="breakpoint" className="mt-6">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Breakpoint Demo</h3>
          <p className="text-sm text-muted-foreground">
            Bug: Discount increases price instead of decreasing. Set a breakpoint on the calculation.
          </p>
          <BreakpointDemo />
        </div>
      </TabsContent>
      <TabsContent value="network" className="mt-6">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Network Demo</h3>
          <p className="text-sm text-muted-foreground">
            Bug: Fetch fails with 404. Check the Network tab for the request URL.
          </p>
          <NetworkDemo />
        </div>
      </TabsContent>
      <TabsContent value="state" className="mt-6">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">State Inspection Demo</h3>
          <p className="text-sm text-muted-foreground">
            Bug: User displays nothing. Inspect component props in React DevTools.
          </p>
          <StateInspectionDemo />
        </div>
      </TabsContent>
      <TabsContent value="stack" className="mt-6">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Stack Trace Demo</h3>
          <p className="text-sm text-muted-foreground">
            Bug: Crashes when rendering. Use the stack trace to find the offending line.
          </p>
          <StackTraceDemo />
        </div>
      </TabsContent>
    </Tabs>
  );
}
