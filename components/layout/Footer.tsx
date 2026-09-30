import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { mainNav } from "@/data/navigation";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <BrandLogo height={34} />
          <p className="mt-4 text-sm text-muted">{site.name}</p>
          <p className="mt-1 text-sm text-muted">{site.city}</p>
        </div>

        <nav aria-label="Pätička">
          <ul className="space-y-2">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-foreground/80 transition hover:text-green"
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
              className="font-medium text-blue transition hover:text-green"
            >
              {site.phone}
            </a>
          </p>
          <p>
            <a
              href={site.emailHref}
              className="text-blue transition hover:text-green"
            >
              {site.email}
            </a>
          </p>
          <p className="pt-3 text-xs leading-relaxed text-muted">
            IČO: {site.ico}
            <br />
            DIČ: {site.dic}
          </p>
        </div>
      </Container>
    </footer>
  );
}
