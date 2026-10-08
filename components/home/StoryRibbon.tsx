/** Quiet chapter marker sitting along the story flow */
export function StorySpineMarker({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute z-[1] flex h-3 w-3 items-center justify-center ${className}`}
    >
      <span className="absolute h-3.5 w-3.5 rounded-full bg-background/70 ring-1 ring-green/35" />
      <span className="relative h-1.5 w-1.5 rounded-full bg-green" />
    </span>
  );
}
