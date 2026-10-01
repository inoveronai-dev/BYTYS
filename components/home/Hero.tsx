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

      {/* Light global wash — keep the city bright */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-[rgba(8,20,36,0.22)] via-transparent to-[rgba(8,18,32,0.18)] sm:from-[rgba(8,20,36,0.16)] sm:to-[rgba(8,18,32,0.12)]"
      />

      <div className="relative z-10 flex min-h-[90svh] flex-col sm:min-h-[95svh] lg:min-h-screen">
        <div className="h-[4.25rem] shrink-0 sm:h-[4.75rem]" aria-hidden />

        <div className="flex flex-1 flex-col items-center px-5 pb-16 pt-10 text-center sm:px-8 sm:pb-20 sm:pt-[8vh] lg:pt-[10vh]">
          {/* Localized contrast only behind the text block */}
          <div className="relative max-w-4xl">
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[115%] -translate-x-1/2 -translate-y-1/2 rounded-[40%] bg-[radial-gradient(ellipse_at_center,rgba(6,16,30,0.42)_0%,rgba(6,16,30,0.18)_48%,transparent_74%)] sm:h-[125%] sm:w-[120%] sm:bg-[radial-gradient(ellipse_at_center,rgba(6,16,30,0.36)_0%,rgba(6,16,30,0.14)_50%,transparent_74%)]"
            />

            <div className="relative">
              <h1 className="max-w-4xl font-serif text-[2.15rem] font-semibold leading-[1.15] tracking-[-0.01em] text-white [text-shadow:0_2px_4px_rgba(6,16,30,0.55),0_4px_28px_rgba(6,16,30,0.45)] sm:text-5xl sm:leading-[1.12] lg:text-[3.65rem] lg:leading-[1.1]">
                Správa bytových domov
                <br />
                založená na skúsenostiach.
              </h1>

              <span
                aria-hidden
                className="mt-7 inline-block h-px w-12 bg-green shadow-[0_0_12px_rgba(61,107,79,0.5)] sm:mt-8 sm:w-14"
              />

              <p className="mx-auto mt-7 max-w-xl text-base font-semibold leading-relaxed text-white [text-shadow:0_1px_3px_rgba(6,16,30,0.5),0_2px_18px_rgba(6,16,30,0.4)] sm:mt-8 sm:text-lg lg:text-xl">
                {site.heroSupport}
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:mt-12">
                <a
                  href="/o-nas"
                  className="inline-flex items-center border border-white/70 bg-black/20 px-5 py-2.5 text-sm font-semibold tracking-wide text-white shadow-[0_2px_18px_rgba(6,16,30,0.28)] backdrop-blur-[2px] transition hover:border-white hover:bg-black/30"
                >
                  Spoznať náš príbeh
                </a>
                <a
                  href="/spojenie"
                  className="inline-flex items-center text-sm font-semibold tracking-wide text-white [text-shadow:0_1px_3px_rgba(6,16,30,0.45),0_2px_14px_rgba(6,16,30,0.35)] underline-offset-4 transition hover:underline"
                >
                  Spojenie →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
