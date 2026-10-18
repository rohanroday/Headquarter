import { nav, site, whatsappLink } from "@/lib/site";
import { Instagram, Mail, WhatsApp } from "../Icons";
import { Logo } from "../Logo";

export function Footer() {
  return (
    <footer className="overflow-hidden border-t border-line bg-ink-2/60">
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">{site.tagline} Content, marketing and events from Gangtok, Sikkim.</p>
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-3 text-sm">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-cream/70 hover:text-cream">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex gap-3 md:justify-end">
            {[
              { label: "Instagram", href: site.instagram, icon: <Instagram /> },
              { label: "WhatsApp", href: whatsappLink(), icon: <WhatsApp /> },
              { label: "Email", href: `mailto:${site.email}`, icon: <Mail /> },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-cream/80 transition-colors hover:border-hq hover:text-hq"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <p aria-hidden="true" data-wordmark className="mt-16 select-none whitespace-nowrap font-display text-[clamp(2.75rem,12.5vw,11rem)] font-extrabold leading-none tracking-tighter text-cream/[0.06]">
          HEADQUARTER
        </p>

        <div className="mt-6 flex flex-col justify-between gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row">
          <p>© 2026 Headquarter Media House. Gangtok, Sikkim.</p>
          <p>Made in the Northeast.</p>
        </div>
      </div>
    </footer>
  );
}
