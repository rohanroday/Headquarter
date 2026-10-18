import Image from "next/image";

export type Tone = "orange" | "pine" | "sand" | "night";

const tones: Record<Tone, string> = {
  orange: "from-hq/90 via-[#b9461a] to-[#3a1708]",
  pine: "from-pine via-[#1e3d35] to-[#0c1a16]",
  sand: "from-[#c9b597] via-[#8a7458] to-[#2d241a]",
  night: "from-[#3a342e] via-[#26211d] to-night",
};

type Props = {
  image?: string;
  alt: string;
  tone: Tone;
  label?: string;
  className?: string;
  sizes?: string;
};

// Shows a real photo when one is supplied, otherwise a branded mountain placeholder.
export function MediaSlot({ image, alt, tone, label, className = "", sizes = "(min-width: 1024px) 50vw, 100vw" }: Props) {
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br ${tones[tone]} ${className}`}>
      {image ? (
        <Image src={image} alt={alt} fill sizes={sizes} className="object-cover transition-transform duration-700 group-hover:scale-105" />
      ) : (
        <>
          <svg viewBox="0 0 400 200" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 h-3/5 w-full opacity-40" aria-hidden="true">
            <path d="M0 200 L0 130 L60 80 L95 110 L160 40 L215 105 L250 75 L320 140 L360 100 L400 130 L400 200 Z" fill="rgba(0,0,0,0.45)" />
            <path d="M0 200 L0 160 L80 120 L140 150 L210 100 L280 155 L340 125 L400 160 L400 200 Z" fill="rgba(0,0,0,0.55)" />
          </svg>
          <span className="sr-only">{alt}</span>
        </>
      )}
      {label && (
        <span className="absolute left-4 top-4 rounded-full bg-night/55 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-snow backdrop-blur-sm">
          {label}
        </span>
      )}
    </div>
  );
}
