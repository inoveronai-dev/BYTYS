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

      {/* Localized readability only — keep the city bright and clear */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-[rgba(8,20,36,0.28)] via-transparent to-[rgba(8,18,32,0.22)] sm:from-[rgba(8,20,36,0.22)] sm:to-[rgba(8,18,32,0.16)]"
      />
      {/* Soft pocket behind the headline block */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[30%] mx-auto h-[38%] max-w-3xl bg-[radial-gradient(ellipse_at_center,rgba(8,20,36,0.28)_0%,rgba(8,20,36,0.12)_45%,transparent_72%)] sm:top-[32%] sm:h-[36%] sm:bg-[radial-gradient(ellipse_at_center,rgba(8,20,36,0.22)_0%,rgba(8,20,36,0.08)_48%,transparent_72%)]"
      />
      {/* Slightly stronger support on small screens only */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[rgba(10,24,40,0.12)] sm:bg-transparent"
      />

      <div className="relative z-10 flex min-h-[90svh] flex-col sm:min-h-[95svh] lg:min-h-screen">
        <div className="h-[4.25rem] shrink-0 sm:h-[4.75rem]" aria-hidden />

        <div className="flex flex-1 flex-col items-center px-5 pb-16 pt-10 text-center sm:px-8 sm:pb-20 sm:pt-[8vh] lg:pt-[10vh]">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-white [text-shadow:0_1px_10px_rgba(8,18,32,0.45)] sm:text-xs sm:tracking-[0.32em]">
            {site.tagline}
          </p>

          <h1 className="mt-7 max-w-4xl font-serif text-[2.15rem] font-semibold leading-[1.15] tracking-[-0.01em] text-white [text-shadow:0_2px_24px_rgba(8,18,32,0.4),0_1px_3px_rgba(8,18,32,0.35)] sm:mt-9 sm:text-5xl sm:leading-[1.12] lg:text-[3.65rem] lg:leading-[1.1]">
            Správa bytových domov
            <br />
            založená na skúsenostiach.
          </h1>

          <span
            aria-hidden
            className="mt-7 inline-block h-px w-12 bg-green shadow-[0_0_12px_rgba(61,107,79,0.45)] sm:mt-8 sm:w-14"
          />

          <p className="mt-7 max-w-xl text-base font-medium leading-relaxed text-white/95 [text-shadow:0_1px_14px_rgba(8,18,32,0.4)] sm:mt-8 sm:text-lg lg:text-xl">
            {site.heroSupport}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:mt-12">
            <a
              href="/o-nas"
              className="inline-flex items-center border border-white/55 bg-black/10 px-5 py-2.5 text-sm font-medium tracking-wide text-white shadow-[0_2px_16px_rgba(8,18,32,0.2)] backdrop-blur-[2px] transition hover:border-white hover:bg-black/20"
            >
              Spoznať náš príbeh
            </a>
            <a
              href="/spojenie"
              className="inline-flex items-center text-sm font-medium tracking-wide text-white [text-shadow:0_1px_10px_rgba(8,18,32,0.35)] underline-offset-4 transition hover:underline"
            >
              Spojenie →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
