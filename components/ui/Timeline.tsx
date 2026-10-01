"use client";

import { useEffect, useRef, useState } from "react";
import { timeline } from "@/data/story";

export function Timeline() {
  const ref = useRef<HTMLOListElement>(null);
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
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <ol
      ref={ref}
      className={`timeline relative grid gap-10 md:grid-cols-5 md:gap-4 ${
        active ? "is-active" : ""
      }`}
    >
      <div
        aria-hidden
        className="timeline-track absolute left-3 top-2 bottom-2 w-px bg-border md:left-0 md:right-0 md:top-3 md:bottom-auto md:h-px md:w-full"
      />
      <div
        aria-hidden
        className="timeline-progress absolute left-3 top-2 w-px origin-top bg-green md:left-0 md:right-0 md:top-3 md:h-px md:w-full md:origin-left"
      />

      {timeline.map((item, index) => (
        <li
          key={item.id}
          className="timeline-item relative pl-10 md:pl-0 md:pt-8"
          style={{ transitionDelay: `${index * 120 + 180}ms` }}
        >
          <span
            aria-hidden
            className="timeline-dot absolute left-1.5 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-green bg-background md:left-0 md:top-1.5"
          />
          <p className="font-serif text-2xl text-blue md:text-xl lg:text-2xl">
            {item.label}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted md:text-[0.95rem]">
            {item.text}
          </p>
        </li>
      ))}
    </ol>
  );
}
