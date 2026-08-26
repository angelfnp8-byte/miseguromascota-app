import Link from "next/link";
import type { ReactNode } from "react";
import { AdSlot } from "@/components/ads/AdSlot";
import { AD_SLOTS } from "@/lib/adsense";

export function ArticleShell({
  crumb,
  title,
  children,
  maxWidth = "820px",
  showAd = true,
}: {
  crumb: string;
  title: string;
  children: ReactNode;
  maxWidth?: string;
  /** Off for legal/institutional pages — thin, non-editorial content isn't a great ad fit. */
  showAd?: boolean;
}) {
  const crumbSegments = crumb.split(" / ");
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "/" },
      ...crumbSegments.map((name, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name,
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="mx-auto px-5 pt-10 pb-6" style={{ maxWidth }}>
        <p className="mb-1.5 text-[0.85rem] text-(--color-text-light)">
          <Link href="/" className="hover:underline">
            Inicio
          </Link>{" "}
          / {crumb}
        </p>
        <h1>{title}</h1>
        <div className="prose-content mt-4">{children}</div>
      </div>
      {showAd && <AdSlot slot={AD_SLOTS.contentBottom} />}
    </>
  );
}
