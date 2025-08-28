"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import * as Avatar from "@radix-ui/react-avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
  Sun,
  Moon,
  Bot,
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
import Image from "next/image";
import { useTheme } from "next-themes";

/* ------- Motion ------- */
const commonFadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};
const stagger = { animate: { transition: { staggerChildren: 0.08 } } };

/* ------- Primitives ------- */
const Section: React.FC<SectionProps> = ({ id, children, className = "" }) => (
  <section
    id={id}
    className={cn("max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", className)}
  >
    {children}
  </section>
);

/** Background orbs use tokenized gradients */
const BlurOrb: React.FC<BlurOrbProps> = ({ className = "" }) => (
  <div
    aria-hidden
    className={cn(
      "pointer-events-none absolute blur-3xl opacity-30 -z-10",
      className
    )}
    style={{ background: `var(--orb-1), var(--orb-2), var(--orb-3)` }}
  />
);

const TechBadge: React.FC<TechBadgeProps> = ({ label }) => (
  <Badge className="chip rounded-full text-fg-token">{label}</Badge>
);

const SocialLink: React.FC<SocialLinkProps> = ({ href, children, label }) => (
  <Link
    aria-label={label}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 rounded-xl chip px-3 py-2 hover:glass-hover transition-shadow"
  >
    {children}
  </Link>
);

