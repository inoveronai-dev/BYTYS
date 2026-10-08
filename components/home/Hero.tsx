"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { site } from "@/data/site";

/**
 * Hero with scroll-linked cinematic zoom toward the warm window cluster.
 * Only the image moves; copy and CTAs stay fixed.
 */
export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const media = mediaRef.current;
    if (!section || !media) return;

    const reducedQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let lastScale = Number.NaN;

    const apply = (scale: number) => {
      if (Math.abs(scale - lastScale) < 0.0008) return;
      lastScale = scale;
      media.style.transform = `scale(${scale.toFixed(4)})`;
    };

    const update = () => {
      frame = 0;
      if (reducedQuery.matches) {
        apply(1);
        return;
      }

      const rect = section.getBoundingClientRect();
      const height = Math.max(rect.height, 1);
      // 0 at top; 1 when the hero has fully scrolled out upward
      const progress = Math.max(0, Math.min(1, -rect.top / height));
      apply(1 + progress * 0.08);
    };

    const schedule = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    apply(1);
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    reducedQuery.addEventListener("change", schedule);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      reducedQuery.removeEventListener("change", schedule);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate min-h-[90svh] overflow-hidden text-white sm:min-h-[95svh] lg:min-h-screen"
    >
      <div
        ref={mediaRef}
        className="absolute inset-0 will-change-transform"
        style={{ transformOrigin: "48% 42%", transform: "scale(1)" }}
      >
        <Image
          src={site.heroImageSrc}
          alt="Fasáda bytového domu v večernom svetle s osvetlenými oknami"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-[50%_40%] sm:object-[50%_45%] lg:object-[48%_42%]"
        />
      </div>

      {/* Very light top support for header only — windows stay visible */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[rgba(8,18,32,0.35)] to-transparent sm:h-40 sm:from-[rgba(8,18,32,0.28)]"
      />

      <div className="relative z-10 flex min-h-[90svh] flex-col sm:min-h-[95svh] lg:min-h-screen">
        <div className="h-[4.25rem] shrink-0 sm:h-[4.75rem]" aria-hidden />

        <div className="flex flex-1 items-center justify-center px-5 pb-16 pt-4 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24">
          <div className="relative w-full max-w-[52rem] translate-y-3 text-center sm:translate-y-4 lg:translate-y-6">
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 h-[140%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-[48%] bg-[radial-gradient(ellipse_at_center,rgba(6,16,30,0.4)_0%,rgba(6,16,30,0.16)_50%,transparent_74%)]"
            />

            <div className="relative mx-auto flex flex-col items-center">
              <h1 className="mx-auto max-w-[20rem] font-display text-[1.7rem] font-medium leading-[1.22] tracking-[-0.01em] text-white [text-shadow:0_1px_3px_rgba(6,16,30,0.5),0_4px_22px_rgba(6,16,30,0.35)] sm:max-w-[36rem] sm:text-[2.35rem] sm:leading-[1.2] lg:max-w-[44rem] lg:text-[2.85rem] lg:leading-[1.18]">
                {site.heroHeadline}
              </h1>

              <span
                aria-hidden
                className="mt-7 inline-block h-px w-10 bg-green sm:mt-8 sm:w-12"
              />

              <p className="mx-auto mt-7 max-w-[28rem] text-[0.95rem] font-medium leading-[1.6] text-white/92 [text-shadow:0_1px_3px_rgba(6,16,30,0.45),0_2px_14px_rgba(6,16,30,0.3)] sm:mt-8 sm:max-w-[36rem] sm:text-base sm:leading-[1.65] lg:max-w-[40rem]">
                {site.heroSupport}
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:mt-10">
                <a
                  href="/o-nas"
                  className="inline-flex items-center border border-white/60 bg-black/12 px-4 py-2 text-sm font-semibold tracking-wide text-white transition hover:border-white hover:bg-black/20"
                >
                  Spoznať náš príbeh
                </a>
                <a
                  href="/spojenie"
                  className="inline-flex items-center text-sm font-semibold tracking-wide text-white/95 [text-shadow:0_1px_3px_rgba(6,16,30,0.4)] underline-offset-4 transition hover:underline"
                >
                  Spojenie →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
