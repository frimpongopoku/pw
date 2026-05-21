import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BrainCircuit, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Engineer | Mr Frimpong",
  description:
    "AI engineering track for Frimpong Opoku Agyemang. Applied AI systems, workflow automation, and intelligent product development.",
};

export default function AiEngineerPage() {
  return (
    <main
      className="relative min-h-screen overflow-x-hidden"
      style={{ background: "var(--app-bg)", color: "var(--fg)" }}
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-12 -left-10 h-64 w-64 rounded-full opacity-25 bg-[var(--brand)]" />
        <div className="absolute -top-8 right-0 h-72 w-72 rounded-full opacity-20 bg-[var(--brand-2)]" />
      </div>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <Link href="/" className="inline-flex items-center gap-2 chip rounded-full px-4 py-2 text-xs sm:text-sm">
          <ArrowLeft className="size-4" />
          Back to career tracks
        </Link>

        <div className="mt-8 sm:mt-10 rounded-2xl sm:rounded-3xl glass p-5 sm:p-12">
          <p className="inline-flex items-center gap-2 rounded-full chip px-3 py-1 text-xs uppercase tracking-wide text-muted-token">
            <Sparkles className="size-3.5" />
            New Career Direction
          </p>
          <h1 className="mt-4 sm:mt-5 text-3xl sm:text-5xl font-black tracking-tight leading-[1.06]">
            AI Engineer
          </h1>
          <p className="mt-4 sm:mt-5 max-w-3xl text-sm sm:text-lg text-muted-token leading-relaxed">
            This page is now live as the foundation for my AI engineering profile.
            We will shape this into a full experience with projects, architecture
            notes, and outcomes focused on practical AI product delivery.
          </p>

          <div className="mt-7 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {[
              "LLM-powered workflows",
              "Agentic product systems",
              "Automation + reliability",
            ].map((item) => (
              <div key={item} className="chip rounded-2xl px-4 py-3 text-sm">
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3">
            <Link href="/frontend" className="btn-outline rounded-full px-5 py-2.5 text-sm font-medium w-full sm:w-auto text-center">
              View Frontend Track
            </Link>
            <Link href="/blog" className="btn-primary rounded-full px-5 py-2.5 text-sm font-medium inline-flex items-center justify-center gap-2 w-full sm:w-auto">
              Read Writing
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 flex items-center gap-2 text-xs sm:text-sm text-muted-token">
          <BrainCircuit className="size-4" />
          Content roadmap is next. Structure is now in place.
        </div>
      </section>
    </main>
  );
}
