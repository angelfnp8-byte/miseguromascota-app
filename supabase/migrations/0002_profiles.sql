-- Fase 2: perfiles de usuario vinculados a auth.users.
-- Lectura pública (se necesitará para mostrar el nombre del propietario en
-- anuncios de adopción más adelante). Solo el propio usuario puede editar
-- su fila. La fila se crea automáticamente al registrarse (trigger).

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "profiles are publicly readable"
  on public.profiles for select
  to anon, authenticated
  using (true);

create policy "users can update their own profile"
  on public.profiles for update
  to authenticated
  using (auth.uid() = id)
  with check (auth.uid() = id);

-- Crea automáticamente la fila de perfil cuando se registra un usuario nuevo,
-- usando el nombre indicado en el formulario de registro si existe, o la
-- parte local del email como valor por defecto.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, display_name)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'display_name', split_part(new.email, '@', 1))
  );
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
