-- Fase 3: adopción de mascotas.

create table if not exists public.animals (
  id uuid primary key default gen_random_uuid(),
  owner_user_id uuid not null references auth.users(id) on delete cascade,
  type text not null check (type in ('perro','gato','pajaro','conejo','roedor','reptil','otro')),
  name text not null,
  age_value integer not null check (age_value >= 0),
  age_unit text not null check (age_unit in ('meses','anos')),
  gender text not null check (gender in ('macho','hembra','desconocido')),
  breed_type text not null check (breed_type in ('definida','cruce')),
  breed text,
  mixed_breeds text,
  location_city text not null,
  location_region text not null,
  vaccinated text not null check (vaccinated in ('vacunado','no_vacunado','desconocido')),
  description text not null,
  contact_phone text not null,
  contact_email text not null,
  status text not null default 'available' check (status in ('available','adopted')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists animals_owner_idx on public.animals(owner_user_id);
create index if not exists animals_status_idx on public.animals(status);
create index if not exists animals_type_idx on public.animals(type);

alter table public.animals enable row level security;

drop policy if exists "animals are publicly readable" on public.animals;
create policy "animals are publicly readable"
  on public.animals for select
  to anon, authenticated
  using (true);

drop policy if exists "owners can insert their own animals" on public.animals;
create policy "owners can insert their own animals"
  on public.animals for insert
  to authenticated
  with check (auth.uid() = owner_user_id);

drop policy if exists "owners can update their own animals" on public.animals;
create policy "owners can update their own animals"
  on public.animals for update
  to authenticated
  using (auth.uid() = owner_user_id)
  with check (auth.uid() = owner_user_id);

drop policy if exists "owners can delete their own animals" on public.animals;
create policy "owners can delete their own animals"
  on public.animals for delete
  to authenticated
  using (auth.uid() = owner_user_id);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists animals_set_updated_at on public.animals;
create trigger animals_set_updated_at
  before update on public.animals
  for each row execute function public.set_updated_at();

-- ---------- Fotos ----------

create table if not exists public.animal_photos (
  id uuid primary key default gen_random_uuid(),
  animal_id uuid not null references public.animals(id) on delete cascade,
  storage_path text not null,
  position integer not null default 0,
  created_at timestamptz not null default now()
);

create index if not exists animal_photos_animal_idx on public.animal_photos(animal_id);

alter table public.animal_photos enable row level security;

drop policy if exists "animal photos are publicly readable" on public.animal_photos;
create policy "animal photos are publicly readable"
  on public.animal_photos for select
  to anon, authenticated
  using (true);

drop policy if exists "owners can insert photos for their own animals" on public.animal_photos;
create policy "owners can insert photos for their own animals"
  on public.animal_photos for insert
  to authenticated
  with check (
    exists (
      select 1 from public.animals a
      where a.id = animal_id and a.owner_user_id = auth.uid()
    )
  );

drop policy if exists "owners can delete photos of their own animals" on public.animal_photos;
create policy "owners can delete photos of their own animals"
  on public.animal_photos for delete
  to authenticated
  using (
    exists (
      select 1 from public.animals a
      where a.id = animal_id and a.owner_user_id = auth.uid()
    )
  );

-- ---------- Storage: bucket público para las fotos ----------
-- Ruta de cada archivo: {user_id}/{animal_id}/{filename}, para poder
-- restringir la escritura a la carpeta del propio usuario con RLS.

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('animal-photos', 'animal-photos', true, 5242880, array['image/jpeg','image/png','image/webp'])
on conflict (id) do nothing;

drop policy if exists "animal photos bucket is publicly readable" on storage.objects;
create policy "animal photos bucket is publicly readable"
  on storage.objects for select
  to anon, authenticated
  using (bucket_id = 'animal-photos');

drop policy if exists "users can upload to their own folder" on storage.objects;
create policy "users can upload to their own folder"
  on storage.objects for insert
  to authenticated
  with check (
    bucket_id = 'animal-photos'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

drop policy if exists "users can delete from their own folder" on storage.objects;
create policy "users can delete from their own folder"
  on storage.objects for delete
  to authenticated
  using (
    bucket_id = 'animal-photos'
    and (storage.foldername(name))[1] = auth.uid()::text
  );
