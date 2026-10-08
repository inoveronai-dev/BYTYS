"use client";

import { useEffect, useRef, useState } from "react";

type Box = { w: number; h: number };
type Pt = { x: number; y: number };

/**
 * Narrow dual-line narrative path through Príbehy.
 * Drawn in section pixel space so both lines terminate on the final photograph.
 */
export function StoryPath() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [box, setBox] = useState<Box>({ w: 100, h: 1000 });
  const [end, setEnd] = useState<Pt>({ x: 50, y: 900 });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    const section = wrap?.parentElement;
    if (!wrap || !section) return;

    const measure = () => {
      const sr = section.getBoundingClientRect();
      const imgs = section.querySelectorAll("img");
      const last = imgs[imgs.length - 1];
      if (!last || sr.height < 10) return;

      const lr = last.getBoundingClientRect();
      setBox({ w: sr.width, h: sr.height });
      // Top edge of the final image, slightly inset from its left side
      setEnd({
        x: lr.left - sr.left + Math.min(36, lr.width * 0.06),
        y: lr.top - sr.top,
      });
      setReady(true);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(section);
    window.addEventListener("resize", measure, { passive: true });

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const { w, h } = box;
  const cx = w * 0.5;
  const gap = 5;

  const spine = (offset: number) =>
    `M ${cx + offset} ${h * 0.02}
     C ${cx + offset + 28} ${h * 0.12}, ${cx + offset - 10} ${h * 0.22}, ${cx + offset} ${h * 0.32}
     C ${cx + offset - 18} ${h * 0.42}, ${cx + offset + 14} ${h * 0.52}, ${cx + offset} ${h * 0.62}
     C ${cx + offset - 12} ${h * 0.72}, ${cx + offset + 8} ${h * 0.8}, ${cx + offset} ${h * 0.86}
     C ${cx + offset - 4} ${h * 0.9}, ${end.x + offset} ${end.y - Math.max(48, h * 0.02)}, ${end.x + offset} ${end.y}`;

  const mobileSpine = (offset: number, startX: number) =>
    `M ${startX} ${h * 0.02}
     C ${startX + 8} ${h * 0.25}, ${startX - 6} ${h * 0.5}, ${startX + 4} ${h * 0.75}
     C ${startX + 6} ${h * 0.85}, ${end.x + offset} ${end.y - Math.max(36, h * 0.02)}, ${end.x + offset} ${end.y}`;

  return (
    <div
      ref={wrapRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[5] overflow-hidden"
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
          d={spine(-gap)}
          fill="none"
          stroke="rgb(61,107,79)"
          strokeOpacity="0.5"
          strokeWidth="1.6"
          strokeLinecap="butt"
        />
        <path
          d={spine(gap)}
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
          d={mobileSpine(-gap, w * 0.12)}
          fill="none"
          stroke="rgb(61,107,79)"
          strokeOpacity="0.48"
          strokeWidth="1.6"
          strokeLinecap="butt"
        />
        <path
          d={mobileSpine(gap, w * 0.155)}
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
