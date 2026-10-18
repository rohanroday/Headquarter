"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/motion";

const words = ["Content", "Reels", "Social media", "Events", "Creators", "Campaigns", "PR", "Workshops"];

export function Marquee() {
  const track = useRef<HTMLDivElement>(null);

  // GSAP takes over from the CSS loop: scrolling speeds the band up and
  // scrolling back up reverses it, then it eases back to its idle pace.
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      el.classList.remove("animate-marquee");
      const loop = gsap.to(el, { xPercent: -50, duration: 40, ease: "none", repeat: -1 });
      let direction = 1;
      const st = ScrollTrigger.create({
        onUpdate: (self) => {
          if (self.direction !== direction) direction = self.direction;
          const boost = 1 + Math.min(Math.abs(self.getVelocity()) / 250, 6);
          gsap.to(loop, { timeScale: direction * boost, duration: 0.2, overwrite: true });
          gsap.to(loop, { timeScale: direction, duration: 1.2, delay: 0.2, ease: "power2.out" });
        },
      });
      return () => {
        st.kill();
        loop.kill();
        gsap.set(el, { clearProps: "transform" });
        el.classList.add("animate-marquee");
      };
    });
    return () => mm.revert();
  }, []);

  const row = (hidden: boolean) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {words.map((w) => (
        <span key={w} className="flex items-center font-display text-2xl font-bold uppercase tracking-tight sm:text-3xl">
          <span className="px-6">{w}</span>
          <span className="text-night/60">✦</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className="overflow-hidden bg-hq py-4 text-night">
      <div ref={track} className="flex w-max animate-marquee will-change-transform">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
