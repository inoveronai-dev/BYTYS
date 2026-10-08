import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Timeline } from "@/components/ui/Timeline";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { homeStoryIntro } from "@/data/story";

export function HomeStorySection() {
  return (
    <section id="onas" className="relative bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(30,58,95,0.07),transparent_68%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(61,107,79,0.06),transparent_70%)]"
      />

      <Container className="relative pt-24 sm:pt-32">
        <Reveal>
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <SectionLabel
              index="01"
              label="O NÁS"
              className="mb-5 text-center"
            />
            <h2 className="font-serif text-4xl leading-[1.08] tracking-[-0.02em] text-blue sm:text-5xl lg:text-[3.5rem]">
              {homeStoryIntro.heading}
            </h2>
            <span
              aria-hidden
              className="mt-7 h-px w-12 bg-green sm:mt-8 sm:w-14"
            />
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted sm:mt-8 sm:text-xl sm:leading-relaxed">
              {homeStoryIntro.teaser}
            </p>
          </div>
        </Reveal>
      </Container>

      <div className="relative mt-8 sm:mt-10">
        <Timeline mode="pinned" />
      </div>

      <Container className="relative pb-28 pt-6 sm:pb-36 sm:pt-8">
        <Reveal delayMs={80} className="flex justify-center">
          <ButtonLink href={homeStoryIntro.ctaHref} variant="secondary">
            {homeStoryIntro.ctaLabel}
          </ButtonLink>
        </Reveal>
      </Container>
    </section>
  );
}
