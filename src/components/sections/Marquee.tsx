const words = ["Content", "Reels", "Social media", "Events", "Creators", "Campaigns", "PR", "Workshops"];

export function Marquee() {
  const row = (hidden: boolean) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {words.map((w) => (
        <span key={w} className="flex items-center font-display text-2xl font-bold uppercase tracking-tight sm:text-3xl">
          <span className="px-6">{w}</span>
          <span className="text-night/60">✦</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className="overflow-hidden bg-hq py-4 text-night">
      <div className="flex w-max animate-marquee">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
