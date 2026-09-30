import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { legislativaCategories } from "@/data/legislativa";

export function HomeLegislationSection() {
  return (
    <section className="border-t border-border bg-surface py-20 sm:py-24">
      <Container>
        <SectionHeading
          title="Legislatíva"
          description="Prehľad zákonov, vyhlášok a zdrojov k cenám energií relevantných pre správu bytových domov."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {legislativaCategories.map((category) => (
            <div
              key={category.id}
              className="border border-border bg-background px-5 py-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-green">
                {category.heading}
              </p>
              <p className="mt-3 text-sm text-muted">
                {category.items.length}{" "}
                {category.items.length === 1
                  ? "položka"
                  : category.items.length < 5
                    ? "položky"
                    : "položiek"}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <ButtonLink href="/legislativa" variant="secondary">
            Otvoriť legislatívu
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
