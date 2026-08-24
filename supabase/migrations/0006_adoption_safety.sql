-- Adopción segura: rasgos de personalidad para el cuestionario de
-- compatibilidad, y datos de contacto de quien se interesa en un anuncio
-- (los del propietario ya existían en animals.contact_phone/contact_email,
-- públicos a propósito, pero nunca se mostraban en el frontend).

alter table public.animals
  add column if not exists temperament text[] not null default '{}';

alter table public.animals
  drop constraint if exists animals_temperament_valid;
alter table public.animals
  add constraint animals_temperament_valid
  check (
    temperament <@ array[
      'carinoso','tranquilo','independiente','timido','protector',
      'muy_activo','actividad_moderada','poco_activo',
      'sociable_perros','no_sociable_perros',
      'sociable_gatos','no_sociable_gatos',
      'sociable_ninos','no_sociable_ninos',
      'apto_primerizos','necesita_experiencia'
    ]::text[]
  );

-- No se guarda en `profiles` (su policy de select es pública para cualquiera,
-- ver 0002_profiles.sql) — se guarda en `conversations`, cuya RLS ya
-- restringe select/update a los dos participantes de esa conversación.
alter table public.conversations
  add column if not exists interested_contact_phone text,
  add column if not exists interested_contact_email text;
