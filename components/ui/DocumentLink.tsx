import Link from "next/link";

type DocumentLinkProps = {
  title: string;
  href?: string;
};

function DocIcon() {
  return (
    <span
      aria-hidden
      className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-border bg-surface text-green"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M7 3.5h7.5L19 8v12.5a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M14.5 3.5V8H19" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M9 12h6M9 15.5h6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

export function DocumentLink({ title, href }: DocumentLinkProps) {
  const className =
    "group flex items-start gap-4 border-b border-border py-5 transition hover:border-green/40";

  const body = (
    <>
      <DocIcon />
      <span className="flex-1 pt-1.5 text-base leading-snug text-foreground transition group-hover:text-blue sm:text-lg">
        {title}
        {href ? (
          <span
            aria-hidden
            className="ml-2 inline-block translate-x-0 text-green opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100"
          >
            →
          </span>
        ) : null}
      </span>
    </>
  );

  if (href) {
    const external = href.startsWith("http");
    if (external) {
      return (
        <a
          href={href}
          className={className}
          target="_blank"
          rel="noopener noreferrer"
        >
          {body}
        </a>
      );
    }
    return (
      <Link href={href} className={className}>
        {body}
      </Link>
    );
  }

  return <div className={className}>{body}</div>;
}
