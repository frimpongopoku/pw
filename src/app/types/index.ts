import { badgeVariants } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { VariantProps } from "class-variance-authority";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export interface BlurOrbProps {
  className?: string;
}

export interface TechBadgeProps {
  label: string;
}

export interface SocialLinkProps {
  href: string;
  children: React.ReactNode;
  label: string;
}

export interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  href: string;
  repo?: string;
}

export interface NavigationItem {
  label: string;
  id: string;
}

export interface ExpertiseCategory {
  title: string;
  points: string[];
}

export interface KPIMetric {
  kpi: string;
  label: string;
}
