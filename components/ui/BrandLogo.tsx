import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

/** Intrinsic size of public/logo-bytys.png — keep native aspect ratio */
export const LOGO_INTRINSIC = { width: 512, height: 156 } as const;

type BrandLogoProps = {
  /** Visual height in CSS pixels; width follows native aspect ratio */
  height: number;
  className?: string;
  priority?: boolean;
  href?: string | null;
};

export function BrandLogo({
  height,
  className = "",
  priority = false,
  href = "/",
}: BrandLogoProps) {
  const width = Math.round(
    (height * LOGO_INTRINSIC.width) / LOGO_INTRINSIC.height,
  );

  const image = (
    <Image
      src={site.logoSrc}
      alt={`${site.shortName} — BYTOSTIAM V BYTOCH`}
      width={LOGO_INTRINSIC.width}
      height={LOGO_INTRINSIC.height}
      priority={priority}
      sizes={`${width}px`}
      className={`h-auto w-auto ${className}`}
      style={{ height, width, maxWidth: "100%" }}
    />
  );

  if (href === null) {
    return image;
  }

  return (
    <Link
      href={href}
      className="inline-flex shrink-0 items-center"
      aria-label={`${site.shortName} — domov`}
    >
      {image}
    </Link>
  );
}
