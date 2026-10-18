"use client";

import { useEffect, useState } from "react";
import { getLenis } from "@/lib/motion";
import { nav } from "@/lib/site";
import { Logo } from "./Logo";
import { ArrowUpRight } from "./Icons";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) getLenis()?.stop();
    else getLenis()?.start();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-line bg-ink/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <a href="#top" aria-label="Headquarter — back to top" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-cream/70 transition-colors hover:text-cream">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
        <ThemeToggle />
        <a
          href="#contact"
          className="group hidden items-center gap-2 rounded-full bg-hq px-5 py-2.5 text-sm font-semibold text-night transition-colors hover:bg-hq-light lg:inline-flex"
        >
          Start a project
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="relative flex h-11 w-11 items-center justify-center rounded-full border border-line lg:hidden"
        >
          <span className={`absolute h-0.5 w-5 bg-cream transition-transform ${open ? "rotate-45" : "-translate-y-1.5"}`} />
          <span className={`absolute h-0.5 w-5 bg-cream transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`absolute h-0.5 w-5 bg-cream transition-transform ${open ? "-rotate-45" : "translate-y-1.5"}`} />
        </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-ink px-4 pb-10 pt-6 sm:px-6 lg:hidden"
      >
        <nav aria-label="Mobile" className="flex flex-col">
          {nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-4 border-b border-line py-4 font-display text-3xl font-bold"
            >
              <span className="font-mono text-xs text-hq">0{i + 1}</span>
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="mt-8 flex items-center justify-center gap-2 rounded-full bg-hq py-4 font-semibold text-night"
        >
          Start a project <ArrowUpRight />
        </a>
      </div>
    </header>
  );
}
