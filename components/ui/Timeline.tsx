import { timeline } from "@/data/story";

export function Timeline() {
  return (
    <ol className="relative grid gap-8 md:grid-cols-5 md:gap-4">
      <div
        aria-hidden
        className="absolute left-3 top-2 bottom-2 w-px bg-border md:left-0 md:right-0 md:top-3 md:bottom-auto md:h-px md:w-full"
      />
      {timeline.map((item) => (
        <li key={item.id} className="relative pl-10 md:pl-0 md:pt-8">
          <span
            aria-hidden
            className="absolute left-1.5 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-green bg-background md:left-0 md:top-1.5"
          />
          <p className="font-serif text-2xl text-blue md:text-xl lg:text-2xl">
            {item.label}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted md:text-[0.95rem]">
            {item.text}
          </p>
        </li>
      ))}
    </ol>
  );
}
