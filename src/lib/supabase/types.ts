/**
 * Hand-written subset of the Supabase schema used so far (Fase 1: `insurers`).
 * Once the Supabase CLI is set up, replace this with `supabase gen types typescript`
 * output so it always matches the real schema exactly.
 */
export type Database = {
  public: {
    Tables: {
      insurers: {
        Row: {
          id: string;
          name: string;
          website_url: string;
          affiliate_url: string | null;
          affiliate_enabled: boolean;
          affiliate_provider: string | null;
          tracking_id: string | null;
          species: string[];
          coverages: string[];
          description: string;
          price_from_cents: number | null;
          price_mid_cents: number | null;
          price_full_cents: number | null;
          rating: number | null;
          rating_count: number | null;
          rating_source: string | null;
          rating_checked_at: string | null;
          review_summary_positive: string | null;
          review_summary_negative: string | null;
          last_updated: string;
        };
        Insert: Partial<Database["public"]["Tables"]["insurers"]["Row"]> & {
          name: string;
          website_url: string;
          species: string[];
          coverages: string[];
          description: string;
        };
        Update: Partial<Database["public"]["Tables"]["insurers"]["Row"]>;
      };
    };
  };
};

export type Insurer = Database["public"]["Tables"]["insurers"]["Row"];
