import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline } from "@/components/ui/Timeline";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { homeStoryIntro } from "@/data/story";

export function HomeStorySection() {
  return (
    <section id="onas" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          title={homeStoryIntro.heading}
          description={homeStoryIntro.teaser}
        />
        <div className="mt-14">
          <Timeline />
        </div>
        <div className="mt-12">
          <ButtonLink href={homeStoryIntro.ctaHref} variant="secondary">
            {homeStoryIntro.ctaLabel}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
