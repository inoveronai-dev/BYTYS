import { BrandLogo } from "@/components/ui/BrandLogo";

/**
 * Centered logo sitting on the seam between the light Príbehy section
 * and the dark photo interlude — half over each background.
 */
export function SectionLogoBridge() {
  return (
    <div className="relative z-20 h-0" aria-hidden="true">
      <div className="pointer-events-none absolute left-1/2 top-0 flex -translate-x-1/2 -translate-y-1/2 justify-center px-6">
        <div className="origin-center scale-[0.72] sm:scale-[0.88] lg:scale-100">
          <BrandLogo
            href={null}
            height={88}
            className="[filter:drop-shadow(0_1px_1px_rgba(247,245,241,0.65))_drop-shadow(0_2px_8px_rgba(6,14,28,0.2))]"
          />
        </div>
      </div>
    </div>
  );
}
