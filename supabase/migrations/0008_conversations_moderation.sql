-- Eliminar/reportar conversaciones + expiración de anuncios adoptados.

drop policy if exists "participants can delete their conversations" on public.conversations;
create policy "participants can delete their conversations"
  on public.conversations for delete
  to authenticated
  using (auth.uid() = owner_user_id or auth.uid() = interested_user_id);

-- Necesaria para que el "on delete cascade" de messages.conversation_id
-- funcione bajo RLS al borrar la conversación.
drop policy if exists "participants can delete messages" on public.messages;
create policy "participants can delete messages"
  on public.messages for delete
  to authenticated
  using (
    exists (
      select 1 from public.conversations c
      where c.id = conversation_id
        and (auth.uid() = c.owner_user_id or auth.uid() = c.interested_user_id)
    )
  );

alter table public.animals
  add column if not exists adopted_at timestamptz;
