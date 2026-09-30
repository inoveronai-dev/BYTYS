import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "text";

const variants: Record<Variant, string> = {
  primary:
    "bg-blue text-white hover:bg-blue-soft focus-visible:outline-offset-2",
  secondary:
    "border border-blue/25 bg-transparent text-blue hover:border-green hover:text-green",
  ghost:
    "border border-border bg-surface-elevated text-foreground hover:border-blue/40",
  text: "text-blue underline-offset-4 hover:underline hover:text-green px-0 py-0",
};

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  const base =
    variant === "text"
      ? "inline-flex items-center gap-2 text-base font-medium transition"
      : "inline-flex items-center justify-center gap-2 rounded-sm px-5 py-3 text-sm font-semibold tracking-wide transition";

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
