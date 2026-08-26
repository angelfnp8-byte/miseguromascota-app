import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import Script from "next/script";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { CookieBanner } from "@/components/ads/CookieBanner";
import { ADSENSE_PUBLISHER_ID } from "@/lib/adsense";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://miseguromascota-app.vercel.app"),
  title: {
    default: "Mi Seguro Mascota",
    template: "%s | Mi Seguro Mascota",
  },
  description:
    "Comparativas independientes, guías y precios orientativos de seguros para perros y gatos en España.",
  other: {
    "google-adsense-account": ADSENSE_PUBLISHER_ID,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${poppins.variable} ${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        {/* Google Consent Mode v2 — denied by default until the visitor
            chooses in the cookie banner (CookieBanner reads/updates this). */}
        <Script id="consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              analytics_storage: 'denied',
              wait_for_update: 500
            });
            window.gtag = gtag;
          `}
        </Script>
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_PUBLISHER_ID}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <CookieBanner />
      </body>
    </html>
  );
}
