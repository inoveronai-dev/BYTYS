import { type ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
  children?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Tag = "h2",
  className = "",
  children,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl ${alignClass} ${className}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-green">
          {eyebrow}
        </p>
      ) : null}
      <Tag className="font-serif text-3xl leading-tight text-blue sm:text-4xl lg:text-5xl">
        {title}
      </Tag>
      {description ? (
        <p className="mt-5 text-lg leading-relaxed text-muted prose-measure">
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}
