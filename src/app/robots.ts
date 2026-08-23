import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/aviso-legal", "/politica-privacidad", "/politica-cookies"],
    },
    sitemap: "https://miseguromascota.com/sitemap.xml",
  };
}
