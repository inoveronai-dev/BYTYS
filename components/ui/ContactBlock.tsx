import { site } from "@/data/site";

type ContactBlockProps = {
  variant?: "light" | "dark";
  /** stack = single column (for homepage split with photo) */
  layout?: "split" | "stack";
};

export function ContactBlock({
  variant = "light",
  layout = "split",
}: ContactBlockProps) {
  const dark = variant === "dark";
  const stack = layout === "stack";

  return (
    <div
      className={`grid ${
        stack ? "gap-10" : "gap-12 lg:grid-cols-2 lg:gap-16"
      }`}
    >
      <div>
        <p
          className={`font-serif text-3xl sm:text-4xl ${
            dark ? "text-white" : "text-blue"
          }`}
        >
          {site.name}
        </p>
        <p
          className={`mt-2 text-xs font-semibold uppercase tracking-[0.16em] ${
            dark ? "text-green-soft" : "text-green"
          }`}
        >
          {site.tagline}
        </p>
        <div
          className={`mt-8 space-y-1 text-lg ${
            dark ? "text-white/85" : "text-foreground"
          }`}
        >
          <p>{site.registeredAddress.street}</p>
          <p>{site.registeredAddress.city}</p>
        </div>
        <div className="mt-10 space-y-3">
          <p
            className={`text-xl font-medium ${
              dark ? "text-white" : "text-foreground"
            }`}
          >
            {site.contactPerson}
          </p>
          <p>
            <a
              href={site.phoneHref}
              className={`text-2xl font-semibold transition sm:text-3xl ${
                dark
                  ? "text-white hover:text-green-soft"
                  : "text-blue hover:text-green"
              }`}
            >
              {site.phone}
            </a>
          </p>
          <p>
            <a
              href={site.emailHref}
              className={`text-lg underline-offset-4 transition hover:underline ${
                dark
                  ? "text-white/90 hover:text-green-soft"
                  : "text-blue hover:text-green"
              }`}
            >
              {site.email}
            </a>
          </p>
        </div>
      </div>

      <div
        className={`space-y-10 pt-10 ${
          stack
            ? dark
              ? "border-t border-white/15"
              : "border-t border-border"
            : dark
              ? "border-t border-white/15 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0"
              : "border-t border-border lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0"
        }`}
      >
        <div>
          <h3
            className={`text-xs font-semibold uppercase tracking-[0.16em] ${
              dark ? "text-white/50" : "text-muted"
            }`}
          >
            Kancelária
          </h3>
          <div
            className={`mt-3 space-y-1 text-lg ${
              dark ? "text-white/85" : ""
            }`}
          >
            <p>{site.office.street}</p>
            <p>{site.office.city}</p>
          </div>
        </div>

        <div>
          <h3
            className={`text-xs font-semibold uppercase tracking-[0.16em] ${
              dark ? "text-white/50" : "text-muted"
            }`}
          >
            Otvorené
          </h3>
          <dl className="mt-3 space-y-2">
            {site.openingHours.map((row) => (
              <div
                key={row.day}
                className={`flex max-w-xs justify-between gap-6 text-lg ${
                  dark ? "text-white/85" : ""
                }`}
              >
                <dt>{row.day}</dt>
                <dd
                  className={`tabular-nums ${
                    dark ? "text-green-soft" : "text-blue"
                  }`}
                >
                  {row.hours}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div
          className={`space-y-1 text-sm leading-relaxed ${
            dark ? "text-white/45" : "text-muted"
          }`}
        >
          <p>IČO: {site.ico}</p>
          <p>DIČ: {site.dic}</p>
          <p>{site.or}</p>
        </div>
      </div>
    </div>
  );
}
