import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ContactBlock } from "@/components/ui/ContactBlock";
import { Reveal } from "@/components/ui/Reveal";

export function HomeContactSection() {
  return (
    <section id="spojenie" className="relative bg-navy py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(61,107,79,0.12),transparent_45%)]"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute left-4 top-10 font-serif text-[7rem] leading-none text-white/[0.04] sm:left-8 sm:text-[9rem]"
      >
        05
      </span>

      <Container className="relative">
        <Reveal>
          <SectionLabel index="05" label="SPOJENIE" tone="light" />
          <SectionHeading title="Spojenie" tone="light" />
        </Reveal>
        <Reveal delayMs={100} className="mt-12">
          <ContactBlock variant="dark" />
        </Reveal>
      </Container>
    </section>
  );
}
