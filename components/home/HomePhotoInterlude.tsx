"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * Visual pause between Príbehy and the informational sections.
 * Uses an existing local dusk-facade story image.
 */
export function HomePhotoInterlude() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setActive(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      aria-hidden
      className="relative overflow-hidden bg-background py-10 sm:py-14 lg:py-16"
    >
      <div className="relative mx-auto w-full max-w-[92rem] px-0 sm:px-5 lg:px-8">
        <div className="relative aspect-[16/9] min-h-[42vh] overflow-hidden sm:min-h-[55vh] lg:aspect-auto lg:h-[78vh]">
          <Image
            src="/stories/story-07.jpg"
            alt=""
            fill
            sizes="100vw"
            quality={85}
            className={`object-cover object-[50%_45%] transition-transform duration-[1800ms] ease-out ${
              active ? "scale-[1.03]" : "scale-100"
            }`}
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-[rgba(8,18,32,0.18)] via-transparent to-[rgba(8,18,32,0.08)]"
          />
        </div>
      </div>
    </section>
  );
}
