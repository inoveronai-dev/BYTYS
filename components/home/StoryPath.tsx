/**
 * Narrow continuous narrative path through the Príbehy section.
 * Abstract ribbon only — not a road, not large green fields.
 */
export function StoryPath() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <svg
        className="absolute inset-0 hidden h-full w-full sm:block"
        viewBox="0 0 100 1200"
        preserveAspectRatio="none"
        focusable="false"
      >
        {/* Soft filled ribbon (~6–8 units ≈ 60–80px at typical widths) */}
        <path
          d="M46 20
             C52 90, 58 150, 54 220
             C50 290, 42 350, 46 420
             C50 490, 58 550, 52 620
             C46 690, 40 750, 46 820
             C52 890, 56 950, 50 1020
             C44 1090, 48 1140, 50 1180
             L56 1180
             C54 1140, 50 1090, 56 1020
             C62 950, 58 890, 52 820
             C46 750, 52 690, 58 620
             C64 550, 56 490, 52 420
             C48 350, 56 290, 60 220
             C64 150, 58 90, 52 20
             Z"
          fill="rgb(61,107,79)"
          fillOpacity="0.08"
        />
        {/* Thin brighter core */}
        <path
          d="M50 24
             C56 100, 52 180, 50 260
             C48 340, 54 420, 50 500
             C46 580, 52 660, 50 740
             C48 820, 54 900, 50 980
             C46 1060, 50 1120, 50 1176"
          fill="none"
          stroke="rgb(61,107,79)"
          strokeOpacity="0.32"
          strokeWidth="0.9"
          strokeLinecap="round"
        />
      </svg>

      {/* Mobile — thinner left-of-center path */}
      <svg
        className="absolute inset-0 h-full w-full sm:hidden"
        viewBox="0 0 100 1200"
        preserveAspectRatio="none"
        focusable="false"
      >
        <path
          d="M12 16
             C16 100, 10 200, 14 300
             C18 400, 12 500, 14 600
             C16 700, 10 800, 14 900
             C18 1000, 12 1100, 14 1180
             L20 1180
             C18 1100, 24 1000, 20 900
             C16 800, 22 700, 20 600
             C18 500, 24 400, 20 300
             C16 200, 22 100, 18 16
             Z"
          fill="rgb(61,107,79)"
          fillOpacity="0.1"
        />
        <path
          d="M16 20
             C18 120, 14 240, 16 360
             C18 480, 14 600, 16 720
             C18 840, 14 960, 16 1176"
          fill="none"
          stroke="rgb(61,107,79)"
          strokeOpacity="0.36"
          strokeWidth="1.1"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

/** Quiet chapter marker on the story path */
export function StorySpineMarker({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute z-[1] flex h-3 w-3 items-center justify-center ${className}`}
    >
      <span className="absolute h-3 w-3 rounded-full bg-green/[0.12] ring-1 ring-green/30" />
      <span className="relative h-1.5 w-1.5 rounded-full bg-green/65" />
    </span>
  );
}
