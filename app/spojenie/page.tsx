import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactBlock } from "@/components/ui/ContactBlock";

export const metadata: Metadata = {
  title: "Spojenie",
};

export default function ContactPage() {
  return (
    <div>
      <Container className="pb-10 pt-12 sm:pb-12 sm:pt-16">
        <SectionHeading as="h1" title="Spojenie" />
      </Container>
      <Container className="pb-24">
        <ContactBlock />
      </Container>
    </div>
  );
}
