import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DocumentLink } from "@/components/ui/DocumentLink";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { certifikaty } from "@/data/certifikaty";

export function HomeCertificatesSection() {
  return (
    <section className="border-t border-border py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-4">
            <SectionHeading title="Certifikáty" />
            <div className="mt-8">
              <ButtonLink href="/certifikaty" variant="text">
                Všetky certifikáty →
              </ButtonLink>
            </div>
          </div>
          <div className="lg:col-span-8">
            {certifikaty.map((item) => (
              <DocumentLink
                key={item.title}
                title={item.title}
                href={item.href}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
