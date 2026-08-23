/**
 * Single source of truth for AdSense IDs — components read from here so the
 * publisher ID never gets hardcoded in more than one place (MASTER_SPEC §16).
 * Confirmed real by the site owner; do not invent or change these.
 */
export const ADSENSE_PUBLISHER_ID = "ca-pub-7636138608425147";

export const AD_SLOTS = {
  contentTop: "5560414987",
  contentBottom: "7767826259",
} as const;
