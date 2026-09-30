import Link from "next/link";
import type { Pribeh } from "@/data/pribehy";
import { StoryImage } from "@/components/stories/StoryImage";

type StoryFeaturedProps = {
  story: Pribeh;
  reverse?: boolean;
  priority?: boolean;
};

export function StoryFeatured({
  story,
  reverse = false,
  priority = false,
}: StoryFeaturedProps) {
  return (
    <Link
      href={`/pribehy/${story.slug}`}
      className="group grid items-end gap-6 border-b border-border pb-12 lg:grid-cols-12 lg:gap-10 lg:pb-16"
    >
      <div
        className={`lg:col-span-7 ${reverse ? "lg:order-2" : "lg:order-1"}`}
      >
        <StoryImage
          slot={story.imageSlot}
          src={story.imageSrc}
          alt={story.imageAlt}
          objectPosition={story.objectPosition}
          ratio="hero"
          priority={priority}
          className="transition duration-500 group-hover:brightness-[0.98]"
        />
      </div>
      <div
        className={`lg:col-span-5 ${reverse ? "lg:order-1 lg:text-right" : "lg:order-2"}`}
      >
        <p className="font-serif text-6xl leading-none text-green/80 sm:text-7xl">
          {story.number}
        </p>
        <h3 className="mt-4 font-serif text-3xl leading-tight text-blue transition group-hover:text-blue-soft sm:text-4xl">
          {story.title}
        </h3>
        {story.subtitle ? (
          <p className="mt-3 text-base italic text-muted">{story.subtitle}</p>
        ) : null}
        <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-green">
          Čítať príbeh
          <span aria-hidden className="transition group-hover:translate-x-1">
            →
          </span>
        </p>
      </div>
    </Link>
  );
}
