/**
 * Original flat-illustration artwork (no stock/AI photos used) — dog + cat
 * duo under a protective shield, in the same teal/orange gradient language
 * as the logo mark. Used in the homepage hero to represent both pillars of
 * the site (insurance guidance + adoption) at a glance.
 */
export function HeroPetsIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 340"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Ilustración de un perro y un gato protegidos por un escudo"
      className={className}
    >
      <defs>
        <linearGradient id="heroDog" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffb08a" />
          <stop offset="100%" stopColor="#ff7a45" />
        </linearGradient>
        <linearGradient id="heroCat" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4fcfbe" />
          <stop offset="100%" stopColor="#1e8f82" />
        </linearGradient>
        <linearGradient id="heroShield" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#dff2ec" />
        </linearGradient>
      </defs>

      <circle cx="210" cy="176" r="164" fill="#ffffff" opacity="0.08" />

      {/* Cat, left */}
      <g transform="translate(30,96)">
        <path d="M46 4 L70 46 L22 46 Z" fill="url(#heroCat)" />
        <path d="M118 4 L142 46 L94 46 Z" fill="url(#heroCat)" />
        <ellipse cx="82" cy="98" rx="80" ry="72" fill="url(#heroCat)" />
        <g fill="#0e2e27">
          <ellipse cx="58" cy="92" rx="8" ry="10" />
          <ellipse cx="106" cy="92" rx="8" ry="10" />
          <path d="M74 112 q8 8 16 0 q-8 10 -16 0 Z" />
        </g>
        <g stroke="#0e2e27" strokeWidth="2.5" strokeLinecap="round" opacity="0.55">
          <line x1="18" y1="108" x2="-10" y2="104" />
          <line x1="18" y1="118" x2="-10" y2="120" />
          <line x1="146" y1="108" x2="174" y2="104" />
          <line x1="146" y1="118" x2="174" y2="120" />
        </g>
      </g>

      {/* Dog, right */}
      <g transform="translate(210,84)">
        <ellipse cx="30" cy="34" rx="26" ry="34" transform="rotate(-18 30 34)" fill="url(#heroDog)" />
        <ellipse cx="146" cy="34" rx="26" ry="34" transform="rotate(18 146 34)" fill="url(#heroDog)" />
        <ellipse cx="88" cy="104" rx="86" ry="78" fill="url(#heroDog)" />
        <ellipse cx="88" cy="132" rx="34" ry="26" fill="#fff4ec" />
        <g fill="#5c2c14">
          <ellipse cx="66" cy="96" rx="7.5" ry="9.5" />
          <ellipse cx="112" cy="96" rx="7.5" ry="9.5" />
          <ellipse cx="88" cy="122" rx="10" ry="7" />
        </g>
      </g>

      {/* Shield badge */}
      <g transform="translate(168,208)">
        <path
          d="M42 4 L78 18 L78 46 C78 70 62 88 42 96 C22 88 6 70 6 46 L6 18 Z"
          fill="url(#heroShield)"
          stroke="#e8f5f1"
        />
        <path
          d="M26 48 L37 58 L58 34"
          fill="none"
          stroke="#1e8f82"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* Paw print accents */}
      <g fill="#ffffff" opacity="0.5">
        <ellipse cx="50" cy="270" rx="7" ry="9" />
        <ellipse cx="68" cy="258" rx="5" ry="6.5" />
        <ellipse cx="34" cy="258" rx="5" ry="6.5" />
        <ellipse cx="350" cy="60" rx="7" ry="9" />
        <ellipse cx="368" cy="48" rx="5" ry="6.5" />
        <ellipse cx="334" cy="48" rx="5" ry="6.5" />
      </g>
    </svg>
  );
}
