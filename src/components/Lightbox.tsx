"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Photo } from "@/lib/gallery";
import { getLenis } from "@/lib/motion";

type Props = {
  photos: Photo[];
  title: string;
  index: number;
  onClose: () => void;
};

// Full-screen photo viewer: arrow keys / swipe to move, Esc or the backdrop to close.
export function Lightbox({ photos, title, index: start, onClose }: Props) {
  const [index, setIndex] = useState(start);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchX = useRef<number | null>(null);
  const count = photos.length;
  const go = useCallback((d: number) => setIndex((i) => (i + d + count) % count), [count]);

  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    getLenis()?.stop();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      getLenis()?.start();
      opener?.focus();
    };
  }, [go, onClose]);

  // Warm the neighbours so next/prev feel instant.
  const near = [index - 1, index + 1].map((i) => photos[(i + count) % count]);
  const photo = photos[index];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} photos`}
      data-lenis-prevent
      className="fixed inset-0 z-[80] flex flex-col bg-night/95 text-snow backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
    >
      <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <p className="min-w-0 truncate text-sm">
          <span className="font-semibold">{title}</span>
          <span className="ml-3 font-mono text-xs tabular-nums text-snow/60">
            {index + 1} / {count}
          </span>
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-snow/25 transition-colors hover:border-snow hover:bg-snow hover:text-night"
          aria-label="Close photos"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
            <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <div className="relative flex-1" onClick={(e) => e.target === e.currentTarget && onClose()}>
        <Image
          key={photo.src}
          src={photo.src}
          alt={`${title}, photo ${index + 1} of ${count}`}
          fill
          sizes="100vw"
          placeholder="blur"
          blurDataURL={photo.blur}
          className="lightbox-photo object-contain px-2 sm:px-20"
          priority
        />
        {near.map((p) => (
          <link key={p.src} rel="prefetch" as="image" href={p.src} />
        ))}
        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-night/60 transition-colors hover:bg-snow hover:text-night sm:flex"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
                <path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-night/60 transition-colors hover:bg-snow hover:text-night sm:flex"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </>
        )}
      </div>

      <div className="flex gap-2 overflow-x-auto px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 sm:justify-center sm:px-6">
        {photos.map((p, i) => (
          <button
            key={p.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show photo ${i + 1}`}
            aria-current={i === index}
            className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-lg transition-opacity ${
              i === index ? "opacity-100 ring-2 ring-hq" : "opacity-45 hover:opacity-80"
            }`}
          >
            <Image src={p.src} alt="" fill sizes="56px" className="object-cover" placeholder="blur" blurDataURL={p.blur} />
          </button>
        ))}
      </div>
    </div>
  );
}
