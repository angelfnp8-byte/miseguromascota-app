/**
 * Homepage hero artwork — a dog and a cat sitting together with matching
 * collars, under a heart. Flat-shape/gradient SVG (no outlines, no house) —
 * distinct composition from AdoptionIllustration's house-and-windows scene.
 */
export function HeroPetsIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 340"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Ilustración de un perro y un gato sentados juntos, con collar a juego"
      className={className}
    >
      <defs>
        <linearGradient id="heroDog" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffb37a" />
          <stop offset="100%" stopColor="#ff7a45" />
        </linearGradient>
        <linearGradient id="heroCat" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4fcfbe" />
          <stop offset="100%" stopColor="#1e8f82" />
        </linearGradient>
      </defs>

      <circle cx="210" cy="175" r="150" fill="#ffffff" opacity="0.06" />

      {/* Heart + sparkles */}
      <path
        d="M210 68 c-8 -13 -29 -10 -29 7 c0 13 17 22 29 33 c12 -11 29 -20 29 -33 c0 -17 -21 -20 -29 -7 Z"
        fill="#ffffff"
      />
      <g fill="#ffffff" opacity="0.7">
        <rect x="146" y="54" width="5" height="16" rx="2.5" transform="rotate(-18 148.5 62)" />
        <rect x="269" y="54" width="5" height="16" rx="2.5" transform="rotate(18 271.5 62)" />
      </g>

      {/* Dog */}
      <ellipse cx="128" cy="248" rx="60" ry="64" fill="url(#heroDog)" />
      <ellipse cx="83" cy="145" rx="14" ry="38" transform="rotate(-22 83 145)" fill="url(#heroDog)" />
      <ellipse cx="177" cy="145" rx="14" ry="38" transform="rotate(22 177 145)" fill="url(#heroDog)" />
      <circle cx="130" cy="146" r="44" fill="url(#heroDog)" />
      <ellipse cx="130" cy="163" rx="23" ry="17" fill="#fff9f4" />
      <g fill="#5c2c14">
        <ellipse cx="111" cy="136" rx="6.5" ry="8" />
        <ellipse cx="149" cy="136" rx="6.5" ry="8" />
        <ellipse cx="130" cy="155" rx="8" ry="5.5" />
      </g>
      <path d="M74 190 Q130 212 186 190 L186 202 Q130 224 74 202 Z" fill="#146c5b" />
      <path d="M130 195 L142 201 L142 215 Q130 227 118 215 L118 201 Z" fill="#4fcfbe" />
      <circle cx="130" cy="210" r="4.5" fill="#ffffff" />

      {/* Cat */}
      <ellipse cx="292" cy="251" rx="58" ry="62" fill="url(#heroCat)" />
      <path d="M256 118 L245 82 L280 112 Z" fill="url(#heroCat)" />
      <path d="M328 118 L339 82 L304 112 Z" fill="url(#heroCat)" />
      <circle cx="292" cy="150" r="42" fill="url(#heroCat)" />
      <ellipse cx="292" cy="166" rx="21" ry="15" fill="#fff9f4" />
      <g fill="#0e2e27">
        <ellipse cx="274" cy="141" rx="5.5" ry="7" />
        <ellipse cx="310" cy="141" rx="5.5" ry="7" />
        <path d="M282 158 q10 8 20 0 q-10 11 -20 0 Z" />
      </g>
      <path d="M238 192 Q292 214 346 192 L346 204 Q292 226 238 204 Z" fill="#146c5b" />
      <path d="M292 197 L304 203 L304 217 Q292 229 280 217 L280 203 Z" fill="#ff7a45" />
      <circle cx="292" cy="212" r="4.5" fill="#ffffff" />

      {/* Paw print trail */}
      <g fill="#ffffff" opacity="0.18">
        <ellipse cx="35" cy="280" rx="7" ry="9" />
        <ellipse cx="53" cy="268" rx="5" ry="6.5" />
        <ellipse cx="19" cy="268" rx="5" ry="6.5" />
        <ellipse cx="387" cy="280" rx="7" ry="9" />
        <ellipse cx="405" cy="268" rx="5" ry="6.5" />
        <ellipse cx="369" cy="268" rx="5" ry="6.5" />
      </g>
    </svg>
  );
}
