import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { legislativaCategories } from "@/data/legislativa";

function countLabel(count: number) {
  if (count === 1) return "položka";
  if (count < 5) return "položky";
  return "položiek";
}

const icons = {
  zakony: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7 3.5h7.5L19 8v12.5a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M14.5 3.5V8H19" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  vyhlasky: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 6.5h14M5 12h14M5 17.5h9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  "ceny-energii": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M13 2.5 5.8 13.2h5.4L10.2 21.5 18.2 10.8h-5.3L13 2.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  ),
} as const;

export function HomeLegislationSection() {
  return (
    <section className="relative bg-blue-tint py-24 sm:py-28">
      <span
        aria-hidden
        className="pointer-events-none absolute right-6 top-10 font-serif text-[7rem] leading-none text-blue/[0.04] sm:right-10 sm:text-[9rem]"
      >
        04
      </span>

      <Container className="relative">
        <Reveal>
          <SectionLabel index="04" label="LEGISLATÍVA" tone="blue" />
          <SectionHeading
            title="Legislatíva"
            description="Prehľad zákonov, vyhlášok a zdrojov k cenám energií relevantných pre správu bytových domov."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {legislativaCategories.map((category, index) => (
            <Reveal key={category.id} delayMs={index * 90}>
              <Link
                href={`/legislativa#${category.id}`}
                className="group relative block border border-blue/10 bg-surface-elevated px-6 py-8 transition hover:-translate-y-0.5 hover:border-green/35"
              >
                <span
                  aria-hidden
                  className="absolute left-0 top-0 h-full w-0.5 origin-top scale-y-0 bg-green transition group-hover:scale-y-100"
                />
                <div className="flex items-start justify-between gap-4">
                  <p className="font-serif text-4xl tabular-nums text-green sm:text-5xl">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <span className="text-blue/55 transition group-hover:text-green">
                    {icons[category.id as keyof typeof icons]}
                  </span>
                </div>
                <h3 className="mt-8 font-serif text-2xl text-blue">
                  {category.heading}
                </h3>
                <p className="mt-3 text-sm text-muted">
                  {category.items.length} {countLabel(category.items.length)}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={120} className="mt-12">
          <ButtonLink href="/legislativa" variant="secondary">
            Otvoriť legislatívu
          </ButtonLink>
        </Reveal>
      </Container>
    </section>
  );
}
