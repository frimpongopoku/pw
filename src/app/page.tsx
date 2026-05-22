import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Code2, Cpu, Mail, Sparkles } from "lucide-react";

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

        <div className="mt-12 sm:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          <div className="lg:col-span-8">
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
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="https://calendly.com/mrfrimpong"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary rounded-full px-5 py-2.5 text-sm font-medium inline-flex items-center gap-2"
              >
                <CalendarDays className="size-4" />
                Book a call
              </Link>
              <Link
                href="mailto:message@mrfrimpong.com"
                className="btn-outline rounded-full px-5 py-2.5 text-sm font-medium inline-flex items-center gap-2"
              >
                <Mail className="size-4" />
                Email me
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="glass rounded-2xl p-3 sm:p-4 w-full lg:max-w-[18rem] lg:ml-auto">
              <div className="flex items-center gap-3">
                <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full ring-1 ring-black/10 dark:ring-white/20">
                  <Image
                    src="/me.png"
                    alt="Frimpong Opoku Agyemang"
                    width={56}
                    height={56}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-fg-token">Frimpong Opoku Agyemang</p>
                  <p className="text-xs text-muted-token">Full Stack + AI Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <Link
            href="/frontend"
            className="group relative isolate block overflow-hidden rounded-2xl sm:rounded-3xl p-5 sm:p-9 transition-transform hover:-translate-y-1"
            style={{
              background:
                "linear-gradient(170deg, color-mix(in oklab, var(--surface) 88%, white 12%), color-mix(in oklab, var(--surface) 94%, transparent))",
              border: "1px solid color-mix(in oklab, var(--brand) 22%, var(--border) 78%)",
              boxShadow: "var(--shadow-elev-2)",
            }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-70"
              style={{
                background:
                  "linear-gradient(130deg, color-mix(in oklab, var(--brand) 14%, transparent), transparent 45%, color-mix(in oklab, var(--brand-2) 10%, transparent))",
              }}
            />
            <div aria-hidden className="pointer-events-none absolute right-4 top-4 h-14 w-14 rounded-full chip opacity-70" />
            <div className="inline-flex items-center gap-2 rounded-full chip px-3 py-1 text-xs tracking-wide uppercase text-muted-token">
              <Code2 className="size-3.5" />
              Full Stack Engineer
            </div>
            <h2 className="relative mt-4 sm:mt-5 text-2xl sm:text-4xl font-bold tracking-tight">
              Full stack delivery with a strong frontend edge.
            </h2>
            <p className="relative mt-3 sm:mt-4 text-sm sm:text-base text-muted-token leading-relaxed">
              Explore selected work across frontend systems, backend integration,
              product UX, and performance-first implementation.
            </p>
            <div className="relative mt-6 sm:mt-7 inline-flex items-center gap-2 text-sm font-semibold">
              Enter Full Stack Track
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>

          <Link
            href="/ai-engineer"
            className="group relative isolate block overflow-hidden rounded-2xl sm:rounded-3xl p-5 sm:p-9 transition-transform hover:-translate-y-1"
            style={{
              background:
                "linear-gradient(170deg, color-mix(in oklab, var(--surface) 88%, white 12%), color-mix(in oklab, var(--surface) 94%, transparent))",
              border: "1px solid color-mix(in oklab, var(--brand-2) 22%, var(--border) 78%)",
              boxShadow: "var(--shadow-elev-2)",
            }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-70"
              style={{
                background:
                  "linear-gradient(130deg, color-mix(in oklab, var(--brand-2) 14%, transparent), transparent 45%, color-mix(in oklab, var(--brand) 10%, transparent))",
              }}
            />
            <div aria-hidden className="pointer-events-none absolute right-4 top-4 h-14 w-14 rounded-full chip opacity-70" />
            <div className="inline-flex items-center gap-2 rounded-full chip px-3 py-1 text-xs tracking-wide uppercase text-muted-token">
              <Cpu className="size-3.5" />
              AI Engineer
            </div>
            <h2 className="relative mt-4 sm:mt-5 text-2xl sm:text-4xl font-bold tracking-tight">
              Applied AI systems, automation, and intelligent product workflows.
            </h2>
            <p className="relative mt-3 sm:mt-4 text-sm sm:text-base text-muted-token leading-relaxed">
              Visit the new AI track as it evolves into dedicated case studies,
              architecture decisions, and practical agentic engineering work.
            </p>
            <div className="relative mt-6 sm:mt-7 inline-flex items-center gap-2 text-sm font-semibold">
              Enter AI Track
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        </div>

        <div className="mt-8 sm:mt-10 rounded-2xl border border-token bg-surface-token/60 px-3 py-3 sm:px-4">
          <div className="affiliations-marquee overflow-hidden">
            <div className="affiliations-track">
              {[
                "MassEnergize",
                "Pidaso",
                "Testewb",
                "Open Source",
                "Product Teams",
                "Global Clients",
                "MassEnergize",
                "Pidaso",
                "Testewb",
                "Open Source",
                "Product Teams",
                "Global Clients",
              ].map((name, index) => (
                <span
                  key={`${name}-${index}`}
                  className="chip inline-flex items-center rounded-full px-3 py-1 text-xs text-muted-token whitespace-nowrap"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
