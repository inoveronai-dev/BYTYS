import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { mainNav } from "@/data/navigation";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-navy-deep">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <BrandLogo height={34} />
          <p className="mt-4 text-sm text-white/55">{site.name}</p>
          <p className="mt-1 text-sm text-white/45">{site.city}</p>
        </div>

        <nav aria-label="Pätička">
          <ul className="space-y-2">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/70 transition hover:text-green-soft"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-2 text-sm">
          <p>
            <a
              href={site.phoneHref}
              className="font-medium text-white transition hover:text-green-soft"
            >
              {site.phone}
            </a>
          </p>
          <p>
            <a
              href={site.emailHref}
              className="text-white/80 transition hover:text-green-soft"
            >
              {site.email}
            </a>
          </p>
          <p className="pt-3 text-xs leading-relaxed text-white/40">
            IČO: {site.ico}
            <br />
            DIČ: {site.dic}
          </p>
        </div>
      </Container>
    </footer>
  );
}
