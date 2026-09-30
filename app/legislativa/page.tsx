import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DocumentLink } from "@/components/ui/DocumentLink";
import { legislativaCategories } from "@/data/legislativa";

export const metadata: Metadata = {
  title: "Legislatíva",
};

export default function LegislationPage() {
  return (
    <div>
      <Container className="pb-10 pt-12 sm:pb-12 sm:pt-16">
        <SectionHeading
          as="h1"
          title="Legislatíva"
          description="Prehľad zákonov, vyhlášok a zdrojov k cenám energií."
        />
      </Container>

      <Container className="space-y-16 pb-24">
        {legislativaCategories.map((category) => (
          <section key={category.id} id={category.id}>
            <h2 className="border-b border-border pb-4 font-serif text-2xl text-blue sm:text-3xl">
              {category.heading}
            </h2>
            <div className="mt-2">
              {category.items.map((item) => (
                <DocumentLink
                  key={item.title}
                  title={item.title}
                  href={item.href}
                />
              ))}
            </div>
          </section>
        ))}
      </Container>
    </div>
  );
}
