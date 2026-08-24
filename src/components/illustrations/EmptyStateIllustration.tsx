/**
 * Small original illustration for empty states (no results / no listings
 * yet) — a dog with a magnifying glass, in muted brand tones so it reads
 * as neutral rather than an error.
 */
export function EmptyStateIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 160"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Ilustración de un perro con una lupa, sin resultados"
      className={className}
    >
      <defs>
        <linearGradient id="emptyPet" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4fcfbe" />
          <stop offset="100%" stopColor="#1e8f82" />
        </linearGradient>
      </defs>

      <ellipse cx="100" cy="140" rx="70" ry="10" fill="#146c5b" opacity="0.08" />

      <g transform="translate(46,26)">
        <ellipse cx="10" cy="16" rx="11" ry="15" transform="rotate(-18 10 16)" fill="url(#emptyPet)" />
        <ellipse cx="58" cy="16" rx="11" ry="15" transform="rotate(18 58 16)" fill="url(#emptyPet)" />
        <ellipse cx="34" cy="52" rx="40" ry="36" fill="url(#emptyPet)" />
        <ellipse cx="34" cy="66" rx="16" ry="12" fill="#e8fbf6" />
        <g fill="#0e2e27">
          <ellipse cx="22" cy="46" rx="4" ry="5" />
          <ellipse cx="46" cy="46" rx="4" ry="5" />
          <ellipse cx="34" cy="60" rx="5" ry="3.5" />
        </g>
      </g>

      <g transform="translate(112,62)" stroke="#ff7a45" strokeWidth="6" strokeLinecap="round" fill="none">
        <circle cx="20" cy="20" r="18" fill="#fff4ec" />
        <line x1="33" y1="33" x2="52" y2="52" />
      </g>
    </svg>
  );
}
