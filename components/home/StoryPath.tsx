"use client";

import { useLayoutEffect, useRef, useState } from "react";

type Box = { w: number; h: number };
type Pt = { x: number; y: number };

/**
 * Single narrative path through Príbehy.
 * Ends behind the final photograph (story 08) — nothing continues past it.
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
        // End at the top edge of story 08 — photo sits above (z) so the tip is behind it
        setEnd({
          x: lr.left - sr.left + Math.min(28, lr.width * 0.05),
          y: Math.max(0, lr.top - sr.top),
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

  // Approach the final photo vertically so the terminus doesn’t form a hooked arc
  const approach = Math.max(120, h * 0.05);

  /** Gentle single spine — no twin line, no marker dots */
  const spine = (x: number) =>
    `M ${x} ${h * 0.02}
     C ${x + 22} ${h * 0.14}, ${x - 8} ${h * 0.26}, ${x} ${h * 0.38}
     C ${x - 14} ${h * 0.5}, ${x + 10} ${h * 0.62}, ${x} ${h * 0.74}
     C ${x - 4} ${h * 0.82}, ${end.x} ${end.y - approach}, ${end.x} ${end.y}`;

  const mobileSpine = (startX: number) =>
    `M ${startX} ${h * 0.02}
     C ${startX + 6} ${h * 0.28}, ${startX - 4} ${h * 0.55}, ${startX + 2} ${h * 0.78}
     C ${startX + 2} ${end.y - approach}, ${end.x} ${end.y - approach * 0.4}, ${end.x} ${end.y}`;

  // Clip hard at the terminus — nothing paints past story 08
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
