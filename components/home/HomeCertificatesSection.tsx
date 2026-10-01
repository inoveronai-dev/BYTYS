import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { certifikaty } from "@/data/certifikaty";

function DocIcon() {
  return (
    <span
      aria-hidden
      className="flex h-12 w-12 shrink-0 items-center justify-center border border-border bg-blue-tint text-green"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M7 3.5h7.5L19 8v12.5a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M14.5 3.5V8H19" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M9 12h6M9 15.5h6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

export function HomeCertificatesSection() {
  return (
    <section className="relative bg-surface-elevated py-24 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
          <Reveal className="lg:col-span-4">
            <SectionLabel index="03" label="CERTIFIKÁTY" tone="blue" />
            <SectionHeading title="Certifikáty" />
            <div className="mt-8">
              <ButtonLink href="/certifikaty" variant="text">
                Všetky certifikáty →
              </ButtonLink>
            </div>
          </Reveal>

          <div className="space-y-4 lg:col-span-8">
            {certifikaty.map((item, index) => {
              const body = (
                <>
                  <DocIcon />
                  <span className="min-w-0 flex-1">
                    <span className="block text-lg leading-snug text-foreground transition group-hover:text-blue">
                      {item.title}
                    </span>
                    <span className="mt-2 block text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                      Dokument
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className="text-green transition group-hover:translate-x-1"
                  >
                    →
                  </span>
                </>
              );

              const className =
                "group flex items-start gap-5 border border-border bg-blue-tint/40 px-5 py-6 transition hover:-translate-y-0.5 hover:border-green/40";

              return (
                <Reveal key={item.title} delayMs={index * 80}>
                  {item.href ? (
                    <Link href={item.href} className={className}>
                      {body}
                    </Link>
                  ) : (
                    <div className={className}>{body}</div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
