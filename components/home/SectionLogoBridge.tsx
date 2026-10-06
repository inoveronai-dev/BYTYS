import { BrandLogo } from "@/components/ui/BrandLogo";

/**
 * Centered logo on the seam between O nás and Príbehy —
 * half over each section background.
 */
export function SectionLogoBridge() {
  return (
    <div className="relative z-20 h-0" aria-hidden="true">
      <div className="pointer-events-none absolute left-1/2 top-0 flex -translate-x-1/2 -translate-y-1/2 justify-center px-6">
        <div className="origin-center scale-[0.78] sm:scale-[0.92] lg:scale-100">
          <BrandLogo
            href={null}
            height={108}
            className="[filter:drop-shadow(0_1px_2px_rgba(255,255,255,0.7))_drop-shadow(0_2px_10px_rgba(19,37,61,0.12))]"
          />
        </div>
      </div>
    </div>
  );
}
