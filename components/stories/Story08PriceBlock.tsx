import { story08Data } from "@/data/pribehy";

type Story08PriceBlockProps = {
  paragraphs: string[];
};

export function Story08PriceBlock({ paragraphs }: Story08PriceBlockProps) {
  const [opening, past, closing] = paragraphs;

  return (
    <div className="space-y-12">
      <p className="story-body whitespace-pre-line text-foreground">{opening}</p>

      <div className="grid gap-4 sm:grid-cols-3">
        {story08Data.currentPrices.map((item) => (
          <div
            key={item.value}
            className="rounded-sm border border-border bg-surface-elevated px-5 py-7 text-center"
          >
            <p className="font-serif text-3xl tabular-nums text-green sm:text-[2rem]">
              {item.value}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{item.note}</p>
          </div>
        ))}
      </div>

      <div className="border-t border-border pt-10">
        <p className="story-body text-foreground">{past}</p>
        <div className="mt-6 flex flex-wrap items-end gap-4 sm:gap-8">
          {story08Data.pastPrices.map((price) => (
            <span
              key={price}
              className="font-serif text-4xl tabular-nums text-blue/50 sm:text-5xl"
            >
              {price}
            </span>
          ))}
        </div>
      </div>

      <p className="font-serif text-4xl leading-tight text-blue sm:text-5xl lg:text-6xl">
        {closing}
      </p>
    </div>
  );
}
