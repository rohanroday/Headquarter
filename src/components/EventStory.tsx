"use client";

import Image from "next/image";
import { useState } from "react";
import { gallery } from "@/lib/gallery";
import type { EventStory as Story } from "@/lib/site";
import { Reveal } from "./Reveal";
import { Lightbox } from "./Lightbox";

type Props = { story: Story; number: number; flip?: boolean };

// One featured event: a big cover, the story, and a strip of the rest of its photos.
export function EventStory({ story, number, flip = false }: Props) {
  const photos = gallery[story.slug] ?? [];
  const [open, setOpen] = useState<number | null>(null);
  const [cover, ...rest] = photos;
  if (!cover) return null;

  return (
    <article className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 [&>*]:min-w-0">
      <Reveal className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
        <button
          type="button"
          onClick={() => setOpen(0)}
          className="group relative block aspect-[4/5] w-full overflow-hidden rounded-3xl bg-ink-3 sm:aspect-[4/3]"
          aria-label={`Open ${story.name} photos`}
        >
          <div data-parallax className="absolute inset-x-0 -inset-y-[12%]">
            <Image
              src={cover.src}
              alt={story.coverAlt}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              placeholder="blur"
              blurDataURL={cover.blur}
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
          <span className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-night/70 to-transparent" />
          <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-night/60 px-4 py-2 text-sm font-medium text-snow backdrop-blur-sm transition-colors group-hover:bg-hq group-hover:text-night">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <circle cx="9" cy="10" r="1.6" />
              <path d="m21 16-5-5-9 8" strokeLinejoin="round" />
            </svg>
            View {photos.length} photos
          </span>
        </button>
      </Reveal>

      <Reveal delay={120} className={`flex flex-col justify-center lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
        <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-hq">
          <span className="tabular-nums">{String(number).padStart(2, "0")}</span>
          <span className="h-px w-8 bg-hq/60" />
          <span>{story.kind}</span>
        </p>
        <h3 className="mt-4 font-display text-4xl font-bold leading-[0.95] tracking-tight text-balance sm:text-5xl">{story.name}</h3>
        <p className="mt-6 text-xl leading-snug text-cream">{story.summary}</p>
        <p className="mt-4 max-w-prose leading-relaxed text-muted">{story.body}</p>
        <div className="mt-7">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted">What we did</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {story.roles.map((r) => (
              <li key={r} className="rounded-full bg-hq/15 px-3 py-1.5 text-sm text-hq-light">
                {r}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      {rest.length > 0 && (
        <Reveal delay={160} className="lg:order-3 lg:col-span-12">
          <ul className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0 [scrollbar-width:thin]">
            {rest.map((p, i) => (
              <li key={p.src} className="snap-start">
                <button
                  type="button"
                  onClick={() => setOpen(i + 1)}
                  aria-label={`Open ${story.name} photo ${i + 2} of ${photos.length}`}
                  className="group relative block h-44 overflow-hidden rounded-2xl bg-ink-3 sm:h-56"
                  style={{ aspectRatio: `${p.width} / ${p.height}` }}
                >
                  <Image
                    src={p.src}
                    alt=""
                    fill
                    sizes="(min-width: 640px) 300px, 240px"
                    placeholder="blur"
                    blurDataURL={p.blur}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </button>
              </li>
            ))}
          </ul>
        </Reveal>
      )}

      {open !== null && <Lightbox photos={photos} title={story.name} index={open} onClose={() => setOpen(null)} />}
    </article>
  );
}
