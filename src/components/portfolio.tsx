"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import * as Avatar from "@radix-ui/react-avatar";
import { useTheme } from "next-themes";
import {
  ArrowUpRight,
  Bot,
  CalendarDays,
  Clock3,
  Download,
  ExternalLink,
  Github,
  Globe,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Star,
  Sun,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { PostMeta } from "@/types/blog";

type PortfolioProps = {
  latestPosts: PostMeta[];
};

type NavigationItem = {
  label: string;
  id: string;
};

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
};

const commonFadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const stagger = { animate: { transition: { staggerChildren: 0.08 } } };

const Section: React.FC<SectionProps> = ({ id, children, className = "" }) => (
  <section
    id={id}
    className={cn("max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", className)}
  >
    {children}
  </section>
);

const BlurOrb: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div
    aria-hidden
    className={cn(
      "pointer-events-none absolute opacity-22 -z-10",
      className
    )}
    style={{ background: "var(--orb-1), var(--orb-2), var(--orb-3)" }}
  />
);

const SoftCard: React.FC<React.PropsWithChildren<{ className?: string }>> = ({
  className,
  children,
}) => (
  <div
    className={cn("rounded-2xl glass glass-hover transition-shadow", className)}
  >
    {children}
  </div>
);

function formatPostDate(value: string): string {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(parsed);
}

const selectedWork = [
  {
    title: "Pidaso Ghana",
    description:
      "High-performance payroll management software with Next.js App Router and streaming UI.",
    tags: [
      "Next.js",
      "Edge",
      "Charts",
      "Zustand",
      "TanstackQuery",
      "Shadcn",
      "RadixUI",
    ],
    href: "https://pidaso.com",
  },
  {
    title: "Testewb",
    description:
      "A clean modern platform for hosting bug-bash sessions and gathering feedback.",
    tags: [
      "Design Tokens",
      "Radix",
      "CVA",
      "Firebase",
      "Render",
      "GitHub API",
      "Shadcn",
      "TanstackQuery",
    ],
    href: "https://testewb.com",
  },
  {
    title: "Massenergize",
    description:
      "An open-source platform for managing community energy projects with a clear product workflow.",
    tags: ["React", "Django", "Carbon Calculator", "Redux", "PostgreSQL"],
    href: "https://communities.massenergize.org/",
    repo: "https://github.com/massenergize",
  },
];

