import { type ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
  tone?: "default" | "light";
  className?: string;
  children?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Tag = "h2",
  tone = "default",
  className = "",
  children,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const titleTone = tone === "light" ? "text-white" : "text-blue";
  const descriptionTone = tone === "light" ? "text-white/70" : "text-muted";

  return (
    <div className={`max-w-3xl ${alignClass} ${className}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-green">
          {eyebrow}
        </p>
      ) : null}
      <Tag
        className={`font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl ${titleTone}`}
      >
        {title}
      </Tag>
      {description ? (
        <p
          className={`mt-5 text-lg leading-relaxed prose-measure ${descriptionTone}`}
        >
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}
