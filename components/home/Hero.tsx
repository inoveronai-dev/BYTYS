import Image from "next/image";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="relative isolate min-h-[90svh] overflow-hidden text-white sm:min-h-[95svh] lg:min-h-screen">
      <Image
        src={site.heroImageSrc}
        alt="Fasáda bytového domu v večernom svetle s osvetlenými oknami"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover object-[50%_40%] sm:object-[50%_45%] lg:object-[48%_42%]"
      />

      {/* Very light top support for header only — windows stay visible */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[rgba(8,18,32,0.35)] to-transparent sm:h-40 sm:from-[rgba(8,18,32,0.28)]"
      />

      <div className="relative z-10 flex min-h-[90svh] flex-col sm:min-h-[95svh] lg:min-h-screen">
        <div className="h-[4.25rem] shrink-0 sm:h-[4.75rem]" aria-hidden />

        <div className="mx-auto flex w-full max-w-6xl flex-1 items-center px-5 pb-16 pt-6 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24 lg:pt-0">
          {/* Slightly above true center for calmer balance */}
          <div className="relative w-full max-w-[34rem] -translate-y-4 text-left sm:-translate-y-6 lg:max-w-[36rem] lg:-translate-y-8">
            <div
              aria-hidden
              className="pointer-events-none absolute -left-6 top-1/2 h-[125%] w-[115%] -translate-y-1/2 rounded-[46%] bg-[radial-gradient(ellipse_at_left,rgba(6,16,30,0.38)_0%,rgba(6,16,30,0.14)_52%,transparent_76%)] sm:-left-8"
            />

            <div className="relative">
              <h1 className="max-w-[22rem] font-serif text-[2rem] font-semibold leading-[1.08] tracking-[-0.015em] text-white [text-shadow:0_1px_3px_rgba(6,16,30,0.5),0_4px_22px_rgba(6,16,30,0.35)] sm:max-w-[28rem] sm:text-[2.55rem] sm:leading-[1.06] lg:max-w-[34rem] lg:text-[3rem] lg:leading-[1.05]">
                Správa domov.
                <br />
                S porozumením pre ľudí.
              </h1>

              <span
                aria-hidden
                className="mt-5 inline-block h-px w-10 bg-green sm:mt-6 sm:w-12"
              />

              <p className="mt-5 max-w-[30rem] text-[0.95rem] font-medium leading-[1.55] text-white/92 [text-shadow:0_1px_3px_rgba(6,16,30,0.45),0_2px_14px_rgba(6,16,30,0.3)] sm:mt-6 sm:max-w-[32rem] sm:text-base sm:leading-[1.6]">
                {site.heroSupport}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3 sm:mt-8">
                <a
                  href="/o-nas"
                  className="inline-flex items-center border border-white/60 bg-black/12 px-4 py-2 text-sm font-semibold tracking-wide text-white transition hover:border-white hover:bg-black/20"
                >
                  Spoznať náš príbeh
                </a>
                <a
                  href="/spojenie"
                  className="inline-flex items-center text-sm font-semibold tracking-wide text-white/95 [text-shadow:0_1px_3px_rgba(6,16,30,0.4)] underline-offset-4 transition hover:underline"
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
