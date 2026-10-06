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
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-full w-full">
      <path
        d="M7 3.5h7.5L19 8v12.5a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path d="M14.5 3.5V8H19" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  ),
  vyhlasky: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-full w-full">
      <path
        d="M5 6.5h14M5 12h14M5 17.5h9"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  ),
  "ceny-energii": (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-full w-full">
      <path
        d="M13 2.5 5.8 13.2h5.4L10.2 21.5 18.2 10.8h-5.3L13 2.5Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
    </svg>
  ),
} as const;

export function HomeLegislationSection() {
  return (
    <section className="relative overflow-hidden bg-blue-tint py-24 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-0 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(30,58,95,0.08),transparent_68%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(61,107,79,0.07),transparent_70%)]"
      />

      <Container className="relative">
        <Reveal>
          <SectionLabel index="04" label="LEGISLATÍVA" tone="blue" />
          <SectionHeading
            title="Legislatíva"
            description="Prehľad zákonov, vyhlášok a zdrojov k cenám energií relevantných pre správu bytových domov."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-3 sm:items-stretch">
          {legislativaCategories.map((category, index) => (
            <Reveal
              key={category.id}
              delayMs={index * 100}
              className="h-full"
            >
              <Link
                href={`/legislativa#${category.id}`}
                className="group relative flex h-full min-h-[260px] flex-col overflow-hidden border border-blue/10 bg-surface-elevated px-6 py-8 transition duration-300 hover:-translate-y-[3px] hover:border-green/30 sm:min-h-[300px] lg:min-h-[320px] lg:px-7 lg:py-9"
              >
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-green transition duration-300 group-hover:scale-x-100"
                />

                {/* Large watermark icon — pale, quiet, upper-right */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-3 top-4 h-[7.5rem] w-[7.5rem] text-blue/[0.07] transition duration-300 group-hover:text-blue/[0.1] sm:top-5 sm:h-36 sm:w-36 lg:-right-2 lg:h-40 lg:w-40"
                >
                  {icons[category.id as keyof typeof icons]}
                </span>

                <div className="relative">
                  <p className="font-serif text-5xl tabular-nums text-green transition group-hover:text-green-soft sm:text-6xl">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                </div>

                <div className="relative mt-auto pt-12">
                  <h3 className="font-serif text-2xl text-blue sm:text-[1.65rem]">
                    {category.heading}
                  </h3>
                  <p className="mt-4 text-sm text-muted">
                    {category.items.length} {countLabel(category.items.length)}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={140} className="mt-12">
          <ButtonLink href="/legislativa" variant="secondary">
            Otvoriť legislatívu
          </ButtonLink>
        </Reveal>
      </Container>
    </section>
  );
}
