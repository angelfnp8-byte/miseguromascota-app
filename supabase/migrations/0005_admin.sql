-- Fase 6: panel de administración.

alter table public.profiles add column if not exists is_admin boolean not null default false;

-- La policy de update existente de profiles ("users can update their own
-- profile") permite a cualquier usuario modificar su propia fila, y RLS por
-- sí solo no puede impedir que cambie una columna concreta (is_admin) sin
-- tocar el resto. Este trigger cierra esa vía: nadie puede cambiar su propio
-- is_admin a través de la API pública, solo con la service_role key (o
-- directamente por SQL en el panel de Supabase).
create or replace function public.protect_is_admin()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if new.is_admin is distinct from old.is_admin and auth.role() <> 'service_role' then
    new.is_admin := old.is_admin;
  end if;
  return new;
end;
$$;

drop trigger if exists profiles_protect_is_admin on public.profiles;
create trigger profiles_protect_is_admin
  before update on public.profiles
  for each row execute function public.protect_is_admin();

-- Los administradores pueden gestionar cualquier aseguradora.
drop policy if exists "admins can update insurers" on public.insurers;
create policy "admins can update insurers"
  on public.insurers for update
  to authenticated
  using (exists (select 1 from public.profiles p where p.id = auth.uid() and p.is_admin))
  with check (exists (select 1 from public.profiles p where p.id = auth.uid() and p.is_admin));

-- Los administradores pueden moderar (eliminar) cualquier anuncio de
-- adopción, no solo los suyos.
drop policy if exists "admins can delete any animal" on public.animals;
create policy "admins can delete any animal"
  on public.animals for delete
  to authenticated
  using (exists (select 1 from public.profiles p where p.id = auth.uid() and p.is_admin));

drop policy if exists "admins can update any animal" on public.animals;
create policy "admins can update any animal"
  on public.animals for update
  to authenticated
  using (exists (select 1 from public.profiles p where p.id = auth.uid() and p.is_admin))
  with check (exists (select 1 from public.profiles p where p.id = auth.uid() and p.is_admin));

-- Repunta animals.owner_user_id a profiles (en vez de auth.users
-- directamente), igual que se hizo con conversations en la Fase 4, para
-- poder incrustar el nombre del propietario en el panel de admin con una
-- sola consulta. No cambia ningún dato: profiles.id ya es el mismo uuid
-- que auth.users.id.
alter table public.animals drop constraint if exists animals_owner_user_id_fkey;
alter table public.animals
  add constraint animals_owner_user_id_fkey
  foreign key (owner_user_id) references public.profiles(id) on delete cascade;
