import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactBlock } from "@/components/ui/ContactBlock";

export function HomeContactSection() {
  return (
    <section id="spojenie" className="border-t border-border py-20 sm:py-28">
      <Container>
        <SectionHeading title="Spojenie" className="mb-12" />
        <ContactBlock />
      </Container>
    </section>
  );
}
