import Link from "next/link";
import { pribehy, pribehyIntro, type Pribeh } from "@/data/pribehy";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { StoryImage } from "@/components/stories/StoryImage";

function StoryMeta({
  story,
  align = "left",
  size = "md",
}: {
  story: Pribeh;
  align?: "left" | "right";
  size?: "md" | "lg" | "xl";
}) {
  const numberClass =
    size === "xl"
      ? "text-7xl sm:text-8xl"
      : size === "lg"
        ? "text-6xl sm:text-7xl"
        : "text-5xl sm:text-6xl";
  const titleClass =
    size === "xl"
      ? "text-3xl sm:text-4xl lg:text-5xl"
      : size === "lg"
        ? "text-3xl sm:text-4xl"
        : "text-2xl sm:text-3xl";

  return (
    <div className={align === "right" ? "lg:text-right" : ""}>
      <p
        className={`font-serif leading-none text-green transition group-hover:text-green-soft ${numberClass}`}
      >
        {story.number}
      </p>
      <h3
        className={`mt-4 font-serif leading-tight text-blue transition group-hover:text-blue-soft ${titleClass}`}
      >
        {story.title}
      </h3>
      {story.subtitle ? (
        <p className="mt-3 text-base italic text-muted">{story.subtitle}</p>
      ) : null}
      <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-green">
        Čítať príbeh
        <span
          aria-hidden
          className="inline-block transition group-hover:translate-x-1.5"
        >
          →
        </span>
      </p>
    </div>
  );
}

export function HomeStoriesSection() {
  const [s01, s02, s03, s04, s05, s06, s07, s08] = pribehy;

  return (
    <section
      id="pribehy"
      className="relative bg-stone pt-24 pb-28 sm:pt-32 sm:pb-40"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute left-4 top-12 font-serif text-[7rem] leading-none text-blue/[0.04] sm:left-8 sm:text-[9rem]"
      >
        02
      </span>

      <Container className="relative">
        <Reveal>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionLabel index="02" label="PRÍBEHY" />
              <SectionHeading title="Príbehy" description={pribehyIntro} />
            </div>
            <ButtonLink
              href="/pribehy"
              variant="secondary"
              className="shrink-0 self-start sm:self-auto"
            >
              Všetky príbehy
            </ButtonLink>
          </div>
        </Reveal>

        {/* 01 — large featured */}
        <Reveal className="mt-16">
          <Link
            href={`/pribehy/${s01.slug}`}
            className="group grid items-end gap-8 border-b border-border/80 pb-14 lg:grid-cols-12 lg:gap-12 lg:pb-20"
          >
            <div className="overflow-hidden lg:col-span-7">
              <StoryImage
                slot={s01.imageSlot}
                src={s01.imageSrc}
                alt={s01.imageAlt}
                objectPosition={s01.objectPosition}
                ratio="hero"
                priority
              />
            </div>
            <div className="lg:col-span-5">
              <StoryMeta story={s01} size="xl" />
            </div>
          </Link>
        </Reveal>

        {/* 02 — image left */}
        <Reveal delayMs={60} className="mt-12">
          <Link
            href={`/pribehy/${s02.slug}`}
            className="group grid items-center gap-8 border-b border-border/80 pb-12 lg:grid-cols-12 lg:gap-10 lg:pb-16"
          >
            <div className="overflow-hidden lg:col-span-6">
              <StoryImage
                slot={s02.imageSlot}
                src={s02.imageSrc}
                alt={s02.imageAlt}
                objectPosition={s02.objectPosition}
                ratio="wide"
              />
            </div>
            <div className="lg:col-span-6">
              <StoryMeta story={s02} size="lg" />
            </div>
          </Link>
        </Reveal>

        {/* 03 — reverse */}
        <Reveal delayMs={60} className="mt-12">
          <Link
            href={`/pribehy/${s03.slug}`}
            className="group grid items-center gap-8 border-b border-border/80 pb-12 lg:grid-cols-12 lg:gap-10 lg:pb-16"
          >
            <div className="overflow-hidden lg:order-2 lg:col-span-6">
              <StoryImage
                slot={s03.imageSlot}
                src={s03.imageSrc}
                alt={s03.imageAlt}
                objectPosition={s03.objectPosition}
                ratio="wide"
              />
            </div>
            <div className="lg:order-1 lg:col-span-6">
              <StoryMeta story={s03} size="lg" align="right" />
            </div>
          </Link>
        </Reveal>

        {/* 04 — wide feature */}
        <Reveal delayMs={60} className="mt-12">
          <Link
            href={`/pribehy/${s04.slug}`}
            className="group block border-b border-border/80 pb-14 lg:pb-20"
          >
            <div className="overflow-hidden">
              <StoryImage
                slot={s04.imageSlot}
                src={s04.imageSrc}
                alt={s04.imageAlt}
                objectPosition={s04.objectPosition}
                ratio="wide"
                className="min-h-[240px] sm:min-h-[320px] lg:min-h-[420px]"
              />
            </div>
            <div className="mt-8 max-w-3xl">
              <StoryMeta story={s04} size="lg" />
            </div>
          </Link>
        </Reveal>

        {/* 05 + 06 — pair */}
        <div className="mt-12 grid gap-10 border-b border-border/80 pb-14 sm:grid-cols-2 lg:gap-12 lg:pb-20">
          {[s05, s06].map((story, i) => (
            <Reveal key={story.slug} delayMs={i * 80}>
              <Link href={`/pribehy/${story.slug}`} className="group block">
                <div className="overflow-hidden">
                  <StoryImage
                    slot={story.imageSlot}
                    src={story.imageSrc}
                    alt={story.imageAlt}
                    objectPosition={story.objectPosition}
                    ratio="row"
                  />
                </div>
                <div className="mt-6">
                  <StoryMeta story={story} size="md" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* 07 — prominent */}
        <Reveal delayMs={60} className="mt-12">
          <Link
            href={`/pribehy/${s07.slug}`}
            className="group grid items-center gap-8 border-b border-border/80 pb-14 lg:grid-cols-12 lg:gap-12 lg:pb-20"
          >
            <div className="overflow-hidden lg:col-span-8">
              <StoryImage
                slot={s07.imageSlot}
                src={s07.imageSrc}
                alt={s07.imageAlt}
                objectPosition={s07.objectPosition}
                ratio="wide"
                className="min-h-[260px] sm:min-h-[340px]"
              />
            </div>
            <div className="lg:col-span-4">
              <StoryMeta story={s07} size="lg" />
            </div>
          </Link>
        </Reveal>

        {/* 08 — minimal closing */}
        <Reveal delayMs={60} className="mt-12">
          <Link
            href={`/pribehy/${s08.slug}`}
            className="group grid items-center gap-8 lg:grid-cols-12 lg:gap-10"
          >
            <div className="lg:col-span-5">
              <StoryMeta story={s08} size="lg" />
            </div>
            <div className="overflow-hidden lg:col-span-7">
              <StoryImage
                slot={s08.imageSlot}
                src={s08.imageSrc}
                alt={s08.imageAlt}
                objectPosition={s08.objectPosition}
                ratio="wide"
              />
            </div>
          </Link>
        </Reveal>

        <Reveal delayMs={80} className="mt-14">
          <Link
            href="/pribehy"
            className="text-sm font-semibold uppercase tracking-[0.14em] text-green transition hover:text-blue"
          >
            Všetky príbehy →
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
