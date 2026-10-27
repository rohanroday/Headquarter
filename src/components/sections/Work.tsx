import { events, work } from "@/lib/site";
import { EventStory } from "../EventStory";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

export function Work() {
  return (
    <section id="work" className="border-y border-line bg-ink-2/50">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <SectionHeading
          index="02"
          eyebrow="Selected work"
          title={
            <>
              Festivals, culture
              <br /> and <span className="text-hq">the people</span> behind them.
            </>
          }
          intro="Three of Sikkim's biggest gatherings, promoted, produced and told by our team. Tap any photo to see the full set."
        />

        <div className="mt-16 grid gap-20 lg:mt-20 lg:gap-28">
          {events.map((e, i) => (
            <EventStory key={e.slug} story={e} number={i + 1} flip={i % 2 === 1} />
          ))}
        </div>

        <Reveal className="mt-24 border-t border-line pt-10 lg:mt-32">
          <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">More brands and mandates</h3>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {work.map((c) => (
              <li key={c.client} className="grid gap-3 py-6 md:grid-cols-12 md:gap-6">
                <div className="md:col-span-4">
                  <p className="font-display text-xl font-bold">{c.client}</p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-hq">{c.sector}</p>
                </div>
                <p className="text-sm leading-relaxed text-muted md:col-span-5">
                  <span className="text-cream">{c.brief}</span> {c.execution}
                </p>
                <ul className="flex flex-wrap content-start gap-2 md:col-span-3 md:justify-end">
                  {c.tags.map((t) => (
                    <li key={t} className="rounded-full border border-line px-3 py-1 text-xs text-cream/70">
                      {t}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
