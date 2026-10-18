import Image from "next/image";
import { creatorNiches, matchedOn, photos, whatsappLink } from "@/lib/site";
import { ArrowUpRight } from "../Icons";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

export function Creators() {
  return (
    <section id="creators" className="relative isolate overflow-hidden border-y border-line">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <Image src={photos.creators} alt="" fill sizes="100vw" className="object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/80 to-ink" />
        <div className="absolute inset-0 bg-pine/15" />
      </div>
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <SectionHeading
          index="04"
          eyebrow="Creators & the Northeast"
          title={
            <>
              The Northeast isn&apos;t a niche.
              <br /> <span className="text-hq">It&apos;s a market.</span>
            </>
          }
          intro="Eight states, nearly 50 million people, and audiences who trust local voices over national ads. Our creator roster is how brands enter the region the right way."
        />

        <div className="mt-16 grid gap-4 lg:grid-cols-12">
          <Reveal className="rounded-3xl border border-line bg-ink p-7 sm:p-10 lg:col-span-7">
            <p className="font-display text-7xl font-extrabold text-hq sm:text-8xl">27+</p>
            <p className="mt-2 text-xl font-semibold">creators across Northeast India</p>
            <p className="mt-4 max-w-md leading-relaxed text-muted">
              Different audiences, languages and communities. We match each brief to the creator whose followers will
              actually listen — then handle briefing, shoots, approvals and reporting.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {creatorNiches.map((n) => (
                <li key={n} className="rounded-full bg-cream px-4 py-2 text-sm font-semibold text-ink">
                  {n}
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="grid gap-4 lg:col-span-5">
            <Reveal delay={100} className="rounded-3xl border border-line bg-ink p-7 sm:p-8">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-hq">Every match is based on</p>
              <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
                {matchedOn.map((m) => (
                  <li key={m} className="flex items-center gap-2 text-cream/85">
                    <span className="h-1.5 w-1.5 rounded-full bg-hq" />
                    {m}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={180} className="flex flex-col justify-between rounded-3xl bg-hq p-7 text-night sm:p-8">
              <div>
                <p className="font-display text-2xl font-bold leading-tight">Are you a creator from the Northeast?</p>
                <p className="mt-2 text-night/75">Join the roster and get matched with paid brand campaigns.</p>
              </div>
              <a
                href={whatsappLink("Hi Headquarter! I'm a creator and I'd like to join your roster. My Instagram: ")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-night px-5 py-3 text-sm font-semibold text-snow"
              >
                Apply to join <ArrowUpRight />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
