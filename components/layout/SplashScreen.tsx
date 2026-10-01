"use client";

import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/ui/BrandLogo";

const STORAGE_KEY = "bytys-splash-seen";

export function SplashScreen() {
  const [phase, setPhase] = useState<"boot" | "show" | "exit" | "done">(
    "boot",
  );

  useEffect(() => {
    let timers: number[] = [];
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let alreadySeen = false;
    try {
      alreadySeen = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      alreadySeen = false;
    }

    if (alreadySeen) {
      document.documentElement.removeAttribute("data-splash");
      setPhase("done");
      return;
    }

    document.documentElement.setAttribute("data-splash", "1");
    setPhase("show");

    if (reduced) {
      timers = [
        window.setTimeout(() => {
          try {
            sessionStorage.setItem(STORAGE_KEY, "1");
          } catch {
            /* ignore */
          }
          document.documentElement.removeAttribute("data-splash");
          setPhase("done");
        }, 350),
      ];
      return () => timers.forEach(clearTimeout);
    }

    // ~1.2s total: fade in → hold → fade out
    timers = [
      window.setTimeout(() => setPhase("exit"), 900),
      window.setTimeout(() => {
        try {
          sessionStorage.setItem(STORAGE_KEY, "1");
        } catch {
          /* ignore */
        }
        document.documentElement.removeAttribute("data-splash");
        setPhase("done");
      }, 1300),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  if (phase === "boot" || phase === "done") {
    return null;
  }

  return (
    <div
      data-splash-root
      aria-hidden={phase === "exit"}
      className={`bytys-splash ${phase === "exit" ? "is-exiting" : "is-visible"}`}
    >
      <div className="bytys-splash-logo">
        <BrandLogo height={56} href={null} priority />
      </div>
    </div>
  );
}
