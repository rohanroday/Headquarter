"use client";

import { useEffect } from "react";
import { THEME_KEY } from "@/lib/theme";

const setTheme = (theme: "light" | "dark", save: boolean) => {
  const root = document.documentElement;
  root.dataset.theme = theme;
  document
    .querySelectorAll('meta[name="theme-color"]')
    .forEach((m) => m.setAttribute("content", theme === "light" ? "#f6f0e6" : "#0f0d0b"));
  if (save) {
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {}
  }
};

export function ThemeToggle({ className = "" }: { className?: string }) {
  // Keep following the device setting until the visitor picks a theme themselves.
  useEffect(() => {
    const mq = matchMedia("(prefers-color-scheme: light)");
    const onChange = (e: MediaQueryListEvent) => {
      let saved: string | null = null;
      try {
        saved = localStorage.getItem(THEME_KEY);
      } catch {}
      if (!saved) setTheme(e.matches ? "light" : "dark", false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <button
      type="button"
      onClick={() => setTheme(document.documentElement.dataset.theme === "light" ? "dark" : "light", true)}
      className={`group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-line text-cream transition-colors hover:border-hq hover:text-hq ${className}`}
    >
      <span className="sr-only light:hidden">Switch to light mode</span>
      <span className="sr-only hidden light:inline">Switch to dark mode</span>
      {/* Sun: shown in dark mode */}
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5 transition-transform duration-500 light:hidden group-hover:rotate-45" aria-hidden="true">
        <circle cx="12" cy="12" r="4.2" />
        <path d="M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6" strokeLinecap="round" />
      </svg>
      {/* Moon: shown in light mode */}
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="hidden h-5 w-5 transition-transform duration-500 light:block group-hover:-rotate-12" aria-hidden="true">
        <path d="M20.5 14.2A8.5 8.5 0 1 1 9.8 3.5a6.8 6.8 0 0 0 10.7 10.7Z" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
