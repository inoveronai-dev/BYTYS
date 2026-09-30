import { story07Data } from "@/data/pribehy";

export function Story07DataBlock() {
  return (
    <div className="space-y-12">
      <p className="story-body text-foreground">{story07Data.context}</p>

      <div className="overflow-hidden rounded-sm border border-border bg-surface-elevated">
        <div className="grid divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0">
          {story07Data.mainComparison.map((row) => (
            <div key={row.value} className="p-6 sm:p-8">
              <p className="font-serif text-4xl tabular-nums text-blue sm:text-5xl">
                {row.value}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                {row.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6 border-l-2 border-green/50 pl-5 sm:pl-7">
        {story07Data.afterMain.map((row, index) => (
          <div
            key={row.value}
            className={index === story07Data.afterMain.length - 1 ? "pt-2" : ""}
          >
            <p
              className={`font-serif tabular-nums ${
                index === story07Data.afterMain.length - 1
                  ? "text-4xl text-green sm:text-5xl"
                  : "text-3xl text-blue sm:text-4xl"
              }`}
            >
              {row.value}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
              {row.label}
            </p>
          </div>
        ))}
      </div>

      <div className="space-y-6 rounded-sm bg-surface px-6 py-8 sm:px-8 sm:py-10">
        <p className="font-serif text-3xl leading-snug text-blue sm:text-4xl">
          Úspora za 10 rokov u nás činí{" "}
          <span className="text-green">184 160 EUR</span>.
        </p>
        <p className="text-base leading-relaxed text-foreground sm:text-lg">
          V prípade, že by sme po desiatich rokoch investovali do obnovy kotolne
          hoc aj 50 000 EUR (čo považujem za nadsadané) stále nám ostáva benefit
          vo výške <span className="font-semibold text-green">134 160 EUR</span>.
        </p>
      </div>

      <div>
        <p className="story-body text-foreground">{story07Data.tuvIntro}</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {story07Data.tuvComparison.map((row, index) => (
            <div
              key={row.value}
              className={`rounded-sm border border-border px-5 py-6 ${
                index === story07Data.tuvComparison.length - 1
                  ? "border-green/40 bg-surface"
                  : "bg-surface-elevated"
              }`}
            >
              <p
                className={`font-serif text-3xl tabular-nums ${
                  index === story07Data.tuvComparison.length - 1
                    ? "text-green"
                    : "text-blue"
                }`}
              >
                {row.value}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {row.label}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 story-body text-foreground">
          {story07Data.tuvDecade}
        </p>
        <p className="mt-3 text-lg italic text-muted">
          {story07Data.tuvDecadeNote}
        </p>
        <p className="mt-2 font-serif text-4xl tabular-nums text-green sm:text-5xl">
          4 430 EUR
        </p>
      </div>
    </div>
  );
}
