import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ContactBlock } from "@/components/ui/ContactBlock";
import { Reveal } from "@/components/ui/Reveal";

export function HomeContactSection() {
  return (
    <section id="spojenie" className="relative overflow-hidden bg-navy py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(61,107,79,0.1),transparent_42%)]"
      />

      <Container className="relative">
        <div className="grid items-stretch gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          <div className="lg:col-span-6 xl:col-span-5">
            <Reveal>
              <SectionLabel index="05" label="SPOJENIE" tone="light" />
              <SectionHeading title="Spojenie" tone="light" />
            </Reveal>
            <Reveal delayMs={100} className="mt-10">
              <ContactBlock variant="dark" layout="stack" />
            </Reveal>
          </div>

          <Reveal delayMs={140} className="lg:col-span-6 xl:col-span-7">
            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full lg:min-h-[520px]">
              <Image
                src="/BYTYS_hero_facade.jpg"
                alt="Fasáda bytového domu s osvetlenými oknami v večernom svetle"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                quality={85}
                className="object-cover object-[50%_40%]"
              />
              {/* Soft blend into navy — not a card */}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-r from-navy via-navy/35 to-transparent lg:via-navy/45"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-navy/20 lg:from-navy/30"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
