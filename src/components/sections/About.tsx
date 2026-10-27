import { clients, photos, reasons } from "@/lib/site";
import { MediaSlot } from "../MediaSlot";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

export function About() {
  return (
    <section id="about" className="border-t border-line bg-ink-2/50">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <SectionHeading
          index="06"
          eyebrow="About HQ"
          title={
            <>
              Built from scratch
              <br /> <span className="text-hq">in Gangtok.</span>
            </>
          }
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <MediaSlot image={photos.about} alt="A group gathered at a festival booth during Chirbirey River Fest" tone="orange" label="On the ground · Chirbirey River Fest" className="aspect-[4/3] rounded-3xl" />
          </Reveal>
          <Reveal delay={120} className="flex flex-col justify-center">
            <p className="text-xl leading-relaxed text-cream/90 sm:text-2xl">
              Headquarter is a young media house and creative agency from Sikkim. We work with brands, festivals,
              government departments and creators — making content, shaping communication and building campaigns that
              move beyond the screen.
            </p>
            <p className="mt-6 leading-relaxed text-muted">
              We believe geography should never limit ambition. Local knowledge, national standards.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 80} className="rounded-2xl border border-line bg-ink p-6">
              <span className="font-mono text-xs text-hq">0{i + 1}</span>
              <h3 className="mt-4 font-display text-xl font-bold">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{r.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20">
          <p className="text-center font-mono text-xs uppercase tracking-[0.3em] text-muted">Trusted by</p>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            {clients.map((c) => (
              <li key={c} className="font-display text-xl font-bold text-cream/45 transition-colors hover:text-cream sm:text-2xl">
                {c}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
