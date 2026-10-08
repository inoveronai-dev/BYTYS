"use client";

import { useLayoutEffect, useRef, useState } from "react";

type Box = { w: number; h: number };
type Pt = { x: number; y: number };

/**
 * Single narrative path through Príbehy.
 * Ends clearly above the final photograph — never paints into it.
 */
export function StoryPath() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [box, setBox] = useState<Box>({ w: 100, h: 1000 });
  const [end, setEnd] = useState<Pt>({ x: 50, y: 900 });
  const [ready, setReady] = useState(false);

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const section = wrap?.parentElement;
    if (!wrap || !section) return;

    let raf = 0;

    const measure = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const sr = section.getBoundingClientRect();
        const imgs = section.querySelectorAll("img");
        const last = imgs[imgs.length - 1];
        if (!last || sr.height < 10 || sr.width < 10) return;

        const lr = last.getBoundingClientRect();
        if (lr.height < 2) return;

        setBox({ w: sr.width, h: sr.height });
        // Stop well above the final image — never paint into the photo
        setEnd({
          x: lr.left - sr.left + Math.min(36, lr.width * 0.06),
          y: Math.max(0, lr.top - sr.top - 56),
        });
        setReady(true);
      });
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(section);
    const trackedImgs = section.querySelectorAll("img");
    trackedImgs.forEach((img) => {
      ro.observe(img);
      img.addEventListener("load", measure);
    });
    window.addEventListener("resize", measure, { passive: true });
    window.addEventListener("scroll", measure, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      trackedImgs.forEach((img) => img.removeEventListener("load", measure));
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", measure);
    };
  }, []);

  const { w, h } = box;
  const cx = w * 0.5;

  /** Single main spine — the left twin was the thin stray between stories 07–08 */
  const spine = (x: number) =>
    `M ${x} ${h * 0.02}
     C ${x + 28} ${h * 0.12}, ${x - 10} ${h * 0.22}, ${x} ${h * 0.32}
     C ${x - 18} ${h * 0.42}, ${x + 14} ${h * 0.52}, ${x} ${h * 0.62}
     C ${x - 12} ${h * 0.72}, ${x + 8} ${h * 0.8}, ${x} ${h * 0.86}
     C ${x - 4} ${h * 0.9}, ${end.x} ${end.y - Math.max(48, h * 0.02)}, ${end.x} ${end.y}`;

  const mobileSpine = (startX: number) =>
    `M ${startX} ${h * 0.02}
     C ${startX + 8} ${h * 0.25}, ${startX - 6} ${h * 0.5}, ${startX + 4} ${h * 0.75}
     C ${startX + 6} ${h * 0.85}, ${end.x} ${end.y - Math.max(36, h * 0.02)}, ${end.x} ${end.y}`;

  // Hard clip so stroke never enters the final photograph
  const clipBottom = ready ? Math.max(0, h - end.y) : 0;

  return (
    <div
      ref={wrapRef}
      aria-hidden
      data-story-path={ready ? "ready" : "pending"}
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      style={
        ready ? { clipPath: `inset(0px 0px ${clipBottom}px 0px)` } : undefined
      }
    >
      <svg
        className="absolute inset-0 hidden h-full w-full sm:block"
        width={w}
        height={h}
        viewBox={`0 0 ${Math.max(w, 1)} ${Math.max(h, 1)}`}
        preserveAspectRatio="none"
        focusable="false"
        style={{ opacity: ready ? 1 : 0 }}
      >
        <path
          d={spine(cx + 5)}
          fill="none"
          stroke="rgb(61,107,79)"
          strokeOpacity="0.5"
          strokeWidth="1.6"
          strokeLinecap="butt"
        />
      </svg>

      <svg
        className="absolute inset-0 h-full w-full sm:hidden"
        width={w}
        height={h}
        viewBox={`0 0 ${Math.max(w, 1)} ${Math.max(h, 1)}`}
        preserveAspectRatio="none"
        focusable="false"
        style={{ opacity: ready ? 1 : 0 }}
      >
        <path
          d={mobileSpine(w * 0.14)}
          fill="none"
          stroke="rgb(61,107,79)"
          strokeOpacity="0.48"
          strokeWidth="1.6"
          strokeLinecap="butt"
        />
      </svg>
    </div>
  );
}

/** Quiet chapter marker on the story path */
export function StorySpineMarker({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute z-[1] flex h-3 w-3 items-center justify-center ${className}`}
    >
      <span className="absolute h-3 w-3 rounded-full bg-green/[0.12] ring-1 ring-green/30" />
      <span className="relative h-1.5 w-1.5 rounded-full bg-green/65" />
    </span>
  );
}
