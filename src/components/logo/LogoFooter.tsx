/**
 * Footer lockup — the footer band is always dark, in both themes, so this
 * always renders the light-on-dark wordmark variant (no theme toggle needed).
 */
export function LogoFooter({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 680 108"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Mi Seguro Mascota"
      className={className ?? "h-8 w-auto"}
    >
      <defs>
        <linearGradient id="logoShieldFooter" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4FCFBE" />
          <stop offset="100%" stopColor="#2BB3A3" />
        </linearGradient>
      </defs>
      <g transform="translate(10,-10) scale(0.8)">
        <path
          d="M100 14 L166 36 L166 96 C166 140 138 172 100 188 C62 172 34 140 34 96 L34 36 Z"
          fill="url(#logoShieldFooter)"
        />
        <g fill="#12302E">
          <ellipse cx="100" cy="122" rx="27" ry="21" />
          <ellipse cx="69" cy="92" rx="12.5" ry="15.5" />
          <ellipse cx="88" cy="70" rx="13" ry="16.5" />
          <ellipse cx="112" cy="70" rx="13" ry="16.5" />
          <ellipse cx="131" cy="92" rx="12.5" ry="15.5" />
        </g>
      </g>
      <text
        x="188"
        y="88"
        fontFamily="'Poppins','Segoe UI',Verdana,Arial,sans-serif"
        fontWeight="700"
        fontSize="46"
        fill="#FFFFFF"
      >
        Mi<tspan fill="#4FCFBE">Seguro</tspan>Mascota
      </text>
    </svg>
  );
}
