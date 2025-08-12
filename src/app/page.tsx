"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import * as Avatar from "@radix-ui/react-avatar";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  ExternalLink,
  Globe,
  Star,
  Download,
  Menu,
  X,
} from "lucide-react";
import {
  BlurOrbProps,
  ExpertiseCategory,
  KPIMetric,
  NavigationItem,
  ProjectCardProps,
  SectionProps,
  SocialLinkProps,
  TechBadgeProps,
} from "./types";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Framer Motion variants
const fadeInUp = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
  },
};

const commonFadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};
const stagger = {
  animate: { transition: { staggerChildren: 0.08 } },
};

// Components
const Section: React.FC<SectionProps> = ({ id, children, className = "" }) => (
  <section
    id={id}
    className={cn("max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", className)}
  >
    {children}
  </section>
);

const BlurOrb: React.FC<BlurOrbProps> = ({ className = "" }) => (
  <div
    aria-hidden
    className={cn(
      "pointer-events-none absolute blur-3xl opacity-30 -z-10",
      className
    )}
    style={{
      background:
        "radial-gradient(600px 300px at 20% 10%, rgba(56,189,248,0.25), transparent 60%), radial-gradient(600px 300px at 80% 10%, rgba(192,132,252,0.25), transparent 60%), radial-gradient(800px 400px at 50% 90%, rgba(34,197,94,0.18), transparent 60%)",
    }}
  />
);

const TechBadge: React.FC<TechBadgeProps> = ({ label }) => (
  <Badge className="bg-background/60 backdrop-blur border border-border text-foreground hover:bg-background/80">
    {label}
  </Badge>
);

