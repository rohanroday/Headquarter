import { services } from "@/lib/site";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <SectionHeading
        index="01"
        eyebrow="Services"
        title={
          <>
            Everything a brand needs
            <br className="hidden sm:block" /> <span className="text-hq">to be seen</span> in the Northeast.
          </>
        }
        intro="One team handles the whole climb — from the idea and the shoot to the post, the creator and the press. You get one point of contact and work that sounds like it belongs here."
      />

      <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal
            key={s.title}
            delay={(i % 3) * 90}
            className={`group relative flex flex-col rounded-2xl border border-line bg-ink-2 p-7 transition-colors hover:border-hq/60 ${
              i === 0 ? "lg:col-span-2 lg:row-span-1" : ""
            }`}
          >
            <span className="font-mono text-xs text-hq">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-6 font-display text-2xl font-bold tracking-tight">{s.title}</h3>
            <p className="mt-1 text-sm font-medium text-hq-light">{s.line}</p>
            <p className="mt-4 flex-1 leading-relaxed text-muted">{s.body}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {s.tags.map((t) => (
                <li key={t} className="rounded-full border border-line px-3 py-1 text-xs text-cream/70">
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
        <Reveal
          delay={180}
          className="flex flex-col justify-between rounded-2xl bg-hq p-7 text-night"
        >
          <p className="font-display text-2xl font-bold leading-tight">Not sure what you need yet?</p>
          <a href="#contact" className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-night px-5 py-3 text-sm font-semibold text-snow">
            Tell us the goal — we&apos;ll plan the route
          </a>
        </Reveal>
      </div>
    </section>
  );
}
