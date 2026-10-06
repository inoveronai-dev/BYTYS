"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * Cinematic pause between Príbehy and informational sections.
 * Transform-based parallax (no background-attachment: fixed on mobile).
 */
export function HomePhotoInterlude() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offsetY, setOffsetY] = useState(0);
  const [titleVisible, setTitleVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReduceMotion(reduced);
    if (reduced) {
      setTitleVisible(true);
      return;
    }

    const section = sectionRef.current;
    if (!section) return;

    let frame = 0;

    const update = () => {
      const rect = section.getBoundingClientRect();
      const viewH = window.innerHeight || 1;
      // Progress through viewport: -1 (below) → 0 (center) → 1 (above)
      const progress = (viewH / 2 - (rect.top + rect.height / 2)) / viewH;
      const clamped = Math.max(-1, Math.min(1, progress));
      // Subtle vertical shift in px (image is scaled up so edges stay covered)
      setOffsetY(clamped * 36);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    const titleObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
          titleObserver.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    titleObserver.observe(section);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      titleObserver.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[58vh] overflow-hidden bg-navy sm:h-[68vh] lg:h-[80vh]"
      aria-label="Bytostiam v bytoch"
    >
      <div
        className="absolute inset-[-8%]"
        style={
          reduceMotion
            ? undefined
            : {
                transform: `translate3d(0, ${offsetY}px, 0) scale(1.08)`,
                willChange: "transform",
              }
        }
      >
        <Image
          src="/BYTYS_interlude_courtyard.jpg"
          alt="Bytové domy v večernom svetle s osvetlenými oknami"
          fill
          sizes="100vw"
          quality={88}
          className="object-cover object-[50%_42%]"
          priority={false}
        />
      </div>

      {/* Restrained overlay for title readability — windows stay visible */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[rgba(8,18,32,0.28)] sm:bg-[rgba(8,18,32,0.24)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[55%] w-[70%] max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(6,16,30,0.35)_0%,transparent_70%)]"
      />

      <div className="relative z-10 flex h-full items-center justify-center px-5">
        <h2
          className={`font-serif text-[2rem] font-semibold tracking-[-0.01em] text-white [text-shadow:0_2px_4px_rgba(6,16,30,0.45),0_8px_32px_rgba(6,16,30,0.35)] transition duration-700 ease-out sm:text-4xl sm:tracking-[0.02em] lg:text-5xl xl:text-[3.5rem] ${
            titleVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
        >
          Bytostiam v bytoch
        </h2>
      </div>
    </section>
  );
}
