import Image from "next/image";

type StoryImageProps = {
  slot: string;
  src?: string;
  alt?: string;
  objectPosition?: string;
  ratio?: "hero" | "portrait" | "wide" | "row";
  priority?: boolean;
  className?: string;
};

const ratioClass = {
  hero: "aspect-[4/5] sm:aspect-[3/2] lg:aspect-[16/9]",
  portrait: "aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]",
  wide: "aspect-[3/2] sm:aspect-[16/9] lg:aspect-[21/9]",
  row: "aspect-[16/10] sm:aspect-[5/4] lg:aspect-[16/11]",
};

export function StoryImage({
  slot,
  src,
  alt = "",
  objectPosition = "50% 50%",
  ratio = "hero",
  priority = false,
  className = "",
}: StoryImageProps) {
  return (
    <figure
      className={`relative overflow-hidden rounded-sm bg-surface ${ratioClass[ratio]} ${className}`}
      data-image-slot={slot}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1100px"
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.025]"
          style={{ objectPosition }}
        />
      ) : (
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(135deg,#e8e4dc_0%,#d9d4c8_45%,#cfd5d1_100%)]"
        >
          <div className="absolute inset-0 opacity-[0.35] [background-image:radial-gradient(circle_at_1px_1px,rgba(30,58,95,0.12)_1px,transparent_0)] [background-size:18px_18px]" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 sm:p-7">
            <span className="font-serif text-4xl text-blue/20 sm:text-5xl">
              {slot.replace("story-", "")}
            </span>
            <span className="sr-only">Obrázok príbehu — pripravuje sa</span>
          </div>
        </div>
      )}
    </figure>
  );
}
