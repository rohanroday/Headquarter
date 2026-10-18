import { work } from "@/lib/site";
import { MediaSlot } from "../MediaSlot";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

export function Work() {
  const [featured, ...rest] = work;
  return (
    <section id="work" className="border-y border-line bg-ink-2/50">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <SectionHeading
          index="02"
          eyebrow="Selected work"
          title={
            <>
              Brands, festivals
              <br /> and <span className="text-hq">departments</span> we&apos;ve climbed with.
            </>
          }
          intro="From national retail brands to Sikkim's biggest cultural celebrations — every project starts with a brief and ends with work people actually stop scrolling for."
        />

        {/* Featured project */}
        <Reveal className="group mt-16 grid overflow-hidden rounded-3xl border border-line bg-ink lg:grid-cols-2">
          <MediaSlot
            image={featured.image}
            alt={`${featured.client} — project visual`}
            tone={featured.tone}
            label="Featured project"
            className="min-h-72 lg:min-h-[28rem]"
          />
          <div className="flex flex-col justify-center p-7 sm:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-hq">{featured.sector}</p>
            <h3 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">{featured.client}</h3>
            <dl className="mt-8 space-y-5">
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted">The brief</dt>
                <dd className="mt-1 text-lg leading-snug">{featured.brief}</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted">What we did</dt>
                <dd className="mt-1 leading-relaxed text-cream/75">{featured.execution}</dd>
              </div>
            </dl>
            <ul className="mt-8 flex flex-wrap gap-2">
              {featured.tags.map((t) => (
                <li key={t} className="rounded-full bg-hq/15 px-3 py-1 text-xs text-hq-light">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((c, i) => (
            <Reveal key={c.client} delay={(i % 3) * 90} as="article" className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-ink">
              <MediaSlot
                image={c.image}
                alt={`${c.client} — project visual`}
                tone={c.tone}
                label={c.sector}
                className="aspect-[16/10]"
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-2xl font-bold tracking-tight">{c.client}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/80">{c.brief}</p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{c.execution}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <li key={t} className="rounded-full border border-line px-3 py-1 text-xs text-cream/70">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
