import { pribehy, pribehyIntro } from "@/data/pribehy";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StoryFeatured } from "@/components/stories/StoryFeatured";
import { StoryImage } from "@/components/stories/StoryImage";
import Link from "next/link";

/** Stories in order 01 → 08. Featured: 01 & 02, mid editorial: 03–05, wide: 06–08 */
export function StoriesOverview({ showIntro = true }: { showIntro?: boolean }) {
  const [featuredA, featuredB, ...rest] = pribehy;
  const mid = rest.slice(0, 3);
  const lower = rest.slice(3);

  return (
    <div>
      {showIntro ? (
        <Container className="pb-12 pt-10 sm:pb-16 sm:pt-14">
          <SectionHeading
            eyebrow="Príbehy"
            title="Príbehy"
            description={pribehyIntro}
            as="h1"
          />
        </Container>
      ) : null}

      <Container className="space-y-4 pb-8">
        <StoryFeatured story={featuredA} priority />
        <StoryFeatured story={featuredB} reverse />
      </Container>

      <Container className="pb-10 pt-4">
        <div className="space-y-10">
          {mid.map((story, index) => (
            <Link
              key={story.slug}
              href={`/pribehy/${story.slug}`}
              className="group grid items-center gap-6 border-b border-border pb-10 lg:grid-cols-12 lg:gap-10"
            >
              <div
                className={`lg:col-span-5 ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <StoryImage
                  slot={story.imageSlot}
                  src={story.imageSrc}
                  alt={story.imageAlt}
                  objectPosition={story.objectPosition}
                  ratio="row"
                  className="transition group-hover:brightness-[0.98]"
                />
              </div>
              <div
                className={`lg:col-span-7 ${
                  index % 2 === 1 ? "lg:order-1 lg:text-right" : ""
                }`}
              >
                <p className="font-serif text-5xl text-green/75 sm:text-6xl">
                  {story.number}
                </p>
                <h3 className="mt-3 font-serif text-3xl text-blue transition group-hover:text-blue-soft sm:text-4xl">
                  {story.title}
                </h3>
                {story.subtitle ? (
                  <p className="mt-2 text-base italic text-muted">
                    {story.subtitle}
                  </p>
                ) : null}
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-green">
                  Čítať príbeh →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>

      <Container className="pb-20 pt-6 sm:pb-28">
        <div className="space-y-10">
          {lower.map((story, index) => (
            <Link
              key={story.slug}
              href={`/pribehy/${story.slug}`}
              className="group grid items-center gap-6 border-b border-border pb-10 lg:grid-cols-12 lg:gap-10"
            >
              <div
                className={`lg:col-span-6 ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <StoryImage
                  slot={story.imageSlot}
                  src={story.imageSrc}
                  alt={story.imageAlt}
                  objectPosition={story.objectPosition}
                  ratio="wide"
                  className="transition group-hover:brightness-[0.98]"
                />
              </div>
              <div
                className={`lg:col-span-6 ${
                  index % 2 === 1 ? "lg:order-1 lg:text-right" : ""
                }`}
              >
                <p className="font-serif text-5xl text-green/75 sm:text-6xl">
                  {story.number}
                </p>
                <h3 className="mt-3 font-serif text-3xl text-blue transition group-hover:text-blue-soft sm:text-4xl">
                  {story.title}
                </h3>
                {story.subtitle ? (
                  <p className="mt-2 text-base italic text-muted">
                    {story.subtitle}
                  </p>
                ) : null}
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-green">
                  Čítať príbeh →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
