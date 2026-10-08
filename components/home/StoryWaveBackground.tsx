/**
 * Organic green ↔ light wave field for the Príbehy section.
 * Green flows through image/edge zones; light keeps titles readable.
 */
export function StoryWaveBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {/* Light reading base */}
      <div className="absolute inset-0 bg-[#f7f5f1]" />

      {/* Desktop — green waves interlocking into the light field */}
      <svg
        className="absolute inset-0 hidden h-full w-full sm:block"
        viewBox="0 0 1000 2600"
        preserveAspectRatio="none"
        focusable="false"
      >
        {/* Top-right green corner sweep — stays clear of main title column */}
        <path
          fill="#3d6b4f"
          d="M1000 0
             V340
             C940 310, 900 360, 860 330
             C800 290, 790 230, 820 170
             C850 110, 910 50, 1000 0
             Z"
        />

        {/* Left mid green lobe — image column side only */}
        <path
          fill="#3d6b4f"
          d="M0 560
             C100 510, 150 600, 210 660
             C280 740, 300 720, 340 800
             C370 860, 350 920, 300 980
             C240 1060, 160 1020, 80 1100
             C30 1150, 0 1120, 0 1180
             Z"
        />

        {/* Right mid green flow — outer edge */}
        <path
          fill="#3d6b4f"
          d="M1000 980
             C920 940, 890 1040, 850 1100
             C800 1180, 820 1260, 860 1320
             C900 1380, 950 1360, 1000 1420
             V1100
             Z"
        />

        {/* Lower-left green rise */}
        <path
          fill="#3d6b4f"
          d="M0 1680
             C140 1600, 220 1720, 320 1660
             C420 1600, 460 1700, 520 1780
             C560 1840, 540 1920, 480 1980
             C400 2070, 300 2020, 180 2100
             C90 2160, 40 2140, 0 2200
             Z"
        />

        {/* Bottom-right green finish */}
        <path
          fill="#3d6b4f"
          d="M1000 1980
             C880 1920, 820 2040, 720 2100
             C600 2180, 560 2140, 480 2240
             C420 2300, 450 2380, 520 2440
             C600 2510, 720 2480, 840 2540
             C920 2570, 970 2580, 1000 2600
             V1980
             Z"
        />

        {/* Soft stone secondary layer for richer depth over green edges */}
        <path
          fill="#ebe8e2"
          opacity="0.35"
          d="M1000 200
             C900 240, 850 180, 780 240
             C700 310, 720 380, 780 440
             C840 500, 920 470, 1000 520
             V280
             Z"
        />
      </svg>

      {/* Mobile — fewer, broader green waves */}
      <svg
        className="absolute inset-0 h-full w-full sm:hidden"
        viewBox="0 0 400 2400"
        preserveAspectRatio="none"
        focusable="false"
      >
        <path
          fill="#3d6b4f"
          d="M400 0 V360
             C320 320, 280 400, 210 360
             C140 320, 130 240, 180 160
             C230 80, 300 30, 400 0 Z"
        />
        <path
          fill="#3d6b4f"
          d="M0 700
             C90 640, 140 760, 210 820
             C280 890, 300 960, 250 1040
             C190 1140, 100 1100, 0 1180 Z"
        />
        <path
          fill="#3d6b4f"
          d="M400 1200
             C300 1140, 250 1280, 180 1360
             C110 1440, 130 1540, 200 1600
             C270 1660, 340 1620, 400 1700
             V1280 Z"
        />
        <path
          fill="#3d6b4f"
          d="M0 1800
             C110 1720, 180 1860, 260 1920
             C330 1970, 340 2080, 280 2160
             C210 2260, 100 2220, 0 2300 Z"
        />
      </svg>
    </div>
  );
}
