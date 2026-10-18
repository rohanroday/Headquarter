import { feed, site } from "@/lib/site";
import { ArrowUpRight, Instagram, Play } from "../Icons";
import { MediaSlot } from "../MediaSlot";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

export function Feed() {
  return (
    <section id="feed" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <SectionHeading
        index="03"
        eyebrow="On the ground"
        title={
          <>
            Stories from <span className="text-hq">Sikkim</span>,
            <br /> straight from our feed.
          </>
        }
        intro={
          <>
            Festivals, founders, poets, potters and the occasional crew dance. This is the kind of content we make every
            week — for ourselves and for our clients.
          </>
        }
      />

      <div className="mt-16 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {feed.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 80}>
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-2xl border border-line"
            >
              <MediaSlot image={p.image} alt={p.title} tone={p.tone} className="aspect-[4/5]" sizes="(min-width: 1024px) 33vw, 50vw" />
              <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-night/90 via-night/10 to-transparent p-4 text-snow sm:p-5">
                <span className="ml-auto flex h-9 w-9 items-center justify-center rounded-full bg-snow/90 text-night transition-transform group-hover:scale-110">
                  <Play />
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-hq-light sm:text-[11px]">{p.kind}</p>
                  <p className="mt-2 font-display text-base font-semibold leading-tight sm:text-xl">{p.title}</p>
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 flex justify-center">
        <a
          href={site.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 rounded-full border border-line px-6 py-3.5 text-sm font-semibold transition-colors hover:border-hq hover:text-hq"
        >
          <Instagram /> Follow {site.instagramHandle}
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </Reveal>
    </section>
  );
}
