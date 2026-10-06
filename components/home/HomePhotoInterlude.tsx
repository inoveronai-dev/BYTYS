"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Editorial pause matching the classic fixed-background technique
 * (same principle as TRYES `.bg-fixed`: image stays in the viewport,
 * section content scrolls over it).
 */
export function HomePhotoInterlude() {
  const sectionRef = useRef<HTMLElement>(null);
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTitleVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.28 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bytys-interlude-bg relative flex min-h-[62vh] items-center justify-center sm:min-h-[72vh] lg:min-h-[85vh]"
      aria-label="Bytostiam v bytoch"
    >
      {/* Soft overlay — same role as TRYES data-overlay-dark */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[rgba(6,14,28,0.28)] sm:bg-[rgba(6,14,28,0.22)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(4,12,26,0.38)_0%,rgba(4,12,26,0.12)_45%,transparent_72%)]"
      />

      <div className="relative z-10 flex w-full items-center justify-center px-6 py-20">
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
