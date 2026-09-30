import Image from "next/image";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="relative isolate min-h-[90svh] overflow-hidden text-white sm:min-h-[95svh] lg:min-h-screen">
      <Image
        src={site.heroImageSrc}
        alt="Panoramatický pohľad na mesto a bytové domy pri západe slnka"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover object-[50%_42%] sm:object-[50%_45%]"
      />

      {/* Deep BYTYS navy atmosphere — city stays visible */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[rgba(12,28,48,0.46)] sm:bg-[rgba(12,28,48,0.42)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-[rgba(8,20,36,0.55)] via-[rgba(12,28,48,0.28)] to-[rgba(8,18,32,0.72)]"
      />
      {/* Soft focus behind centered type */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[28%] mx-auto h-[42%] max-w-4xl bg-[radial-gradient(ellipse_at_center,rgba(8,20,36,0.35)_0%,transparent_70%)]"
      />

      <div className="relative z-10 flex min-h-[90svh] flex-col sm:min-h-[95svh] lg:min-h-screen">
        {/* Space for fixed header */}
        <div className="h-[4.25rem] shrink-0 sm:h-[4.75rem]" aria-hidden />

        <div className="flex flex-1 flex-col items-center px-5 pb-16 pt-10 text-center sm:px-8 sm:pb-20 sm:pt-[8vh] lg:pt-[10vh]">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-white/80 sm:text-xs sm:tracking-[0.32em]">
            {site.tagline}
          </p>

          <h1 className="mt-7 max-w-4xl font-serif text-[2.15rem] leading-[1.15] tracking-[-0.01em] text-white sm:mt-9 sm:text-5xl sm:leading-[1.12] lg:text-[3.65rem] lg:leading-[1.1]">
            Správa bytových domov
            <br />
            založená na skúsenostiach.
          </h1>

          <span
            aria-hidden
            className="mt-7 inline-block h-px w-12 bg-green sm:mt-8 sm:w-14"
          />

          <p className="mt-7 max-w-xl text-base leading-relaxed text-white/82 sm:mt-8 sm:text-lg lg:text-xl">
            {site.heroSupport}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:mt-12">
            <a
              href="/o-nas"
              className="inline-flex items-center border border-white/35 px-5 py-2.5 text-sm font-medium tracking-wide text-white transition hover:border-white hover:bg-white/10"
            >
              Spoznať náš príbeh
            </a>
            <a
              href="/spojenie"
              className="inline-flex items-center text-sm font-medium tracking-wide text-white/90 underline-offset-4 transition hover:text-white hover:underline"
            >
              Spojenie →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
