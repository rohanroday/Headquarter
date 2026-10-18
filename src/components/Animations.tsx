"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger, SplitText } from "@/lib/motion";

// All page-level GSAP animations, attached to the server-rendered markup through
// data-* hooks. Everything is reverted on unmount and skipped for reduced motion.
export function Animations() {
  useEffect(() => {
    const root = document.documentElement;
    const mm = gsap.matchMedia();

    mm.add(
      {
        motion: "(prefers-reduced-motion: no-preference)",
        desktop: "(min-width: 1024px) and (pointer: fine)",
      },
      (ctx) => {
        const { motion, desktop } = ctx.conditions as { motion: boolean; desktop: boolean };
        if (!motion) {
          root.classList.add("hero-ready");
          return;
        }

        // ── Hero intro ────────────────────────────────────────────────
        const heroIn = gsap.utils.toArray<HTMLElement>("[data-hero-in]");
        const title = document.querySelector<HTMLElement>("[data-hero-title]");
        root.classList.add("hero-ready");

        const intro = gsap.timeline({ defaults: { ease: "expo.out", duration: 1.2 } });
        intro.from("[data-hero-photo]", { scale: 1.25, opacity: 0, duration: 2.2, ease: "power3.out" }, 0);
        intro.from("[data-hero-glow]", { opacity: 0, scale: 0.6, duration: 2.4, ease: "power2.out" }, 0.2);

        if (title) {
          SplitText.create(title, {
            type: "words",
            mask: "words",
            wordsClass: "split-mask",
            autoSplit: true,
            onSplit: (self) =>
              intro.from(self.words, { yPercent: 110, rotate: 4, duration: 1.3, stagger: 0.08 }, 0.25),
          });
        }
        intro.from(
          heroIn.filter((el) => el !== title),
          { y: 30, opacity: 0, stagger: 0.12, duration: 1 },
          0.15,
        );

        // Stats count up from zero (final values are already in the HTML for SEO).
        document.querySelectorAll<HTMLElement>("[data-count]").forEach((el, i) => {
          const match = el.textContent?.trim().match(/^(\d+)(.*)$/);
          if (!match) return;
          const [, num, suffix] = match;
          const counter = { v: 0 };
          intro.to(
            counter,
            {
              v: Number(num),
              duration: 1.6,
              ease: "power3.out",
              onUpdate: () => {
                el.textContent = Math.round(counter.v) + suffix;
              },
            },
            0.9 + i * 0.1,
          );
        });

        // ── Hero scroll: photo drifts slower than the page, content lifts away ──
        gsap.to("[data-hero-photo]", {
          yPercent: 18,
          ease: "none",
          scrollTrigger: { trigger: "[data-hero]", start: "top top", end: "bottom top", scrub: true },
        });
        gsap.to("[data-hero-content]", {
          y: -80,
          opacity: 0.25,
          ease: "none",
          scrollTrigger: { trigger: "[data-hero]", start: "top top", end: "bottom top", scrub: true },
        });

        // ── Section headings: words rise out of a mask ─────────────────
        gsap.utils.toArray<HTMLElement>("[data-split]").forEach((h) => {
          SplitText.create(h, {
            type: "words",
            mask: "words",
            wordsClass: "split-mask",
            autoSplit: true,
            onSplit: (self) =>
              gsap.from(self.words, {
                yPercent: 105,
                duration: 1.1,
                ease: "expo.out",
                stagger: 0.06,
                scrollTrigger: { trigger: h, start: "top 85%", once: true },
              }),
          });
        });

        // ── Photo parallax inside cards ────────────────────────────────
        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
          gsap.fromTo(
            el,
            { yPercent: -8 },
            {
              yPercent: 8,
              ease: "none",
              scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true },
            },
          );
        });

        // ── Footer wordmark: letters settle into place as you reach the end ──
        const mark = document.querySelector<HTMLElement>("[data-wordmark]");
        if (mark) {
          SplitText.create(mark, {
            type: "chars",
            autoSplit: true,
            onSplit: (self) =>
              gsap.from(self.chars, {
                yPercent: 60,
                opacity: 0,
                ease: "none",
                stagger: 0.04,
                scrollTrigger: { trigger: mark, start: "top bottom", end: "bottom 85%", scrub: 1 },
              }),
          });
        }

        // ── Magnetic buttons (desktop with a mouse only) ───────────────
        if (desktop) {
          gsap.utils.toArray<HTMLElement>("[data-magnetic]").forEach((btn) => {
            const xTo = gsap.quickTo(btn, "x", { duration: 0.6, ease: "elastic.out(1, 0.4)" });
            const yTo = gsap.quickTo(btn, "y", { duration: 0.6, ease: "elastic.out(1, 0.4)" });
            const move = (e: PointerEvent) => {
              const r = btn.getBoundingClientRect();
              xTo((e.clientX - (r.left + r.width / 2)) * 0.3);
              yTo((e.clientY - (r.top + r.height / 2)) * 0.4);
            };
            const leave = () => {
              xTo(0);
              yTo(0);
            };
            btn.addEventListener("pointermove", move);
            btn.addEventListener("pointerleave", leave);
            ctx.add(() => () => {
              btn.removeEventListener("pointermove", move);
              btn.removeEventListener("pointerleave", leave);
            });
          });
        }

        // Fonts change text widths; re-measure triggers once they're in.
        document.fonts?.ready.then(() => ScrollTrigger.refresh());
      },
    );

    return () => mm.revert();
  }, []);

  return null;
}
