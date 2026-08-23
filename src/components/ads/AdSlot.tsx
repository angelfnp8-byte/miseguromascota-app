"use client";

import { useEffect, useRef } from "react";
import { ADSENSE_PUBLISHER_ID } from "@/lib/adsense";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

/**
 * Reusable AdSense unit. The publisher ID lives in one place (lib/adsense.ts);
 * callers only pass which slot to render. Responsive by default — no fixed
 * width, so it never causes horizontal scroll on mobile.
 */
export function AdSlot({ slot }: { slot: string }) {
  const insRef = useRef<HTMLModElement>(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    pushed.current = true;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // AdSense script not loaded yet (e.g. consent not granted) — harmless.
    }
  }, []);

  return (
    <div className="mx-auto my-8 max-w-[1120px] overflow-hidden px-5 text-center">
      <p className="mb-1.5 text-[0.7rem] uppercase tracking-wide text-(--color-text-light)">
        Publicidad
      </p>
      <div className="flex min-h-25 items-center justify-center">
        <ins
          ref={insRef}
          className="adsbygoogle block w-full"
          data-ad-client={ADSENSE_PUBLISHER_ID}
          data-ad-slot={slot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
}
