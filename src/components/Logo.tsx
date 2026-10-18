type Props = { className?: string };

// Round orange HQ badge, echoing the Instagram profile mark (a tent tucked into the H).
export function LogoMark({ className = "h-9 w-9" }: Props) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <circle cx="32" cy="32" r="32" fill="var(--color-hq)" />
      <g fill="var(--color-night)">
        <rect x="12" y="19" width="5.5" height="26" />
        <rect x="26.5" y="19" width="5.5" height="26" />
        <path d="M17.5 45 L22 35 L26.5 45 Z" />
        <rect x="17.5" y="29" width="9" height="4.5" />
        <path d="M44 18.5c-7.2 0-12 5.8-12 13.5S36.8 45.5 44 45.5c2.3 0 4.4-.6 6.1-1.7l3.4 3.7 3.6-3.3-3.3-3.6c1.5-2.2 2.2-5 2.2-8.6 0-7.7-4.8-13.5-12-13.5Zm0 21.5c-3.5 0-6.3-3.1-6.3-8s2.8-8 6.3-8 6.3 3.1 6.3 8-2.8 8-6.3 8Z" />
      </g>
    </svg>
  );
}

export function Logo({ className = "" }: Props) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark />
      <span className="font-display text-lg font-bold leading-none tracking-tight">
        Headquarter
        <span className="block font-mono text-[10px] font-normal uppercase tracking-[0.3em] text-muted">
          Media house
        </span>
      </span>
    </span>
  );
}
