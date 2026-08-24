/**
 * Original flat illustration for the homepage adoption section — a house
 * with a heart, dog and cat peeking out. Same brand gradient language as
 * HeroPetsIllustration/LogoMark, no stock or AI photos used.
 */
export function AdoptionIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 340"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Ilustración de una casa con un perro y un gato en adopción"
      className={className}
    >
      <defs>
        <linearGradient id="adoptHouse" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ff9a68" />
          <stop offset="100%" stopColor="#ff7a45" />
        </linearGradient>
        <linearGradient id="adoptRoof" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2bb3a3" />
          <stop offset="100%" stopColor="#146c5b" />
        </linearGradient>
        <linearGradient id="adoptCat" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4fcfbe" />
          <stop offset="100%" stopColor="#1e8f82" />
        </linearGradient>
      </defs>

      <circle cx="210" cy="176" r="164" fill="#146c5b" opacity="0.05" />

      {/* House */}
      <path d="M90 168 L210 78 L330 168 L330 268 C330 274 325 279 319 279 L101 279 C95 279 90 274 90 268 Z" fill="url(#adoptHouse)" />
      <path d="M70 178 L210 68 L350 178 L332 200 L210 106 L88 200 Z" fill="url(#adoptRoof)" />
      <rect x="182" y="196" width="56" height="83" rx="6" fill="#fff4ec" />
      <path d="M210 196 v-2 a10 10 0 0 1 10 10 v4 h-20 v-4 a10 10 0 0 1 10 -8 Z" fill="#e35f2c" />

      {/* Heart above the door */}
      <path
        d="M210 150 c-7 -12 -26 -9 -26 6 c0 12 15 20 26 30 c11 -10 26 -18 26 -30 c0 -15 -19 -18 -26 -6 Z"
        fill="#ffffff"
      />

      {/* Dog peeking from the left window */}
      <g transform="translate(96,196)">
        <circle cx="34" cy="34" r="34" fill="#fff9f4" />
        <ellipse cx="10" cy="14" rx="12" ry="16" transform="rotate(-20 10 14)" fill="#e35f2c" />
        <ellipse cx="58" cy="14" rx="12" ry="16" transform="rotate(20 58 14)" fill="#e35f2c" />
        <g fill="#5c2c14">
          <ellipse cx="24" cy="34" rx="4.5" ry="5.5" />
          <ellipse cx="44" cy="34" rx="4.5" ry="5.5" />
          <ellipse cx="34" cy="46" rx="6" ry="4.5" />
        </g>
      </g>

      {/* Cat peeking from the right window */}
      <g transform="translate(258,192)">
        <circle cx="34" cy="36" r="34" fill="#fff9f4" />
        <path d="M14 10 L26 30 L4 30 Z" fill="url(#adoptCat)" />
        <path d="M54 10 L66 30 L42 30 Z" fill="url(#adoptCat)" />
        <g fill="#0e2e27">
          <ellipse cx="22" cy="38" rx="4" ry="5" />
          <ellipse cx="46" cy="38" rx="4" ry="5" />
          <path d="M28 48 q6 6 12 0 q-6 8 -12 0 Z" />
        </g>
      </g>

      {/* Paw print trail */}
      <g fill="#146c5b" opacity="0.18">
        <ellipse cx="356" cy="86" rx="7" ry="9" />
        <ellipse cx="374" cy="74" rx="5" ry="6.5" />
        <ellipse cx="340" cy="74" rx="5" ry="6.5" />
        <ellipse cx="46" cy="100" rx="7" ry="9" />
        <ellipse cx="64" cy="88" rx="5" ry="6.5" />
        <ellipse cx="30" cy="88" rx="5" ry="6.5" />
      </g>
    </svg>
  );
}
