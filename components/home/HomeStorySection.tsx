import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Timeline } from "@/components/ui/Timeline";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { homeStoryIntro } from "@/data/story";

export function HomeStorySection() {
  return (
    <section
      id="onas"
      className="relative overflow-hidden bg-background py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(30,58,95,0.07),transparent_68%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(61,107,79,0.06),transparent_70%)]"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute right-6 top-16 font-serif text-[7rem] leading-none text-blue/[0.035] sm:right-10 sm:text-[9rem]"
      >
        01
      </span>

      <Container className="relative">
        <Reveal>
          <SectionLabel index="01" label="O NÁS" />
          <SectionHeading
            title={homeStoryIntro.heading}
            description={homeStoryIntro.teaser}
          />
        </Reveal>
        <div className="mt-16">
          <Timeline />
        </div>
        <Reveal delayMs={120} className="mt-14">
          <ButtonLink href={homeStoryIntro.ctaHref} variant="secondary">
            {homeStoryIntro.ctaLabel}
          </ButtonLink>
        </Reveal>
      </Container>
    </section>
  );
}
