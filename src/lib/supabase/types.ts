/**
 * Hand-written subset of the Supabase schema used so far. Once the Supabase
 * CLI is set up, replace this with `supabase gen types typescript` output so
 * it always matches the real schema exactly.
 */

export type AnimalType = "perro" | "gato" | "pajaro" | "conejo" | "roedor" | "reptil" | "otro";
export type AgeUnit = "meses" | "anos";
export type Gender = "macho" | "hembra" | "desconocido";
export type BreedType = "definida" | "cruce";
export type VaccinationStatus = "vacunado" | "no_vacunado" | "desconocido";
export type AnimalStatus = "available" | "adopted";

export type Insurer = {
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
}

export type Profile = {
  id: string;
  display_name: string | null;
  is_admin: boolean;
  bio: string | null;
  location_city: string | null;
  location_region: string | null;
  is_shelter: boolean;
  created_at: string;
}

export type Animal = {
  id: string;
  owner_user_id: string;
  type: AnimalType;
  name: string;
  age_value: number;
  age_unit: AgeUnit;
  gender: Gender;
  breed_type: BreedType;
  breed: string | null;
  mixed_breeds: string | null;
  location_city: string;
  location_region: string;
  vaccinated: VaccinationStatus;
  description: string;
  contact_phone: string;
  contact_email: string;
  status: AnimalStatus;
  temperament: string[];
  adopted_at: string | null;
  created_at: string;
  updated_at: string;
}

export type AnimalPhoto = {
  id: string;
  animal_id: string;
  storage_path: string;
  position: number;
  created_at: string;
}

export type AnimalWithPhotos = Animal & { animal_photos: AnimalPhoto[] };

export type ConversationStatus = "active" | "archived";

export type Conversation = {
  id: string;
  animal_id: string;
  owner_user_id: string;
  interested_user_id: string;
  status: ConversationStatus;
  interested_contact_phone: string | null;
  interested_contact_email: string | null;
  created_at: string;
  updated_at: string;
};

export type Message = {
  id: string;
  conversation_id: string;
  sender_id: string;
  content: string;
  created_at: string;
  read_at: string | null;
};

export type Database = {
  public: {
    Tables: {
      insurers: {
        Row: Insurer;
        Insert: Partial<Insurer> & {
          name: string;
          website_url: string;
          species: string[];
          coverages: string[];
          description: string;
        };
        Update: Partial<Insurer>;
        Relationships: [];
      };
      profiles: {
        Row: Profile;
        Insert: { id: string; display_name?: string | null };
        Update: Partial<
          Pick<Profile, "display_name" | "bio" | "location_city" | "location_region" | "is_shelter">
        >;
        Relationships: [];
      };
      animals: {
        Row: Animal;
        Insert: Omit<
          Animal,
          "id" | "created_at" | "updated_at" | "status" | "temperament" | "adopted_at"
        > & {
          status?: AnimalStatus;
          temperament?: string[];
          adopted_at?: string | null;
        };
        Update: Partial<Omit<Animal, "id" | "owner_user_id" | "created_at" | "updated_at">>;
        Relationships: [];
      };
      animal_photos: {
        Row: AnimalPhoto;
        Insert: {
          animal_id: string;
          storage_path: string;
          position?: number;
        };
        Update: Partial<Omit<AnimalPhoto, "id" | "animal_id" | "created_at">>;
        Relationships: [
          {
            foreignKeyName: "animal_photos_animal_id_fkey";
            columns: ["animal_id"];
            isOneToOne: false;
            referencedRelation: "animals";
            referencedColumns: ["id"];
          },
        ];
      };
      conversations: {
        Row: Conversation;
        Insert: {
          animal_id: string;
          owner_user_id: string;
          interested_user_id: string;
          status?: ConversationStatus;
          interested_contact_phone?: string | null;
          interested_contact_email?: string | null;
        };
        Update: Partial<
          Pick<Conversation, "status" | "interested_contact_phone" | "interested_contact_email">
        >;
        Relationships: [];
      };
      messages: {
        Row: Message;
        Insert: {
          conversation_id: string;
          sender_id: string;
          content: string;
        };
        Update: Partial<Pick<Message, "read_at">>;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
