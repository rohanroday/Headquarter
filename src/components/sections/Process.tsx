import { process } from "@/lib/site";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

// Steps climb upward on desktop, like a trail to the summit.
const climb = ["lg:mt-48", "lg:mt-40", "lg:mt-32", "lg:mt-24", "lg:mt-16", "lg:mt-8", "lg:mt-0"];

export function Process() {
  return (
    <section id="process" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <SectionHeading
        index="05"
        eyebrow="How we work"
        title={
          <>
            From base camp
            <br /> <span className="text-hq">to summit.</span>
          </>
        }
        intro="Seven stages, the same on every project — so you always know where we are and what comes next."
      />

      <ol className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-7 lg:items-start lg:gap-3">
        {process.map((p, i) => (
          <Reveal
            as="li"
            key={p.step}
            delay={i * 70}
            className={`flex gap-4 rounded-2xl border p-5 sm:block sm:p-6 lg:p-5 ${climb[i]} ${
              i === process.length - 1 ? "border-hq bg-hq text-night" : "border-line bg-ink-2"
            }`}
          >
            <span
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-mono text-sm font-bold ${
                i === process.length - 1 ? "bg-night text-hq" : "bg-hq text-night"
              }`}
            >
              {i + 1}
            </span>
            <div>
              <h3 className="font-display text-xl font-bold sm:mt-5">{p.step}</h3>
              <p className={`mt-1 text-sm leading-relaxed sm:mt-2 ${i === process.length - 1 ? "text-night/75" : "text-muted"}`}>
                {p.text}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
