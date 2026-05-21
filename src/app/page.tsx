import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code2, Cpu, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Mr Frimpong | Career Tracks",
  description:
    "Choose between frontend engineering and AI engineering tracks from Frimpong Opoku Agyemang.",
};

export default function HomePage() {
  return (
    <main
      className="relative min-h-screen overflow-x-hidden"
      style={{ background: "var(--app-bg)", color: "var(--fg)" }}
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full opacity-25 bg-[var(--brand)]" />
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full opacity-20 bg-[var(--brand-2)]" />
        <div className="absolute bottom-0 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full opacity-20 bg-[var(--brand)]" />
      </div>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <header className="flex flex-wrap items-center justify-between gap-3">
          <Link href="/" className="chip rounded-full px-4 py-2 text-sm font-medium">
            Mr Frimpong
          </Link>
          <Link href="/blog" className="chip rounded-full px-4 py-2 text-sm">
            Writing
          </Link>
        </header>

        <div className="mt-12 sm:mt-20">
          <p className="inline-flex items-center gap-2 rounded-full chip px-3 py-1 text-sm text-muted-token">
            <Sparkles className="size-4" />
            Career transition, same product standards
          </p>
          <h1 className="mt-6 max-w-4xl text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.04]">
            Building products across two focused tracks.
          </h1>
          <p className="mt-5 max-w-3xl text-sm sm:text-lg text-muted-token leading-relaxed">
            Choose the path that matches your current need. My frontend work remains
            fully intact, and my AI engineering direction is now launching as a
            dedicated track.
          </p>
        </div>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <Link
            href="/frontend"
            className="group block rounded-2xl sm:rounded-3xl glass p-5 sm:p-9 transition-transform hover:-translate-y-1"
          >
            <div className="inline-flex items-center gap-2 rounded-full chip px-3 py-1 text-xs tracking-wide uppercase text-muted-token">
              <Code2 className="size-3.5" />
              Frontend Engineer
            </div>
            <h2 className="mt-4 sm:mt-5 text-2xl sm:text-4xl font-bold tracking-tight">
              Product UI, design systems, and web performance.
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-token leading-relaxed">
              Explore the existing portfolio with selected work, blog writing, and
              implementation depth across modern frontend architecture.
            </p>
            <div className="mt-6 sm:mt-7 inline-flex items-center gap-2 text-sm font-semibold">
              Enter Frontend Track
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>

          <Link
            href="/ai-engineer"
            className="group block rounded-2xl sm:rounded-3xl glass p-5 sm:p-9 transition-transform hover:-translate-y-1"
          >
            <div className="inline-flex items-center gap-2 rounded-full chip px-3 py-1 text-xs tracking-wide uppercase text-muted-token">
              <Cpu className="size-3.5" />
              AI Engineer
            </div>
            <h2 className="mt-4 sm:mt-5 text-2xl sm:text-4xl font-bold tracking-tight">
              Applied AI systems, automation, and intelligent product workflows.
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-token leading-relaxed">
              Visit the new AI track as it evolves into dedicated case studies,
              architecture decisions, and practical agentic engineering work.
            </p>
            <div className="mt-6 sm:mt-7 inline-flex items-center gap-2 text-sm font-semibold">
              Enter AI Track
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