/** Minimal, tokenized card */
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

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  href,
  contribution_url,
  repo,
}) => (
  <motion.div
    variants={commonFadeInUp}
    whileHover={{ y: -4 }}
    className="h-full"
  >
    <SoftCard className="h-full">
      <Card className="h-full bg-transparent border-0 shadow-none">
        <CardHeader className="flex flex-row items-start justify-between gap-4">
          <div className="space-y-1">
            <Link
              href={href || "#"}
              target="_blank"
              className=""
              rel="noopener noreferrer"
            >
              <h3 className="text-xl hover:underline inline-flex items-center gap-1 cursor-pointer font-semibold tracking-tight text-fg-token">
                {title} <ExternalLink className="size-4 inline" />
              </h3>
            </Link>
            <p className="text-sm mt-1 leading-relaxed text-muted-token">
              {description}
            </p>
          </div>
          <Badge
            className="rounded-full"
            style={{
              background: "var(--brand)",
              color: "var(--brand-contrast)",
            }}
          >
            Featured
          </Badge>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <Badge key={t} className="rounded-full chip">
              {t}
            </Badge>
          ))}
        </CardContent>
        <CardFooter className="flex items-center justify-between gap-2">
          {/* <Button asChild className="rounded-full btn-primary">
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Globe className="size-4" /> Demo{" "}
                <ExternalLink className="size-4" />
              </Link>
            </Button> */}
          {contribution_url ? (
            <Button
              asChild
              variant="outline"
              className="rounded-full btn-primary"
            >
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                My Contribution <ExternalLink className="size-4" />
              </Link>
            </Button>
          ) : null}

          {repo && (
            <Button
              asChild
              variant="outline"
              className="rounded-full btn-outline"
            >
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
    </SoftCard>
  </motion.div>
);

/* ------- Main ------- */
export default function Portfolio(): React.ReactElement {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  // const [theme, setTheme] = useState<"light" | "dark">("dark");
  // console.log("Resolved theme:", resolvedTheme);
  // const [theme, setTheme] = useState<"light" | "dark">(
  //   (typeof window !== "undefined" &&
  //     (document.documentElement.getAttribute("data-theme") as any)) ||
  //     "light"
  // );

  const scrollToSection = (sectionId: string): void => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const toggleTheme = (): void => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("data-theme", next);
    }
  };

  const setAccent = (
    accent: "teal-coral" | "mint-indigo" | "blue-purple" | "orange-rose"
  ) => {
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("data-accent", accent);
    }
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
      title: "Backend Design",
      points: [
        "SQL Databases (PostgreSQL, MySQL)",
        "NoSQL Databases(MongoDB, Redis)",
        "Resful API Design & Implementation",
        "Third party API Integration Experience",
      ],
    },
    {
      title: "Quality",
      points: ["Playwright & Vitest", "Axe a11y checks", "CI for UI"],
    },
  ];

  const aboutSkills = [
    "Lead UI architecture",
    "Own design systems",
    "Mentor engineers",
    "Collaborate with design",
    "Measure with data",
  ];
  const kpiMetrics: KPIMetric[] = [
    { kpi: "~200ms", label: "TTFB on edge routes" },
    { kpi: "+35%", label: "Conversion from UX refactor" },
    { kpi: "95+", label: "Lighthouse scores" },
    { kpi: "20%", label: "Bundle size reduction" },
  ];

  const selectedWork = [
    {
      title: "Pidaso Ghana",
      description:
        "High-performance payroll management software with Next.js App Router, and streaming UI.",
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
      // repo: "https://github.com/frimpongopoku/realtime-dashboard",
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
        "Github API",
        "Shadcn",
        "TanstackQuery",
        "React Data Tables",
      ],
      href: "https://testewb.com",
      // repo: "https://github.com/frimpongopoku/design-system",
    },
    {
      title: "Massenergize",
      description:
        "An open-source platform for managing community energy projects.",
      tags: ["React", "Django", "Carbon Calculator", "Redux", "PostgreSQL"],
      href: "https://your-demo-url.com/3d-explorer",
      repo: "https://github.com/frimpongopoku/3d-explorer",
    },
  ];

  useEffect(() => {
    const isDark = resolvedTheme === "dark";
    setTheme(isDark ? "dark" : "light");
    if (window !== undefined) {
      document.documentElement.setAttribute("data-theme", resolvedTheme!);
      document.documentElement.setAttribute(
        "data-accent",
        isDark ? "orange-rose" : "teal-coral"
      );
    }
  }, [resolvedTheme]);
  return (
    <main
      className="relative min-h-screen overflow-clip"
      style={{ background: "var(--app-bg)", color: "var(--fg)" }}
    >
      {/* Orbs (use token gradients) */}
      <BlurOrb className="top-[-8rem] left-[-8rem] w-[50rem] h-[30rem]" />
      <BlurOrb className="top-[-10rem] right-[-10rem] w-[50rem] h-[28rem]" />
      <BlurOrb className="bottom-[-18rem] left-1/2 -translate-x-1/2 w-[70rem] h-[30rem]" />

      {/* Skip link */}
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 px-3 py-2 rounded-lg"
        style={{
          background: "var(--surface)",
          color: "var(--fg)",
          border: "1px solid var(--border)",
        }}
      >
        Skip to content
      </a>

      {/* Header */}
      <header
        className="sticky top-0 z-40 backdrop-blur border-b"
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
              <Avatar.Fallback
                style={{
                  background:
                    "color-mix(in oklab, var(--brand) 20%, transparent)",
                  color: "var(--fg)",
                }}
              >
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
                className="px-3 py-2 rounded-xl transition-colors"
                style={{ background: "transparent" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background =
                    "color-mix(in oklab, var(--brand) 10%, transparent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "transparent")
                }
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Right controls */}
          <div className="hidden sm:flex items-center gap-2">
            <Button
              size="sm"
              onClick={toggleTheme}
              className="rounded-full text-fg-token cursor-pointer hover:bg-gray-50 chip"
              aria-label="Toggle theme"
              title="Toggle theme"
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

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="chip"
            >
              {mobileMenuOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </Button>
          </div>
        </Section>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div
            className="sm:hidden backdrop-blur border-t"
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
                    className="px-3 py-2 rounded-xl text-left transition-colors"
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background =
                        "color-mix(in oklab, var(--brand) 10%, transparent)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "transparent")
                    }
                  >
                    {label}
                  </button>
                ))}
                <div className="mt-2 flex gap-2">
                  <Button
                    size="sm"
                    onClick={toggleTheme}
                    className="rounded-full chip"
                  >
                    {theme === "light" ? (
                      <Moon className="size-4" />
                    ) : (
                      <Sun className="size-4" />
                    )}
                  </Button>
                  <Button size="sm" className="rounded-full btn-primary">
                    <Download className="size-4" /> Resume
                  </Button>
                </div>
              </nav>

              {/* Accent pickers */}
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  ["teal-coral", "Teal+Coral"],
                  ["mint-indigo", "Mint+Indigo"],
                  ["blue-purple", "Blue+Purple"],
                  ["orange-rose", "Orange+Rose"],
                ].map(([value, label]) => (
                  <button
                    key={value}
                    onClick={() => setAccent(value as any)}
                    className="px-3 py-1 rounded-full chip text-sm"
                  >
                    {label}
                  </button>
                ))}
              </div>
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
            <div className="inline-flex items-center transition-all animate-bounce gap-2 rounded-full px-3 py-1 text-sm chip">
              <Star className="size-4" style={{ color: "var(--brand)" }} />{" "}
              Available for interesting opportunities
            </div>
            <div className="inline-flex mx-1 items-center transition-all animate-bounce gap-2 rounded-full px-3 py-1 text-sm chip">
              <Bot className="size-4" style={{ color: "var(--brand)" }} />{" "}
              Expert in AI-assisted development
            </div>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05]"
              style={{ color: "var(--fg)" }}
            >
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
              I design and build accessible web experiences with{" "}
              <span className="font-semibold text-fg-token">NestJS</span> +{" "}
              <span className="font-semibold text-fg-token">Next.js</span>{" "}
              <span className="font-semibold text-fg-token">
                TypeScript (Stack)
              </span>
              . I focus on crafting robust, production-ready solutions, from
              architecting secure backend APIs to delivering polished,
              user-friendly frontends.
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
              {[
                "Next.js",
                "NestJS",
                "React(SPA)",
                "TypeScript",
                "Tailwind CSS v4",
                "Shadcn",
                "Radix UI",
                "Framer Motion",
                "TanstackQuery",
                "Redux",
              ].map((label) => (
                <TechBadge key={label} label={label} />
              ))}
            </div>
          </motion.div>

          <motion.div variants={commonFadeInUp} className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
              <div
                className="absolute inset-0 rounded-[2rem]"
                style={{ backgroundImage: "var(--gradient-hero)" }}
              />
              <motion.div
                className="absolute inset-2 group rounded-[1.8rem] shadow"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  boxShadow: "var(--shadow-elev-2)",
                }}
                initial={{ rotate: -2, y: 12, opacity: 0 }}
                animate={{ rotate: 0, y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="h-full w-full rounded-[1.6rem] grid place-items-center">
                  <Image
                    height={800}
                    width={800}
                    priority={false}
                    src="/me.png"
                    alt="Frimpong Opoku Agyemang"
                    className=" w-[100%] h-[100%] rounded-[1.6rem] object-cover"
                  />

                  {/* <div className="text-center p-6">
                    <p className="text-sm uppercase tracking-widest text-muted-token">
                      Showcase
                    </p>
                    <h3
                      className="text-2xl font-semibold mt-2"
                      style={{
                        backgroundImage: "var(--gradient-brand)",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      Motion + Detail
                    </h3>
                    <p className="text-muted-token mt-2 max-w-xs mx-auto">
                      Thoughtful micro-interactions, accessible patterns, and
                      clean architecture.
                    </p>
                  </div> */}
                </div>

                <div className="w-full text-center hidden animate-in group-hover:block my-2">
                  <small>Yhup, that's me! Smiling is my default</small>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* Work */}
      <Section id="work" className="py-16 sm:py-24">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-fg-token">
              Selected Work
            </h2>
            <p className="text-muted-token mt-2">
              A few projects that blend UX finesse with solid engineering.
            </p>
          </div>
        </div>
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {selectedWork.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </motion.div>
      </Section>

      {/* Expertise */}
      <Section id="expertise" className="py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-fg-token">
              Expertise
            </h2>
            <p className="text-muted-token">
              From design systems to data-heavy dashboards, I build end-to-end
              web applications — crafting intuitive interfaces while
              architecting the backend services and APIs that power them.
            </p>
          </div>
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="lg:col-span-2 grid sm:grid-cols-2 gap-6"
          >
            {[
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
                points: [
                  "Code-splitting & RSC",
                  "Edge streaming",
                  "Lighthouse 95+",
                ],
              },
              {
                title: "Backend Design",
                points: [
                  "SQL Databases (PostgreSQL, MySQL)",
                  "NoSQL Databases(MongoDB, Redis)",
                  "Resful API Design & Implementation",
                  "Third party API Integration Experience",
                ],
              },
              {
                title: "Quality",
                points: ["Playwright & Vitest", "Axe a11y checks", "CI for UI"],
              },
            ].map((cat) => (
              <motion.div key={cat.title} variants={commonFadeInUp}>
                <SoftCard>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-3 text-fg-token">
                      {cat.title}
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-token">
                      {cat.points.map((p) => (
                        <li key={p} className="leading-relaxed">
                          • {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </SoftCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* About */}
      <Section id="about" className="py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <SoftCard>
              <div className="p-6">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-fg-token">
                  About
                </h2>
                <p className="text-muted-token mt-3 leading-relaxed">
                  Over the past{" "}
                  <span className="font-medium text-fg-token">5 years</span>,
                  I've built products across SaaS, e-commerce, and developer
                  tools. I thrive at the intersection of design and engineering:
                  building systems, shipping features, and mentoring teams.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "Lead UI architecture",
                    "Own design systems",
                    "Mentor engineers",
                    "Collaborate with design",
                    "Measure with data",
                  ].map((s) => (
                    <Badge key={s} className="rounded-full text-fg-token chip">
                      {s}
                    </Badge>
                  ))}
                </div>
              </div>
            </SoftCard>
          </div>
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="grid sm:grid-cols-2 gap-6"
            >
              {[
                { kpi: "~200ms", label: "TTFB on edge routes" },
                { kpi: "+35%", label: "Conversion from UX refactor" },
                { kpi: "95+", label: "Lighthouse scores" },
                { kpi: "20%", label: "Bundle size reduction" },
              ].map((m) => (
                <SoftCard key={m.label}>
                  <div className="p-6 text-center">
                    <div
                      className="text-3xl font-bold tracking-tight"
                      style={{
                        backgroundImage: "var(--gradient-brand)",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      {m.kpi}
                    </div>
                    <div className="text-sm text-muted-token mt-1">
                      {m.label}
                    </div>
                  </div>
                </SoftCard>
              ))}
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="pb-20 pt-8">
        <SoftCard>
          <div className="p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-fg-token">
              Let's build something great
            </h2>
            <p className="text-muted-token mt-3 max-w-2xl mx-auto">
              I'm currently exploring more stable roles. If you have an
              interesting problem, I'd love to hear about it. Feel free to reach
              out via any of the channels below!
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Button asChild size="lg" className="rounded-full btn-primary">
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
                className="rounded-full btn-outline"
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

            {/* Accent pickers (desktop) */}
            {/* <div className="mt-8 hidden sm:flex items-center justify-center gap-2">
              {[
                ["teal-coral", "Teal+Coral"],
                ["mint-indigo", "Mint+Indigo"],
                ["blue-purple", "Blue+Purple"],
                ["orange-rose", "Orange+Rose"],
              ].map(([value, label]) => (
                <button
                  key={value}
                  onClick={() =>
                    document.documentElement.setAttribute("data-accent", value)
                  }
                  className="px-3 py-1 rounded-full chip text-sm"
                >
                  {label}
                </button>
              ))}
            </div> */}
          </div>
        </SoftCard>
      </Section>

      {/* Footer */}
      <footer
        className="py-8 border-t"
        style={{ borderColor: "var(--border)" }}
      >
        <Section className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-token">
          <p>
            © {new Date().getFullYear()} Frimpong Opoku Agyemang. All rights
            reserved.{" "}
            <Link
              className="cursor-pointer hover:opacity-80 underline font-semibold text-primary"
              href="mailto:message@mrfimpong.com"
            >
              <span>message@mrfrimpong.com</span>
            </Link>
          </p>
          <div className="flex items-center gap-3">
            {/* <Link href="/imprint" className="hover:underline">
              Imprint
            </Link>
            <span aria-hidden>·</span>
            <Link href="/privacy" className="hover:underline">
              Privacy
            </Link> */}
          </div>
        </Section>
      </footer>
    </main>
  );
}