const SocialLink: React.FC<SocialLinkProps> = ({ href, children, label }) => (
  <Link
    aria-label={label}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 rounded-2xl border border-border px-3 py-2 hover:shadow-md transition-shadow hover:bg-accent"
  >
    {children}
  </Link>
);

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  href,
  repo,
}) => (
  <motion.div
    variants={{
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    }}
    whileHover={{ y: -6 }}
    className="h-full"
  >
    <Card className="h-full border-border shadow-sm hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-start justify-between gap-4">
        <div className="space-y-1">
          <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
        <Badge variant="secondary" className="rounded-full">
          Featured
        </Badge>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <Badge
            key={t}
            variant="outline"
            className="rounded-full border-border text-muted-foreground"
          >
            {t}
          </Badge>
        ))}
      </CardContent>
      <CardFooter className="flex items-center justify-between gap-2">
        <Button asChild className="rounded-full">
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            <Globe className="size-4" /> Live Demo{" "}
            <ExternalLink className="size-4" />
          </Link>
        </Button>
        {repo && (
          <Button asChild variant="outline" className="rounded-full">
            <Link
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Github className="size-4" /> Source
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  </motion.div>
);

// Main component with proper metadata for Next.js

export default function Portfolio(): React.ReactElement {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const scrollToSection = (sectionId: string): void => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const navigationItems: NavigationItem[] = [
    { label: "Work", id: "work" },
    { label: "Expertise", id: "expertise" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  const techStack: string[] = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS v4",
    "Shadcn",
    "Radix UI",
    "Framer Motion",
    "CVA",
    "Playwright",
    "Accessibility (a11y)",
  ];

  const expertiseCategories: ExpertiseCategory[] = [
    {
      title: "UI Systems",
      points: [
        "Token-driven theming",
        "Accessible patterns (WAI-ARIA)",
        "Composable APIs",
      ],
    },
    {
      title: "Performance",
      points: ["Code-splitting & RSC", "Edge streaming", "Lighthouse 95+"],
    },
    {
      title: "Animations",
      points: [
        "Micro-interactions",
        "Motion with purpose",
        "Reduced motion support",
      ],
    },
    {
      title: "Quality",
      points: ["Playwright & Vitest", "Axe a11y checks", "CI for UI"],
    },
  ];

  const aboutSkills: string[] = [
    "Lead UI architecture",
    "Own design systems",
    "Mentor engineers",
    "Collaborate with design",
    "Measure with data",
  ];

  const kpiMetrics: KPIMetric[] = [
    {
      kpi: "~200ms",
      label: "TTFB on edge routes",
    },
    {
      kpi: "+35%",
      label: "Conversion from UX refactor",
    },
    {
      kpi: "95+",
      label: "Lighthouse scores",
    },
    {
      kpi: "20%",
      label: "Bundle size reduction",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-clip bg-gradient-to-b from-background to-background/40">
      {/* Background orbs */}
      <BlurOrb className="top-[-8rem] left-[-8rem] w-[50rem] h-[30rem]" />
      <BlurOrb className="top-[-10rem] right-[-10rem] w-[50rem] h-[28rem]" />
      <BlurOrb className="bottom-[-18rem] left-1/2 -translate-x-1/2 w-[70rem] h-[30rem]" />

      {/* Skip link for accessibility */}
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 bg-background text-foreground border border-border px-3 py-2 rounded-lg"
      >
        Skip to content
      </a>

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <Section className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <Avatar.Root className="size-9">
              <Avatar.Image src="/avatar.jpg" alt="Frimpong Opoku Agyemang" />
              <Avatar.Fallback className="bg-muted text-muted-foreground">
                FOA
              </Avatar.Fallback>
            </Avatar.Root>
            <span className="font-semibold tracking-tight">
              Frimpong Opoku Agyemang
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex items-center gap-1">
            {navigationItems.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="px-3 py-2 rounded-xl hover:bg-muted transition-colors"
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </Button>
          </div>

          {/* Resume button */}
          <div className="hidden sm:flex items-center gap-2">
            <Button asChild size="sm" className="rounded-full">
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
        </Section>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-t border-border bg-background">
            <Section className="py-4">
              <nav className="flex flex-col gap-2">
                {navigationItems.map(({ label, id }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className="px-3 py-2 rounded-xl hover:bg-muted transition-colors text-left"
                  >
                    {label}
                  </button>
                ))}
                <Button
                  size="sm"
                  className="rounded-full flex items-center gap-2 mt-2 self-start"
                >
                  <Download className="size-4" /> Resume
                </Button>
              </nav>
            </Section>
          </div>
        )}
      </header>

      {/* Hero */}
      <Section className="pt-12 sm:pt-20" id="content">
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <motion.div
            variants={commonFadeInUp}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 backdrop-blur px-3 py-1 text-sm text-muted-foreground">
              <Star className="size-4" /> Available for interesting
              opportunities
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
              Frontend Engineer crafting delightful, performant
              interfaces.
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              I design and build accessible web experiences with{" "}
              <span className="font-semibold">Next.js</span>,{" "}
              <span className="font-semibold">React</span>, and{" "}
              <span className="font-semibold">TypeScript</span>. I obsess over
              details, animations with intent, and shipping robust UI systems.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button
                size="lg"
                className="rounded-full"
                onClick={() => scrollToSection("work")}
              >
                See my work <ArrowUpRight className="size-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full"
                onClick={() => scrollToSection("contact")}
              >
                <Mail className="size-5" /> Get in touch
              </Button>
              <div className="flex items-center gap-2 ml-1">
                <SocialLink
                  href="https://github.com/frimpongopoku"
                  label="GitHub"
                >
                  <Github className="size-5" />
                </SocialLink>
                <SocialLink
                  href="https://www.linkedin.com/in/frimpong-opoku-agyemang-298569127/"
                  label="LinkedIn"
                >
                  <Linkedin className="size-5" />
                </SocialLink>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {techStack.map((label) => (
                <TechBadge key={label} label={label} />
              ))}
            </div>
          </motion.div>

          <motion.div variants={commonFadeInUp} className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-blue-400/25 via-fuchsia-400/20 to-emerald-400/25" />
              <motion.div
                className="absolute inset-2 rounded-[1.8rem] bg-background border border-border shadow-2xl"
                initial={{ rotate: -2, y: 12, opacity: 0 }}
                animate={{ rotate: 0, y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="h-full w-full rounded-[1.6rem] grid place-items-center">
                  <div className="text-center p-6">
                    <p className="text-sm uppercase tracking-widest text-muted-foreground">
                      Showcase
                    </p>
                    <h3 className="text-2xl font-semibold mt-2">
                      Motion + Detail
                    </h3>
                    <p className="text-muted-foreground mt-2 max-w-xs mx-auto">
                      Thoughtful micro-interactions, accessible patterns, and
                      clean architecture.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* Featured Work */}
      <Section id="work" className="py-16 sm:py-24">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Selected Work
            </h2>
            <p className="text-muted-foreground mt-2">
              A few projects that blend UX finesse with solid engineering.
            </p>
          </div>
          {/* <Button asChild variant="ghost" className="rounded-full">
            <Link href="/projects">View all</Link>
          </Button> */}
        </div>
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          <ProjectCard
            title="Realtime Dashboard"
            description="High-performance analytics with Next.js App Router, server actions, and streaming UI."
            tags={["Next.js", "Edge", "Charts", "WebSockets"]}
            href="https://your-demo-url.com/dashboard"
            repo="https://github.com/frimpongopoku/realtime-dashboard"
          />
          <ProjectCard
            title="Design System"
            description="A headless, accessible component toolkit layered with Radix UI + Tailwind tokens."
            tags={["Design Tokens", "Radix", "CVA", "Docs"]}
            href="https://your-demo-url.com/design-system"
            repo="https://github.com/frimpongopoku/design-system"
          />
          <ProjectCard
            title="3D Product Explorer"
            description="WebGL + React for immersive product tours with delightful motion."
            tags={["React", "Three.js", "Framer Motion"]}
            href="https://your-demo-url.com/3d-explorer"
            repo="https://github.com/frimpongopoku/3d-explorer"
          />
        </motion.div>
      </Section>

      {/* Expertise */}
      <Section id="expertise" className="py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Expertise
            </h2>
            <p className="text-muted-foreground">
              From design systems to data-heavy dashboards, I build interfaces
              that feel effortless.
            </p>
          </div>
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="lg:col-span-2 grid sm:grid-cols-2 gap-6"
          >
            {expertiseCategories.map((cat) => (
              <motion.div
                key={cat.title}
                variants={commonFadeInUp}
                className="rounded-2xl border border-border p-6 bg-background/60 backdrop-blur"
              >
                <h3 className="text-lg font-semibold mb-3">{cat.title}</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {cat.points.map((p) => (
                    <li key={p} className="leading-relaxed">
                      • {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* About */}
      <Section id="about" className="py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-border p-6 bg-background/60">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                About
              </h2>
              <p className="text-muted-foreground mt-3 leading-relaxed">
                Over the past <span className="font-medium">5 years</span>, I've
                built products across SaaS, e‑commerce, and developer tools. I
                thrive at the intersection of design and engineering: building
                systems, shipping features, and mentoring teams.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {aboutSkills.map((s) => (
                  <Badge key={s} variant="secondary" className="rounded-full">
                    {s}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="grid sm:grid-cols-2 gap-6"
            >
              {kpiMetrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl border border-border p-6 bg-background/60 text-center"
                >
                  <div className="text-3xl font-bold tracking-tight">
                    {m.kpi}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {m.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="pb-20 pt-8">
        <div className="rounded-3xl border border-border p-8 sm:p-12 bg-background/60 backdrop-blur text-center shadow-sm">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Let's build something great
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            I'm currently exploring senior/principal roles and consulting
            opportunities. If you have an interesting problem, I'd love to hear
            about it.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Button asChild size="lg" className="rounded-full">
              <a
                href="mailto:message@mrfrimpong.com"
                className="inline-flex items-center gap-2"
                target="_blank"
              >
                <Mail className="size-5" /> Email me
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full"
            >
              <Link
                href="https://calendly.com/mrfrimpong"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Globe className="size-5" /> Book a call
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <Section className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Frimpong Opoku Agyemang. All rights
            reserved.
          </p>
          <div className="flex items-center gap-3">
            <Link href="/imprint" className="hover:text-foreground">
              Imprint
            </Link>
            <span aria-hidden>·</span>
            <Link href="/privacy" className="hover:text-foreground">
              Privacy
            </Link>
          </div>
        </Section>
      </footer>
    </main>
  );
}
