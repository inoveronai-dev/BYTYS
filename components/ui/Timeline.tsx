"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { timeline } from "@/data/story";

type TimelineProps = {
  /** pinned = tall sticky scroll story (homepage); inline = compact (about page) */
  mode?: "pinned" | "inline";
};

const COUNT = timeline.length;

function activeIndexFromProgress(progress: number, reduced: boolean) {
  if (reduced) return COUNT - 1;
  if (progress <= 0.02) return 0;
  return Math.min(COUNT - 1, Math.floor(progress * (COUNT - 1) + 0.001));
}

/**
 * Scroll-linked BYTYS history timeline.
 * Desktop pinned mode: sticky stage + green line grows with scroll.
 * Mobile / inline: progresses as the block moves through the viewport.
 */
export function Timeline({ mode = "inline" }: TimelineProps) {
  const outerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const reducedQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktopQuery = window.matchMedia("(min-width: 768px)");
    setReduced(reducedQuery.matches);

    let frame = 0;
    let lastProgress = -1;

    const update = () => {
      frame = 0;
      const outer = outerRef.current;
      const bar = progressRef.current;
      if (!outer || !bar) return;

      const desktop = desktopQuery.matches;

      if (reducedQuery.matches) {
        setReduced(true);
        lastProgress = 1;
        setProgress(1);
        bar.style.transform = desktop ? "scaleX(1)" : "scaleY(1)";
        return;
      }

      setReduced(false);
      const rect = outer.getBoundingClientRect();
      const viewH = window.innerHeight || 1;
      let next = 0;

      if (mode === "pinned" && desktop) {
        const total = Math.max(rect.height - viewH, 1);
        next = Math.max(0, Math.min(1, -rect.top / total));
      } else {
        const total = Math.max(rect.height + viewH * 0.4, 1);
        next = Math.max(0, Math.min(1, (viewH * 0.5 - rect.top) / total));
      }

      if (Math.abs(next - lastProgress) < 0.002) return;
      lastProgress = next;
      setProgress(next);
      bar.style.transform = desktop
        ? `scaleX(${next.toFixed(4)})`
        : `scaleY(${next.toFixed(4)})`;
    };

    const schedule = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    const onFlags = () => schedule();
    reducedQuery.addEventListener("change", onFlags);
    desktopQuery.addEventListener("change", onFlags);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      reducedQuery.removeEventListener("change", onFlags);
      desktopQuery.removeEventListener("change", onFlags);
    };
  }, [mode]);

  const activeIndex = activeIndexFromProgress(progress, reduced);
  const activeLabel = timeline[activeIndex]?.label ?? "";
  const pinned = mode === "pinned";

  const stage = (
    <div className="relative w-full">
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[42%] -z-0 hidden -translate-x-1/2 -translate-y-1/2 select-none font-serif text-[7.5rem] uppercase leading-none text-blue/[0.035] transition-opacity duration-700 md:block lg:text-[9.5rem]"
      >
        {activeLabel}
      </span>

      <ol className="relative z-10 grid gap-10 md:grid-cols-5 md:gap-5">
        <div
          aria-hidden
          className="absolute bottom-2 left-3 top-2 w-px bg-border/80 md:bottom-auto md:left-0 md:right-0 md:top-[0.85rem] md:h-px md:w-full"
        />
        <div
          ref={progressRef}
          aria-hidden
          className="absolute bottom-2 left-3 top-2 w-px origin-top bg-green will-change-transform md:bottom-auto md:left-0 md:right-0 md:top-[0.85rem] md:h-px md:w-full md:origin-left"
          style={{
            transform: reduced ? "scaleX(1)" : "scaleY(0)",
          }}
        />

        {timeline.map((item, index) => {
          const active = index <= activeIndex;
          const current = index === activeIndex;

          return (
            <li
              key={item.id}
              className={`relative pl-10 transition-[opacity,transform] duration-500 ease-out md:pl-0 md:pt-10 ${
                active
                  ? "translate-y-0 opacity-100"
                  : "translate-y-1 opacity-40 md:opacity-35"
              }`}
            >
              <span
                aria-hidden
                className={`absolute left-[0.4rem] top-1.5 block rounded-full border-2 transition duration-500 ease-out md:left-0 md:top-[0.45rem] ${
                  active
                    ? "h-3.5 w-3.5 scale-100 border-green bg-green shadow-[0_0_0_5px_rgba(61,107,79,0.16)]"
                    : "h-2.5 w-2.5 scale-[0.85] border-border bg-background"
                } ${current ? "shadow-[0_0_0_6px_rgba(61,107,79,0.2)]" : ""}`}
              />
              <p
                className={`font-serif text-[1.65rem] leading-none tracking-[-0.01em] transition-colors duration-500 sm:text-[1.85rem] md:text-[1.55rem] lg:text-[1.85rem] ${
                  active ? "text-blue" : "text-blue/45"
                }`}
              >
                {item.label}
              </p>
              <p
                className={`mt-3 text-sm leading-relaxed transition-colors duration-500 md:text-[0.95rem] ${
                  active ? "text-foreground/80" : "text-muted/70"
                }`}
              >
                {item.text}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );

  return (
    <div
      ref={outerRef}
      className={pinned ? "relative md:h-[210vh]" : "relative"}
      aria-label="História BYTYS"
    >
      <div
        className={
          pinned
            ? "md:sticky md:top-[4.75rem] md:flex md:h-[calc(100svh-4.75rem)] md:items-center"
            : ""
        }
      >
        <Container className="relative w-full py-2 md:py-8">{stage}</Container>
      </div>
    </div>
  );
}
