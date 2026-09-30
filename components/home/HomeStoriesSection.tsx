import Link from "next/link";
import { pribehy, pribehyIntro } from "@/data/pribehy";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StoryFeatured } from "@/components/stories/StoryFeatured";
import { StoryRow } from "@/components/stories/StoryRow";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function HomeStoriesSection() {
  const [featured, ...rest] = pribehy;
  const secondary = rest.slice(0, 5);

  return (
    <section id="pribehy" className="border-t border-border bg-surface py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            title="Príbehy"
            description={pribehyIntro}
          />
          <ButtonLink href="/pribehy" variant="secondary" className="shrink-0 self-start sm:self-auto">
            Všetky príbehy
          </ButtonLink>
        </div>

        <div className="mt-14">
          <StoryFeatured story={featured} priority />
        </div>

        <div className="mt-4">
          {secondary.map((story) => (
            <StoryRow key={story.slug} story={story} withImage />
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/pribehy"
            className="text-sm font-semibold uppercase tracking-[0.14em] text-green transition hover:text-blue"
          >
            Všetky príbehy →
          </Link>
        </div>
      </Container>
    </section>
  );
}
