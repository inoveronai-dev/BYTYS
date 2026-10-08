/**
 * Broad soft wave used between lower homepage section backgrounds.
 * Fill with the PREVIOUS section’s background color.
 */
export function SectionWaveTop({
  fill,
  className = "",
  amplitude = "md",
}: {
  fill: string;
  className?: string;
  amplitude?: "md" | "lg";
}) {
  const heightClass = amplitude === "lg" ? "h-16 sm:h-24 lg:h-28" : "h-12 sm:h-16 lg:h-20";

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 top-0 z-[1] leading-[0] ${heightClass} ${className}`}
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        focusable="false"
      >
        {amplitude === "lg" ? (
          <path
            fill={fill}
            d="M0 0 H1440 V28
               C1200 92, 980 18, 760 64
               C520 118, 320 36, 0 78
               Z"
          />
        ) : (
          <path
            fill={fill}
            d="M0 0 H1440 V36
               C1100 96, 860 12, 620 58
               C380 108, 200 28, 0 64
               Z"
          />
        )}
      </svg>
    </div>
  );
}
