import { DebugDemos } from "@/components/debug-demos";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="container mx-auto max-w-4xl px-6 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
            Debugging Demo
          </h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Five approaches to finding and fixing bugs in React
          </p>
        </header>
        <main className="flex justify-center">
          <DebugDemos />
        </main>
      </div>
    </div>
  );
}
