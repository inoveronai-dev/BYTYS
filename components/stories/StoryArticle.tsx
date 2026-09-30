import Link from "next/link";
import type { Pribeh } from "@/data/pribehy";
import { getAdjacentPribehy } from "@/data/pribehy";
import { Container } from "@/components/ui/Container";
import { StoryImage } from "@/components/stories/StoryImage";
import { Story07DataBlock } from "@/components/stories/Story07DataBlock";
import { Story08PriceBlock } from "@/components/stories/Story08PriceBlock";

type StoryArticleProps = {
  story: Pribeh;
};

const toneAccent: Record<Pribeh["tone"], string> = {
  identity: "from-blue/[0.04]",
  personal: "from-green/[0.05]",
  architecture: "from-blue/[0.03]",
  transformation: "from-[#5c5346]/[0.05]",
  investigation: "from-blue/[0.06]",
  "warm-technical": "from-green/[0.04]",
  data: "from-green/[0.06]",
  comparison: "from-blue/[0.04]",
};

export function StoryArticle({ story }: StoryArticleProps) {
  const { prev, next } = getAdjacentPribehy(story.slug);
  const isData = story.number === "07";
  const isComparison = story.number === "08";

  return (
    <article>
      <header
        className={`border-b border-border bg-gradient-to-b ${toneAccent[story.tone]} to-transparent`}
      >
        <Container className="pb-12 pt-10 sm:pb-16 sm:pt-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green">
            Príbeh
          </p>
          <p className="mt-6 font-serif text-7xl leading-none text-green/70 sm:text-8xl lg:text-9xl">
            {story.number}
          </p>
          <h1 className="mt-6 max-w-4xl font-serif text-4xl leading-[1.1] text-blue sm:text-5xl lg:text-6xl">
            {story.title}
          </h1>
          {story.subtitle ? (
            <p className="mt-4 max-w-2xl text-lg italic text-muted sm:text-xl">
              {story.subtitle}
            </p>
          ) : null}
        </Container>
      </header>

      <Container className="py-8 sm:py-12">
        <StoryImage
          slot={story.imageSlot}
          src={story.imageSrc}
          alt={story.imageAlt}
          objectPosition={story.objectPosition}
          ratio={isData || isComparison ? "wide" : "hero"}
          priority
          className="w-full"
        />
      </Container>

      <Container className="pb-20 pt-4 sm:pb-28">
        <div className="mx-auto max-w-[45rem]">
          {isData ? (
            <Story07DataBlock />
          ) : isComparison ? (
            <Story08PriceBlock paragraphs={story.paragraphs} />
          ) : (
            <div className="space-y-8">
              {story.paragraphs.map((paragraph, index) => (
                <div key={index}>
                  {story.pullQuote && index === 1 ? (
                    <blockquote className="my-10 border-l-2 border-green pl-5 font-serif text-2xl leading-snug text-blue sm:pl-7 sm:text-3xl">
                      {story.pullQuote}
                    </blockquote>
                  ) : null}
                  <p className="story-body whitespace-pre-line text-foreground">
                    {paragraph}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        <nav
          aria-label="Ďalšie príbehy"
          className="mx-auto mt-20 grid max-w-[45rem] gap-6 border-t border-border pt-10 sm:grid-cols-2"
        >
          {prev ? (
            <Link
              href={`/pribehy/${prev.slug}`}
              className="group rounded-sm border border-transparent p-1 transition hover:border-border"
            >
              <p className="text-xs uppercase tracking-[0.14em] text-muted">
                Starší príbeh
              </p>
              <p className="mt-2 font-serif text-xl text-blue transition group-hover:text-green">
                <span className="text-green">{prev.number}</span> {prev.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/pribehy/${next.slug}`}
              className="group rounded-sm border border-transparent p-1 text-right transition hover:border-border sm:justify-self-end"
            >
              <p className="text-xs uppercase tracking-[0.14em] text-muted">
                Novší príbeh
              </p>
              <p className="mt-2 font-serif text-xl text-blue transition group-hover:text-green">
                <span className="text-green">{next.number}</span> {next.title}
              </p>
            </Link>
          ) : null}
        </nav>

        <div className="mx-auto mt-10 max-w-[45rem]">
          <Link
            href="/pribehy"
            className="text-sm font-semibold uppercase tracking-[0.14em] text-green transition hover:text-blue"
          >
            ← Všetky príbehy
          </Link>
        </div>
      </Container>
    </article>
  );
}
