import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Timeline } from "@/components/ui/Timeline";
import { aboutPage } from "@/data/story";

export const metadata: Metadata = {
  title: "O nás",
};

export default function AboutPage() {
  return (
    <article>
      <Container className="pb-10 pt-12 sm:pb-14 sm:pt-16">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green">
          BYTYS
        </p>
        <h1 className="mt-4 font-serif text-4xl text-blue sm:text-5xl lg:text-6xl">
          {aboutPage.title}
        </h1>
      </Container>

      <Container className="pb-16">
        <Timeline />
      </Container>

      <Container className="pb-24">
        <div className="mx-auto max-w-[45rem] space-y-20">
          {aboutPage.sections.map((section) => (
            <section key={section.id} id={section.id}>
              <h2 className="font-serif text-3xl text-blue sm:text-4xl">
                {section.heading}
              </h2>
              <div className="mt-8 space-y-7">
                {section.paragraphs.map((paragraph, index) => (
                  <div key={index}>
                    {"pullQuote" in section &&
                    section.pullQuote &&
                    index === 1 ? (
                      <blockquote className="my-10 border-l-2 border-green pl-5 font-serif text-2xl leading-snug text-blue sm:pl-7 sm:text-3xl">
                        {section.pullQuote}
                      </blockquote>
                    ) : null}
                    <p className="story-body text-foreground">{paragraph}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </article>
  );
}
