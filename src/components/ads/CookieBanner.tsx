"use client";

import { useEffect, useState } from "react";

const CONSENT_KEY = "ms_cookie_consent";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function updateConsent(granted: boolean) {
  if (typeof window.gtag !== "function") return;
  const state = granted ? "granted" : "denied";
  window.gtag("consent", "update", {
    ad_storage: state,
    ad_user_data: state,
    ad_personalization: state,
    analytics_storage: state,
  });
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(CONSENT_KEY);
    } catch {
      // localStorage unavailable (e.g. blocked) — ask again this visit.
    }

    if (stored === "granted") updateConsent(true);
    else if (stored === "denied") updateConsent(false);
    else setVisible(true);
  }, []);

  function choose(granted: boolean) {
    try {
      window.localStorage.setItem(CONSENT_KEY, granted ? "granted" : "denied");
    } catch {
      // Ignore — the choice just won't be remembered next visit.
    }
    updateConsent(granted);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[200] bg-(--color-footer-bg) px-5 py-4.5 shadow-[0_-6px_20px_rgba(0,0,0,0.25)]">
      <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-5">
        <p className="m-0 max-w-[60ch] text-[0.9rem] text-(--color-footer-text)">
          Usamos cookies propias y de terceros (incluido Google AdSense) para analizar el
          tráfico y mostrar anuncios personalizados. Puedes aceptar o rechazar su uso. Más
          información en nuestra{" "}
          <a href="/politica-cookies" className="underline">
            política de cookies
          </a>
          .
        </p>
        <div className="flex flex-wrap gap-2.5">
          <button
            type="button"
            onClick={() => choose(false)}
            className="rounded-full border border-white/30 px-4.5 py-2.5 text-[0.88rem] font-bold text-(--color-footer-text)"
          >
            Rechazar
          </button>
          <button
            type="button"
            onClick={() => choose(true)}
            className="rounded-full bg-(--color-primary) px-4.5 py-2.5 text-[0.88rem] font-bold text-white"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
