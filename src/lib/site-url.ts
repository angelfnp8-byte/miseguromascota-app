import { headers } from "next/headers";

/** Base URL for building absolute links (emails, redirects). */
export async function siteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit;
  const headerList = await headers();
  const host = headerList.get("host") ?? undefined;
  return host ? `https://${host}` : "http://localhost:3000";
}
