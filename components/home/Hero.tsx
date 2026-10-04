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

        <div className="flex flex-1 items-center px-5 pb-20 pt-8 sm:px-8 sm:pb-24 lg:px-10 lg:pt-4">
          <div className="relative mx-auto w-full max-w-2xl text-center lg:mx-0 lg:max-w-[34rem] lg:text-left xl:max-w-[36rem]">
            {/* Localized contrast pocket behind copy only */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 h-[135%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-[48%] bg-[radial-gradient(ellipse_at_center,rgba(6,16,30,0.48)_0%,rgba(6,16,30,0.22)_46%,transparent_74%)] lg:left-0 lg:translate-x-0 lg:bg-[radial-gradient(ellipse_at_left,rgba(6,16,30,0.44)_0%,rgba(6,16,30,0.18)_50%,transparent_76%)]"
            />

            <div className="relative">
              <h1 className="font-serif text-[2.05rem] font-semibold leading-[1.18] tracking-[-0.01em] text-white [text-shadow:0_2px_4px_rgba(6,16,30,0.55),0_6px_28px_rgba(6,16,30,0.4)] sm:text-[2.75rem] sm:leading-[1.14] lg:text-[3.25rem] lg:leading-[1.12]">
                {site.heroHeadline}
              </h1>

              <span
                aria-hidden
                className="mt-7 inline-block h-px w-12 bg-green shadow-[0_0_12px_rgba(61,107,79,0.45)] sm:mt-8 sm:w-14"
              />

              <p className="mt-7 max-w-xl text-base font-medium leading-relaxed text-white [text-shadow:0_1px_3px_rgba(6,16,30,0.5),0_3px_18px_rgba(6,16,30,0.38)] sm:mt-8 sm:text-lg lg:text-[1.15rem]">
                {site.heroSupport}
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:mt-12 lg:justify-start">
                <a
                  href="/o-nas"
                  className="inline-flex items-center border border-white/65 bg-black/15 px-5 py-2.5 text-sm font-semibold tracking-wide text-white shadow-[0_2px_16px_rgba(6,16,30,0.25)] backdrop-blur-[2px] transition hover:border-white hover:bg-black/25"
                >
                  Spoznať náš príbeh
                </a>
                <a
                  href="/spojenie"
                  className="inline-flex items-center text-sm font-semibold tracking-wide text-white [text-shadow:0_1px_3px_rgba(6,16,30,0.45)] underline-offset-4 transition hover:underline"
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
