"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { mainNav } from "@/data/navigation";
import { Container } from "@/components/ui/Container";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const overHero = isHome && !scrolled && !open;
  const solid = !overHero;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${
        solid
          ? "border-b border-border/80 bg-background/95 backdrop-blur-sm"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      {/* Subtle top contrast for logo/nav over photography — not an opaque bar */}
      {overHero ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/45 via-black/20 to-transparent"
        />
      ) : null}

      <Container className="relative flex h-[4.25rem] items-center justify-between gap-4 sm:h-[4.75rem] sm:gap-8">
        <div className="sm:hidden">
          <BrandLogo height={34} priority />
        </div>
        <div className="hidden sm:block">
          <BrandLogo height={42} priority />
        </div>

        <nav aria-label="Hlavná navigácia" className="hidden lg:block">
          <ul className="flex items-center gap-7 xl:gap-8">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-sm font-medium tracking-wide transition ${
                    overHero
                      ? "text-white/88 hover:text-white"
                      : "text-foreground/85 hover:text-green"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border lg:hidden ${
            overHero
              ? "border-white/35 text-white"
              : "border-border text-foreground"
          }`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Zavrieť menu" : "Otvoriť menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 h-0.5 w-5 transition ${
                overHero ? "bg-white" : "bg-foreground"
              } ${open ? "top-1.5 rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-5 transition ${
                overHero ? "bg-white" : "bg-foreground"
              } ${open ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute left-0 h-0.5 w-5 transition ${
                overHero ? "bg-white" : "bg-foreground"
              } ${open ? "top-1.5 -rotate-45" : "top-3"}`}
            />
          </span>
        </button>
      </Container>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-border bg-background lg:hidden"
        >
          <Container className="py-4">
            <ul className="flex flex-col">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block py-4 text-lg font-medium text-foreground"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
