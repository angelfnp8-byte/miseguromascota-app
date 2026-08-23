-- Fase 4: chat entre el propietario de un anuncio de adopción y la persona
-- interesada. Acceso restringido en la propia base de datos (RLS) a los
-- dos participantes de cada conversación — nadie más puede leerla ni
-- escribir en ella, con independencia de lo que haga el frontend.

create table if not exists public.conversations (
  id uuid primary key default gen_random_uuid(),
  animal_id uuid not null references public.animals(id) on delete cascade,
  -- Referencia a profiles (no directamente a auth.users) para poder pedirle
  -- a PostgREST que incruste el nombre del otro participante en una sola
  -- consulta (profiles.id ya tiene su propia FK a auth.users).
  owner_user_id uuid not null references public.profiles(id) on delete cascade,
  interested_user_id uuid not null references public.profiles(id) on delete cascade,
  status text not null default 'active' check (status in ('active','archived')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint conversations_not_with_self check (owner_user_id <> interested_user_id),
  constraint conversations_unique_thread unique (animal_id, interested_user_id)
);

create index if not exists conversations_owner_idx on public.conversations(owner_user_id);
create index if not exists conversations_interested_idx on public.conversations(interested_user_id);

alter table public.conversations enable row level security;

drop policy if exists "participants can read their conversations" on public.conversations;
create policy "participants can read their conversations"
  on public.conversations for select
  to authenticated
  using (auth.uid() = owner_user_id or auth.uid() = interested_user_id);

drop policy if exists "interested user can start a conversation" on public.conversations;
create policy "interested user can start a conversation"
  on public.conversations for insert
  to authenticated
  with check (
    auth.uid() = interested_user_id
    and owner_user_id = (select a.owner_user_id from public.animals a where a.id = animal_id)
  );

drop policy if exists "participants can update their conversations" on public.conversations;
create policy "participants can update their conversations"
  on public.conversations for update
  to authenticated
  using (auth.uid() = owner_user_id or auth.uid() = interested_user_id)
  with check (auth.uid() = owner_user_id or auth.uid() = interested_user_id);

drop trigger if exists conversations_set_updated_at on public.conversations;
create trigger conversations_set_updated_at
  before update on public.conversations
  for each row execute function public.set_updated_at();

-- ---------- Mensajes ----------

create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  conversation_id uuid not null references public.conversations(id) on delete cascade,
  sender_id uuid not null references auth.users(id) on delete cascade,
  content text not null check (char_length(trim(content)) > 0),
  created_at timestamptz not null default now(),
  read_at timestamptz
);

create index if not exists messages_conversation_idx on public.messages(conversation_id, created_at);

alter table public.messages enable row level security;

drop policy if exists "participants can read messages" on public.messages;
create policy "participants can read messages"
  on public.messages for select
  to authenticated
  using (
    exists (
      select 1 from public.conversations c
      where c.id = conversation_id
        and (auth.uid() = c.owner_user_id or auth.uid() = c.interested_user_id)
    )
  );

drop policy if exists "participants can send messages" on public.messages;
create policy "participants can send messages"
  on public.messages for insert
  to authenticated
  with check (
    auth.uid() = sender_id
    and exists (
      select 1 from public.conversations c
      where c.id = conversation_id
        and (auth.uid() = c.owner_user_id or auth.uid() = c.interested_user_id)
    )
  );

drop policy if exists "recipients can mark messages read" on public.messages;
create policy "recipients can mark messages read"
  on public.messages for update
  to authenticated
  using (
    sender_id <> auth.uid()
    and exists (
      select 1 from public.conversations c
      where c.id = conversation_id
        and (auth.uid() = c.owner_user_id or auth.uid() = c.interested_user_id)
    )
  )
  with check (
    sender_id <> auth.uid()
    and exists (
      select 1 from public.conversations c
      where c.id = conversation_id
        and (auth.uid() = c.owner_user_id or auth.uid() = c.interested_user_id)
    )
  );

-- Bump conversations.updated_at whenever a new message arrives, so the
-- inbox can sort by "most recently active" cheaply.
create or replace function public.touch_conversation_on_message()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  update public.conversations set updated_at = now() where id = new.conversation_id;
  return new;
end;
$$;

drop trigger if exists messages_touch_conversation on public.messages;
create trigger messages_touch_conversation
  after insert on public.messages
  for each row execute function public.touch_conversation_on_message();

-- Habilita Realtime (mensajes en vivo) para esta tabla (idempotente: solo
-- la añade a la publicación si todavía no está).
do $$
begin
  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime'
      and schemaname = 'public'
      and tablename = 'messages'
  ) then
    alter publication supabase_realtime add table public.messages;
  end if;
end $$;
