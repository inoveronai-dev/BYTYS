import { type ReactNode } from "react";

/**
 * Subtle green brand thread connecting Certifikáty → Legislatíva → Spojenie.
 */
export function BrandThread({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-[1.15rem] top-0 z-10 hidden w-px bg-gradient-to-b from-green/0 via-green/35 to-green/0 sm:left-[1.75rem] lg:left-[2.35rem] lg:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-[1.05rem] top-[8%] z-10 hidden h-1.5 w-1.5 rounded-full bg-green/50 lg:left-[2.25rem] lg:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-[1.05rem] top-[42%] z-10 hidden h-1.5 w-1.5 rounded-full bg-green/45 lg:left-[2.25rem] lg:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[18%] left-[1.05rem] z-10 hidden h-1.5 w-1.5 rounded-full bg-green/40 lg:left-[2.25rem] lg:block"
      />
      {children}
    </div>
  );
}
