"use client";

import { usePathname } from "next/navigation";
import { type ReactNode } from "react";

export function Main({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <main
      className={`flex-1 ${
        isHome ? "pt-0" : "pt-[4.25rem] sm:pt-[4.75rem]"
      }`}
    >
      {children}
    </main>
  );
}
