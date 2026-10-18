import { site, whatsappLink } from "@/lib/site";
import { ContactForm } from "../ContactForm";
import { Instagram, Mail, Phone, Pin, WhatsApp } from "../Icons";
import { Reveal } from "../Reveal";

export function Contact() {
  const channels = [
    { icon: <WhatsApp />, label: "WhatsApp", value: site.phone, href: whatsappLink("Hi Headquarter!"), external: true },
    { icon: <Phone />, label: "Call", value: site.phone, href: `tel:+${site.phoneRaw}` },
    { icon: <Mail />, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: <Instagram />, label: "Instagram", value: site.instagramHandle, href: site.instagram, external: true },
  ];

  return (
    <section id="contact" className="relative overflow-hidden border-t border-line">
      <div aria-hidden="true" className="absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-hq/15 blur-[120px]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-32">
        <Reveal className="lg:col-span-5">
          <p className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-hq">
            <span>07</span>
            <span className="h-px w-10 bg-hq/60" />
            <span>Contact</span>
          </p>
          <h2 data-split className="font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl">
            Got a brief?
            <br />
            <span className="text-hq">Let&apos;s climb.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
            Tell us what you&apos;re planning. We reply within one working day — usually much sooner on WhatsApp.
          </p>

          <ul className="mt-10 space-y-3">
            {channels.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center gap-4 rounded-2xl border border-line bg-ink-2/60 p-4 transition-colors hover:border-hq/60"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-hq/15 text-hq">{c.icon}</span>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-[0.2em] text-muted">{c.label}</span>
                    <span className="block truncate font-medium group-hover:text-hq-light">{c.value}</span>
                  </span>
                </a>
              </li>
            ))}
            <li className="flex items-center gap-4 p-4 text-muted">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-hq/15 text-hq">
                <Pin />
              </span>
              {site.location}
            </li>
          </ul>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-7">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
