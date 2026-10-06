"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * Cinematic pause between Príbehy and informational sections.
 * Transform-based parallax on desktop; static on mobile / reduced motion.
 */
export function HomePhotoInterlude() {
  const sectionRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const section = sectionRef.current;
    const media = mediaRef.current;
    if (!section || !media) return;

    if (reduced) {
      setTitleVisible(true);
      media.style.transform = "translate3d(0, 0, 0) scale(1)";
      return;
    }

    let frame = 0;
    const desktopQuery = window.matchMedia("(min-width: 768px)");

    const update = () => {
      if (!desktopQuery.matches) {
        media.style.transform = "translate3d(0, 0, 0) scale(1.06)";
        return;
      }

      const rect = section.getBoundingClientRect();
      const viewH = window.innerHeight || 1;
      // -1 when section center is below viewport mid, +1 when above
      const progress = (viewH / 2 - (rect.top + rect.height / 2)) / viewH;
      const clamped = Math.max(-1, Math.min(1, progress));
      // Visible but restrained shift (~±9% of section height)
      const travel = Math.min(rect.height * 0.09, 88);
      const y = clamped * travel;
      media.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0) scale(1.14)`;
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    desktopQuery.addEventListener("change", onScroll);

    const titleObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
          titleObserver.disconnect();
        }
      },
      { threshold: 0.28 },
    );
    titleObserver.observe(section);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      desktopQuery.removeEventListener("change", onScroll);
      titleObserver.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[62vh] overflow-hidden bg-navy-deep sm:h-[72vh] lg:h-[85vh]"
      aria-label="Bytostiam v bytoch"
    >
      <div
        ref={mediaRef}
        className="absolute inset-[-12%] will-change-transform"
        style={{ transformOrigin: "50% 45%" }}
      >
        <Image
          src="/BYTYS_interlude_courtyard.jpg"
          alt="Bytové domy v večernom svetle s osvetlenými oknami"
          fill
          sizes="100vw"
          quality={90}
          className="object-cover object-[50%_42%]"
          priority={false}
        />
      </div>

      {/* Soft overall wash — keep warm window light visible */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[rgba(6,14,28,0.22)] sm:bg-[rgba(6,14,28,0.18)]"
      />
      {/* Center vignette for title only */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(4,12,26,0.42)_0%,rgba(4,12,26,0.18)_42%,transparent_72%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[rgba(6,14,28,0.28)] to-transparent"
      />

      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div
          className={`flex max-w-4xl flex-col items-center text-center transition duration-1000 ease-out ${
            titleVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
        >
          <p className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-white/75 sm:text-xs sm:tracking-[0.42em]">
            BYTYS
          </p>

          <h2 className="mt-5 font-serif text-[2.35rem] font-semibold leading-[1.08] tracking-[-0.018em] text-white [text-shadow:0_1px_2px_rgba(4,12,26,0.35),0_10px_40px_rgba(4,12,26,0.45)] sm:mt-6 sm:text-5xl sm:tracking-[-0.01em] lg:text-[3.75rem] xl:text-[4.25rem]">
            Bytostiam v bytoch
          </h2>

          <span
            aria-hidden
            className="mt-6 h-px w-14 bg-green-soft/90 sm:mt-7 sm:w-16"
          />

          <p className="mt-6 max-w-md font-sans text-[0.95rem] font-normal leading-relaxed tracking-[0.01em] text-white/78 [text-shadow:0_1px_12px_rgba(4,12,26,0.4)] sm:mt-7 sm:text-base sm:leading-relaxed">
            Priestor, kde za každým oknom žije vlastný príbeh.
          </p>
        </div>
      </div>
    </section>
  );
}
