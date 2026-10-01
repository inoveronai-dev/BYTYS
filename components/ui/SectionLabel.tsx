type SectionLabelProps = {
  index: string;
  label: string;
  tone?: "green" | "blue" | "light";
  className?: string;
};

export function SectionLabel({
  index,
  label,
  tone = "green",
  className = "",
}: SectionLabelProps) {
  const toneClass =
    tone === "light"
      ? "text-green-soft"
      : tone === "blue"
        ? "text-blue"
        : "text-green";

  return (
    <p
      className={`mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.22em] ${toneClass} ${className}`}
    >
      <span className="tabular-nums">{index}</span>
      <span className="mx-2 opacity-50" aria-hidden>
        /
      </span>
      <span>{label}</span>
    </p>
  );
}