export default function Portfolio({ latestPosts }: PortfolioProps): React.ReactElement {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  const scrollToSection = (sectionId: string): void => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const isDark = resolvedTheme === "dark";
    setTheme(isDark ? "dark" : "light");

    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("data-theme", resolvedTheme ?? "light");
      document.documentElement.setAttribute(
        "data-accent",
        isDark ? "orange-rose" : "teal-coral"
      );
    }
  }, [resolvedTheme, setTheme]);

  const toggleTheme = (): void => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);

    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("data-theme", next);
      document.documentElement.setAttribute(
        "data-accent",
        next === "dark" ? "orange-rose" : "teal-coral"
      );
    }
  };

  const navigationItems: NavigationItem[] = [
    { label: "Work", id: "work" },
    { label: "Writing", id: "writing" },
    { label: "Expertise", id: "expertise" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <main
      className="relative min-h-screen overflow-clip"
      style={{ background: "var(--app-bg)", color: "var(--fg)" }}
    >
      <BlurOrb className="top-[-8rem] left-[-8rem] w-[50rem] h-[30rem]" />
      <BlurOrb className="top-[-10rem] right-[-10rem] w-[50rem] h-[28rem]" />
      <BlurOrb className="bottom-[-18rem] left-1/2 -translate-x-1/2 w-[70rem] h-[30rem]" />

      <header
        className="sticky top-0 z-40 border-b"
        style={{
          background: "color-mix(in oklab, var(--bg) 60%, transparent)",
          borderColor: "var(--border)",
        }}
      >
        <Section className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <Avatar.Root className="size-9">
              <Avatar.Image
                src="/og-image.png"
                className="rounded-full"
                alt="Frimpong Opoku Agyemang"
              />
              <Avatar.Fallback className="chip rounded-full text-xs">
                FOA
              </Avatar.Fallback>
            </Avatar.Root>
            <span className="font-semibold tracking-tight">
              Frimpong Opoku Agyemang
            </span>
          </div>

          <nav className="hidden sm:flex items-center gap-1">
            {navigationItems.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="px-3 py-2 rounded-xl transition-colors hover:chip"
              >
                {label}
              </button>
            ))}
            <Link href="/blog" className="px-3 py-2 rounded-xl transition-colors hover:chip">
              Blog
            </Link>
          </nav>

          <div className="hidden sm:flex items-center gap-2">
            <Button
              size="sm"
              onClick={toggleTheme}
              className="rounded-full text-fg-token cursor-pointer chip"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="size-4" />
              ) : (
                <Sun className="size-4" />
              )}
            </Button>
            <Button size="sm" className="rounded-full btn-primary" asChild>
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Download className="size-4" /> Resume
              </Link>
            </Button>
          </div>

          <div className="sm:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="chip"
            >
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </Section>

        {mobileMenuOpen && (
          <div
            className="sm:hidden border-t"
            style={{
              background: "color-mix(in oklab, var(--bg) 60%, transparent)",
              borderColor: "var(--border)",
            }}
          >
            <Section className="py-4">
              <nav className="flex flex-col gap-2">
                {navigationItems.map(({ label, id }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className="px-3 py-2 rounded-xl text-left transition-colors hover:chip"
                  >
                    {label}
                  </button>
                ))}
                <Link href="/blog" className="px-3 py-2 rounded-xl text-left hover:chip">
                  Blog
                </Link>
              </nav>
            </Section>
          </div>
        )}
      </header>

      <Section className="pt-12 sm:pt-20" id="content">
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <motion.div variants={commonFadeInUp} className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm chip">
              <Star className="size-4" style={{ color: "var(--brand)" }} />
              Available for interesting opportunities
            </div>
            <div className="inline-flex mx-1 items-center gap-2 rounded-full px-3 py-1 text-sm chip">
              <Bot className="size-4" style={{ color: "var(--brand)" }} />
              Expert in AI-assisted development
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
              <span
                style={{
                  backgroundImage: "var(--gradient-brand)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Full Stack Engineer
              </span>{" "}
              crafting delightful, performant web applications.
            </h1>
            <p className="text-base sm:text-lg leading-relaxed max-w-2xl text-muted-token">
              I design and build accessible products with NestJS + Next.js +
              TypeScript, from secure backend APIs to polished frontend systems.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button
                size="lg"
                className="rounded-full btn-primary"
                onClick={() => scrollToSection("work")}
              >
                See my work <ArrowUpRight className="size-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full btn-outline"
                onClick={() => scrollToSection("contact")}
              >
                <Mail className="size-5" /> Get in touch
              </Button>
              <div className="flex items-center gap-2 ml-1">
                <Link
                  href="https://github.com/frimpongopoku"
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-xl chip px-3 py-2"
                >
                  <Github className="size-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/frimpong-opoku-agyemang-298569127/"
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-xl chip px-3 py-2"
                >
                  <Linkedin className="size-5" />
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div variants={commonFadeInUp} className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
              <div
                className="absolute inset-0 rounded-[2rem]"
                style={{ backgroundImage: "var(--gradient-hero)" }}
              />
              <motion.div
                className="absolute inset-2 rounded-[1.8rem] shadow"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  boxShadow: "var(--shadow-elev-2)",
                }}
                initial={{ rotate: -2, y: 12, opacity: 0 }}
                animate={{ rotate: 0, y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="h-full w-full rounded-[1.6rem] grid place-items-center overflow-hidden">
                  <Image
                    height={800}
                    width={800}
                    src="/me.png"
                    alt="Frimpong Opoku Agyemang"
                    className="w-full h-full rounded-[1.6rem] object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </Section>

      <Section id="work" className="py-16 sm:py-24">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-fg-token">
            Selected Work
          </h2>
          <p className="text-muted-token mt-2">
            Projects that blend UX finesse with practical product engineering.
          </p>
        </div>
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {selectedWork.map((project) => (
            <motion.div key={project.title} variants={commonFadeInUp} whileHover={{ y: -4 }}>
              <SoftCard className="h-full">
                <Card className="h-full bg-transparent border-0 shadow-none">
                  <CardHeader className="space-y-2">
                    <h3 className="text-xl font-semibold tracking-tight text-fg-token">
                      {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-token">
                      {project.description}
                    </p>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} className="rounded-full chip">
                        {tag}
                      </Badge>
                    ))}
                  </CardContent>
                  <CardFooter className="flex gap-3">
                    <Button asChild variant="outline" className="rounded-full btn-outline">
                      <Link href={project.href} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="size-4" /> Demo
                      </Link>
                    </Button>
                    {project.repo ? (
                      <Button asChild variant="outline" className="rounded-full btn-outline">
                        <Link href={project.repo} target="_blank" rel="noopener noreferrer">
                          <Github className="size-4" /> Source
                        </Link>
                      </Button>
                    ) : null}
                  </CardFooter>
                </Card>
              </SoftCard>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section id="writing" className="py-4 sm:py-8">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-fg-token">
              Latest Writing
            </h2>
            <p className="text-muted-token mt-2">
              Notes on frontend architecture, performance, and product quality.
            </p>
          </div>
          <Button asChild className="rounded-full btn-primary">
            <Link href="/blog">
              View all writing <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </div>

        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {latestPosts.map((post) => (
            <motion.div key={post.slug} variants={commonFadeInUp} whileHover={{ y: -4 }}>
              <Link href={`/blog/${post.slug}`} className="group block h-full">
                <SoftCard className="h-full p-6">
                  <div className="mb-4 flex flex-wrap items-center gap-2 text-xs text-muted-token">
                    <span className="inline-flex items-center gap-1 chip rounded-full px-2 py-1">
                      <CalendarDays className="size-3.5" />
                      {formatPostDate(post.date)}
                    </span>
                    <span className="inline-flex items-center gap-1 chip rounded-full px-2 py-1">
                      <Clock3 className="size-3.5" />
                      {post.readingTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-fg-token group-hover:opacity-90 transition-opacity">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-token">
                    {post.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} className="rounded-full chip">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </SoftCard>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section id="expertise" className="py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-fg-token">
              Expertise
            </h2>
            <p className="text-muted-token">
              I build end-to-end web applications that feel polished and scale with real product demands.
            </p>
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "UI Systems",
                points: ["Token-driven theming", "Accessible patterns", "Composable APIs"],
              },
              {
                title: "Performance",
                points: ["RSC and streaming", "Lighthouse 95+", "Fast route transitions"],
              },
              {
                title: "Backend Design",
                points: ["NestJS APIs", "PostgreSQL and Redis", "Reliable integrations"],
              },
              {
                title: "Quality",
                points: ["Playwright and Vitest", "A11y checks", "CI confidence gates"],
              },
            ].map((cat) => (
              <SoftCard key={cat.title}>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-fg-token">{cat.title}</h3>
                  <ul className="space-y-2 text-sm text-muted-token">
                    {cat.points.map((point) => (
                      <li key={point}>• {point}</li>
                    ))}
                  </ul>
                </div>
              </SoftCard>
            ))}
          </div>
        </div>
      </Section>

      <Section id="about" className="py-16 sm:py-24">
        <SoftCard>
          <div className="p-8 sm:p-10 grid gap-6 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-fg-token">
                About
              </h2>
              <p className="text-muted-token mt-3 leading-relaxed">
                Over the past 5 years, I have shipped products across SaaS, e-commerce, and developer tools while owning both design and engineering outcomes.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { kpi: "~200ms", label: "TTFB on edge routes" },
                { kpi: "+35%", label: "Conversion from UX refactor" },
                { kpi: "95+", label: "Lighthouse scores" },
                { kpi: "20%", label: "Bundle reduction" },
              ].map((metric) => (
                <div key={metric.label} className="chip rounded-xl p-4 text-center">
                  <div
                    className="text-3xl font-bold tracking-tight"
                    style={{
                      backgroundImage: "var(--gradient-brand)",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    {metric.kpi}
                  </div>
                  <div className="text-sm text-muted-token mt-1">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </SoftCard>
      </Section>

      <Section id="contact" className="pb-20 pt-8">
        <SoftCard>
          <div className="p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-fg-token">
              Let&apos;s build something great
            </h2>
            <p className="text-muted-token mt-3 max-w-2xl mx-auto">
              I am currently exploring more stable roles. If you have an interesting problem, I would love to hear about it.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" className="rounded-full btn-primary">
                <a href="mailto:message@mrfrimpong.com" className="inline-flex items-center gap-2">
                  <Mail className="size-5" /> Email me
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full btn-outline">
                <Link href="https://calendly.com/mrfrimpong" target="_blank" rel="noopener noreferrer">
                  <Globe className="size-5" /> Book a call
                </Link>
              </Button>
            </div>
          </div>
        </SoftCard>
      </Section>

      <footer className="py-8 border-t" style={{ borderColor: "var(--border)" }}>
        <Section className="text-center text-sm text-muted-token">
          <p>
            © {new Date().getFullYear()} Frimpong Opoku Agyemang. All rights reserved.{" "}
            <Link className="hover:underline font-semibold text-primary" href="mailto:message@mrfrimpong.com">
              message@mrfrimpong.com
            </Link>
          </p>
        </Section>
      </footer>
    </main>
  );
}
