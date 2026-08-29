-- Fase 10: perfiles públicos para quien publica anuncios de adopción.
-- Reutiliza las policies de "profiles" ya existentes (lectura pública,
-- actualización solo de la propia fila) — no hace falta tocar RLS.

alter table public.profiles
  add column if not exists bio text,
  add column if not exists location_city text,
  add column if not exists location_region text,
  add column if not exists is_shelter boolean not null default false;
