import Image from "next/image";
import { photos, site, stats, whatsappLink } from "@/lib/site";
import { ArrowUpRight, WhatsApp } from "../Icons";

export function Hero() {
  return (
    <section id="top" data-hero className="relative isolate flex min-h-[100svh] flex-col overflow-hidden pt-16 lg:pt-20">
      {/* Himalayan photo, washed into the page colour so text stays readable in both themes */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div data-hero-photo className="absolute inset-0 will-change-transform">
          <Image
            src={photos.hero}
            alt=""
            fill
            priority
            sizes="100vw"
            className="hero-photo object-cover object-[70%_center]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/25 max-lg:via-ink/75 max-lg:to-ink/60" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink/80 to-transparent" />
        <div data-hero-glow className="absolute right-[8%] top-[18%] h-[50vmin] w-[50vmin] rounded-full bg-hq/25 blur-[120px]" />
        <svg viewBox="0 0 1440 420" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 h-40 w-full sm:h-56">
          <path
            data-ridge="far"
            d="M0 420V300l90-40 70 30 110-120 60 50 90-110 70 60 60-40 120-110 80 90 60-30 110 120 70-50 90 90 110-80 100 60 70-30 80 50v150Z"
            fill="var(--ink)"
            opacity="0.55"
          />
          <path d="M0 420V350l120-60 100 50 140-90 120 80 130-70 110 60 150-100 120 90 130-50 120 60 100-30v130Z" fill="var(--ink)" />
        </svg>
      </div>

      <div data-hero-content className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 sm:px-6 lg:px-8">
        <div data-hero-in className="flex flex-wrap items-center justify-between gap-2 border-b border-line py-4 font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
          <span>Gangtok, Sikkim</span>
          <span className="hidden sm:inline">Content · Marketing · Events</span>
          <span>27.33° N / 88.61° E</span>
        </div>

        <div className="flex flex-1 flex-col justify-center py-14 lg:py-20">
          <p data-hero-in className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-line bg-ink-2/60 px-4 py-1.5 text-xs text-cream/80 backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-hq" />
            Now booking festival & winter season campaigns
          </p>
          <h1 data-hero-in data-hero-title className="font-display text-[clamp(3rem,10vw,9rem)] font-extrabold leading-[0.88] tracking-tight">
            The ultimate
            <br />
            <span className="text-hq">marketing</span> <span className="text-outline">base camp.</span>
          </h1>
          <p data-hero-in className="mt-8 max-w-xl text-lg leading-relaxed text-cream/75">
            {site.name} is a media house from the hills of Sikkim. We make content, run social media, cover events and
            connect brands with the creators Northeast India actually listens to.
          </p>
          <div data-hero-in className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              data-magnetic
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-hq px-7 py-4 font-semibold text-night transition-colors hover:bg-hq-light"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href={whatsappLink("Hi Headquarter! I'd like to talk about a project.")}
              target="_blank"
              rel="noopener noreferrer"
              data-magnetic
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/25 px-7 py-4 font-semibold transition-colors hover:border-cream hover:bg-cream hover:text-ink"
            >
              <WhatsApp className="h-5 w-5" /> Chat on WhatsApp
            </a>
          </div>
        </div>

        <dl data-hero-in className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} data-stat className="flex flex-col-reverse bg-ink/90 p-5 backdrop-blur sm:p-6">
              <dt className="mt-1 text-sm text-muted">{s.label}</dt>
              <dd data-count className="font-display text-4xl font-bold tabular-nums text-cream sm:text-5xl">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
        <div className="h-10 lg:h-14" />
      </div>
    </section>
  );
}
