-- Fase 1: tabla de aseguradoras para el comparador.
-- Lectura pública (comparador, fichas). Escritura solo vía service_role
-- (seed / futuro panel admin) — no hay policies de insert/update/delete
-- para "anon"/"authenticated", así que quedan bloqueadas por defecto.

create table if not exists public.insurers (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  website_url text not null,
  affiliate_url text,
  affiliate_enabled boolean not null default false,
  affiliate_provider text,
  tracking_id text,
  species text[] not null default '{}',
  coverages text[] not null default '{}',
  description text not null,
  price_from_cents integer,
  price_mid_cents integer,
  price_full_cents integer,
  rating numeric(2,1),
  rating_count integer,
  rating_source text,
  rating_checked_at date,
  review_summary_positive text,
  review_summary_negative text,
  last_updated date not null default current_date
);

alter table public.insurers enable row level security;

create policy "insurers are publicly readable"
  on public.insurers for select
  to anon, authenticated
  using (true);

-- Datos reales tomados del comparador ya publicado (sitio original del
-- usuario, agosto 2026). Sin precios ni reseñas: no existen datos verificados
-- todavía (ver MASTER_SPEC.md secciones 11-12 — prohibido inventarlos).
insert into public.insurers (name, website_url, species, coverages, description) values
  ('Mapfre', 'https://calcula.mapfre.es/precio-seguro-mascotas/', '{perro,gato}', '{rc,salud_basica}', 'Aseguradora generalista con responsabilidad civil y servicios de asistencia veterinaria para perros y gatos.'),
  ('AXA', 'https://www.axa.es/en/seguros-para-mascotas', '{perro,gato}', '{rc,salud_basica,salud_completa}', 'Seguro veterinario con consultas, cirugía y hospitalización, además de responsabilidad civil, para perros y gatos.'),
  ('Santalucía', 'https://www.santalucia.es/seguros-mascotas', '{perro,gato}', '{rc,salud_basica}', 'Responsabilidad civil, cobertura de accidentes y asistencia veterinaria de urgencia para perros y gatos.'),
  ('Línea Directa', 'https://www.lineadirecta.com/seguro-mascotas/', '{perro,gato}', '{salud_basica,salud_completa}', 'Dos modalidades (Esencial y Completo) con cobertura veterinaria por accidente y enfermedad para perros y gatos.'),
  ('Allianz', 'https://www.allianz.es/seguro-perros-responsabilidad-civil.html', '{perro}', '{rc}', 'Seguro de responsabilidad civil obligatoria para perros, con opciones adicionales de asistencia.'),
  ('Generali', 'https://www.generali.es/seguros-particulares/mascotas', '{perro,gato}', '{salud_completa}', 'Modelo de reembolso de gastos veterinarios por accidente y enfermedad para perros y gatos.'),
  ('Caser', 'https://www.caser.es/seguros-de-mascotas', '{perro,gato}', '{rc,salud_completa}', 'Incluye responsabilidad civil y, en su modalidad superior, cobertura veterinaria sin límite máximo de gasto.'),
  ('Verti', 'https://www.verti.es/seguros/seguros-perro/', '{perro}', '{rc,salud_basica}', 'Seguro online centrado en perros, con responsabilidad civil y asistencia veterinaria.'),
  ('Barkibu', 'https://www.barkibu.com/es/', '{perro,gato}', '{salud_completa}', 'Insurtech especializada en salud de mascotas, con cobertura veterinaria amplia para perros y gatos.'),
  ('Pelayo', 'https://www.pelayo.com/otros-seguros/animales-domesticos', '{perro,gato}', '{rc,salud_basica,salud_completa}', 'Varias modalidades: responsabilidad civil y salud veterinaria (Mascota Vital) para perros y gatos.'),
  ('ASISA', 'https://www.asisa.es/seguro-para-animales/seguro-para-mascotas', '{perro,gato}', '{rc,salud_basica}', 'Aseguradora sanitaria que ofrece responsabilidad civil y cobertura veterinaria para perros y gatos.'),
  ('AMA Seguros', 'https://www.amaseguros.com/seguros-particulares/mascotas', '{perro,gato}', '{rc,salud_basica}', 'Mutua aseguradora con seguro de mascotas que incluye responsabilidad civil y servicios de asistencia.'),
  ('SegurCaixa Adeslas (CaixaBank)', 'https://www.caixabank.es/particular/seguros/seguro-perro-gato-segurcaixa-mascotas.html', '{perro,gato}', '{rc,salud_basica}', 'Seguro diseñado por SegurCaixa Adeslas y comercializado por CaixaBank, con responsabilidad civil y cobertura veterinaria.'),
  ('Reale Seguros', 'https://www.reale.es/es/seguro-de-mascotas', '{perro,gato}', '{salud_basica,salud_completa}', 'Seguro de salud veterinaria para perros y gatos de Reale Seguros.'),
  ('petolo (Zurich)', 'https://www.petolo.es/', '{perro,gato}', '{salud_completa}', 'Seguro veterinario digital respaldado por Zurich, con reembolso rápido y libre elección de clínica veterinaria.');
