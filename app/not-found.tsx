import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <h1 className="font-serif text-4xl text-blue">Stránka neexistuje</h1>
      <p className="mt-4 text-muted">Požadovaný obsah sa nenašiel.</p>
      <Link
        href="/"
        className="mt-8 inline-block text-sm font-semibold uppercase tracking-[0.14em] text-green"
      >
        Späť na úvod
      </Link>
    </Container>
  );
}
