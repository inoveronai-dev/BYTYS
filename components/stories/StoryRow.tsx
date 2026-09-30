import Link from "next/link";
import type { Pribeh } from "@/data/pribehy";
import { StoryImage } from "@/components/stories/StoryImage";

type StoryRowProps = {
  story: Pribeh;
  compact?: boolean;
  withImage?: boolean;
};

export function StoryRow({
  story,
  compact = false,
  withImage = false,
}: StoryRowProps) {
  if (withImage) {
    return (
      <Link
        href={`/pribehy/${story.slug}`}
        className="group grid items-center gap-5 border-b border-border py-6 sm:grid-cols-[minmax(9rem,14rem)_1fr] sm:gap-8 sm:py-7"
      >
        <StoryImage
          slot={story.imageSlot}
          src={story.imageSrc}
          alt={story.imageAlt}
          objectPosition={story.objectPosition}
          ratio="row"
          className="transition group-hover:brightness-[0.98]"
        />
        <div className="grid grid-cols-[auto_1fr] items-baseline gap-x-4 gap-y-1">
          <span className="font-serif text-2xl tabular-nums text-green sm:text-3xl">
            {story.number}
          </span>
          <div>
            <h3 className="font-serif text-xl leading-snug text-blue transition group-hover:text-blue-soft sm:text-2xl">
              {story.title}
            </h3>
            {story.subtitle ? (
              <p className="mt-1 text-sm italic text-muted">{story.subtitle}</p>
            ) : null}
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/pribehy/${story.slug}`}
      className={`group grid grid-cols-[auto_1fr] items-baseline gap-x-5 gap-y-1 border-b border-border transition hover:border-green/40 ${
        compact ? "py-5" : "py-7 sm:py-8"
      }`}
    >
      <span
        className={`font-serif tabular-nums text-green ${
          compact ? "text-2xl" : "text-3xl sm:text-4xl"
        }`}
      >
        {story.number}
      </span>
      <div>
        <h3
          className={`font-serif leading-snug text-blue transition group-hover:text-blue-soft ${
            compact ? "text-xl sm:text-2xl" : "text-2xl sm:text-3xl"
          }`}
        >
          {story.title}
        </h3>
        {story.subtitle ? (
          <p className="mt-1 text-sm italic text-muted sm:text-base">
            {story.subtitle}
          </p>
        ) : null}
      </div>
    </Link>
  );
}
