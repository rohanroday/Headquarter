import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  className?: string;
};

export function SectionHeading({ index, eyebrow, title, intro, className = "" }: Props) {
  return (
    <div className={`grid gap-6 lg:grid-cols-12 lg:items-end ${className}`}>
      <Reveal className="lg:col-span-7">
        <p className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-hq">
          <span>{index}</span>
          <span className="h-px w-10 bg-hq/60" />
          <span>{eyebrow}</span>
        </p>
        <h2 className="font-display text-4xl font-bold leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={120} className="text-base leading-relaxed text-muted lg:col-span-5 lg:pb-2">
          {intro}
        </Reveal>
      )}
    </div>
  );
}
