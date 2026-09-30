import { site } from "@/data/site";

export function ContactBlock() {
  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
      <div>
        <p className="font-serif text-3xl text-blue sm:text-4xl">{site.name}</p>
        <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-green">
          {site.tagline}
        </p>
        <div className="mt-8 space-y-1 text-lg text-foreground">
          <p>{site.registeredAddress.street}</p>
          <p>{site.registeredAddress.city}</p>
        </div>
        <div className="mt-10 space-y-3">
          <p className="text-xl font-medium text-foreground">
            {site.contactPerson}
          </p>
          <p>
            <a
              href={site.phoneHref}
              className="text-2xl font-semibold text-blue transition hover:text-green"
            >
              {site.phone}
            </a>
          </p>
          <p>
            <a
              href={site.emailHref}
              className="text-lg text-blue underline-offset-4 transition hover:text-green hover:underline"
            >
              {site.email}
            </a>
          </p>
        </div>
      </div>

      <div className="space-y-10 border-t border-border pt-10 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
            Kancelária
          </h3>
          <div className="mt-3 space-y-1 text-lg">
            <p>{site.office.street}</p>
            <p>{site.office.city}</p>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
            Otvorené
          </h3>
          <dl className="mt-3 space-y-2">
            {site.openingHours.map((row) => (
              <div
                key={row.day}
                className="flex max-w-xs justify-between gap-6 text-lg"
              >
                <dt>{row.day}</dt>
                <dd className="tabular-nums text-blue">{row.hours}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="space-y-1 text-sm leading-relaxed text-muted">
          <p>IČO: {site.ico}</p>
          <p>DIČ: {site.dic}</p>
          <p>{site.or}</p>
        </div>
      </div>
    </div>
  );
}
