import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DocumentLink } from "@/components/ui/DocumentLink";
import { certifikaty } from "@/data/certifikaty";

export const metadata: Metadata = {
  title: "Certifikáty",
};

export default function CertificatesPage() {
  return (
    <div>
      <Container className="pb-10 pt-12 sm:pb-12 sm:pt-16">
        <SectionHeading as="h1" title="Certifikáty" />
      </Container>
      <Container className="max-w-3xl pb-24">
        {certifikaty.map((item) => (
          <DocumentLink key={item.title} title={item.title} href={item.href} />
        ))}
      </Container>
    </div>
  );
}
