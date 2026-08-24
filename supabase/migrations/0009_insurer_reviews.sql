-- Precios orientativos y reseñas reales investigadas (fuentes: web oficial de
-- cada aseguradora cuando publica precio estático, o cobertura de prensa
-- reputada citando el precio de lanzamiento de la propia aseguradora cuando
-- no hay precio estático en su web; valoraciones de Trustpilot, generales de
-- la empresa -no específicas del producto de mascotas- comprobadas 24/08/2026).
-- Aseguradoras sin precio/valoración fiable confirmada se dejan sin tocar
-- (NULL), tal como exige el propio MASTER_SPEC: nunca se inventan cifras.

update public.insurers set
  price_from_cents = 250,
  rating = 1.5, rating_count = 2200, rating_source = 'Trustpilot',
  rating_checked_at = current_date,
  review_summary_positive = 'Algunos clientes destacan buenas experiencias en clínicas veterinarias concertadas y una gestión rápida en siniestros concretos.',
  review_summary_negative = 'Quejas frecuentes por denegación de coberturas, atención al cliente lenta y subidas de prima o cancelaciones tras un siniestro.',
  last_updated = current_date
where name = 'Mapfre';

update public.insurers set
  rating = 1.1, rating_count = 1300, rating_source = 'Trustpilot',
  rating_checked_at = current_date,
  review_summary_negative = 'Quejas habituales por gestión lenta de siniestros, atención telefónica poco resolutiva y subidas de prima no avisadas en la renovación.',
  last_updated = current_date
where name = 'AXA';

update public.insurers set
  rating = 1.3, rating_count = 1450, rating_source = 'Trustpilot',
  rating_checked_at = current_date,
  review_summary_negative = 'Quejas recurrentes por dificultad para contactar con atención al cliente y resolución poco eficaz de siniestros.',
  last_updated = current_date
where name = 'Santalucía';

update public.insurers set
  price_from_cents = 333, price_full_cents = 583,
  rating = 2.9, rating_count = 9000, rating_source = 'Trustpilot',
  rating_checked_at = current_date,
  review_summary_positive = 'La contratación online y telefónica es rápida, y los siniestros sencillos se resuelven con agilidad.',
  review_summary_negative = 'Las quejas se concentran en siniestros complejos o disputados, con retrasos y poco acompañamiento percibido.',
  last_updated = current_date
where name = 'Línea Directa';

update public.insurers set
  price_from_cents = 425, price_full_cents = 608,
  rating = 1.5, rating_count = 1800, rating_source = 'Trustpilot',
  rating_checked_at = current_date,
  review_summary_positive = 'Se valora el amplio catálogo de productos, la red de mediadores locales y la solidez financiera del grupo.',
  review_summary_negative = 'Se repiten las quejas sobre gestión de siniestros y atención telefónica, especialmente en renovaciones.',
  last_updated = current_date
where name = 'Allianz';

update public.insurers set
  rating = 1.4, rating_count = 1350, rating_source = 'Trustpilot',
  rating_checked_at = current_date,
  review_summary_negative = 'Quejas frecuentes por lentitud en la gestión de siniestros, subidas de precio en la renovación y dificultad para hablar con el agente asignado.',
  last_updated = current_date
where name = 'Generali';

update public.insurers set
  price_from_cents = 390,
  rating = 2.7, rating_count = 4000, rating_source = 'Trustpilot',
  rating_checked_at = current_date,
  review_summary_positive = 'Algunos clientes valoran una respuesta ágil en determinados siniestros y un trato cercano por teléfono.',
  review_summary_negative = 'Se repiten quejas por retrasos en la resolución de siniestros y dificultades para tramitar bajas.',
  last_updated = current_date
where name = 'Caser';

update public.insurers set
  review_summary_negative = 'Quejas habituales por atención telefónica deficiente y subidas de prima notables en la renovación aunque no haya habido siniestros.',
  last_updated = current_date
where name = 'Verti';

update public.insurers set
  price_from_cents = 2000,
  rating = 4.3, rating_count = 5700, rating_source = 'Trustpilot',
  rating_checked_at = current_date,
  review_summary_positive = 'Los clientes destacan reembolsos rápidos (a veces el mismo día) y una app sencilla para gestionar los partes.',
  review_summary_negative = 'Una minoría reporta siniestros denegados, sensación de permanencia forzosa o precio elevado frente a lo reembolsado.',
  last_updated = current_date
where name = 'Barkibu';

update public.insurers set
  rating = 1.1, rating_count = 1068, rating_source = 'Trustpilot',
  rating_checked_at = current_date,
  review_summary_positive = 'Algunos clientes valoran el trato personal en oficinas físicas y la trayectoria histórica de la compañía.',
  review_summary_negative = 'Quejas extendidas por tiempos de espera largos en la valoración de siniestros y en la atención telefónica.',
  last_updated = current_date
where name = 'Pelayo';

update public.insurers set
  price_from_cents = 990,
  rating = 2.2, rating_count = 1500, rating_source = 'Trustpilot',
  rating_checked_at = current_date,
  review_summary_positive = 'Se valora el servicio directo en su amplia red de clínicas concertadas, sin adelantar dinero ni papeleo de reembolso.',
  review_summary_negative = 'Quejas frecuentes por trámites administrativos lentos y dificultad para contactar con soporte.',
  last_updated = current_date
where name = 'ASISA';

update public.insurers set
  rating = 1.5, rating_count = 56, rating_source = 'Trustpilot',
  rating_checked_at = current_date,
  review_summary_negative = 'Muestra pequeña de opiniones, mayoritariamente negativas por subidas de prima y atención poco resolutiva.',
  last_updated = current_date
where name = 'AMA Seguros';

update public.insurers set
  rating = 1.1, rating_count = 3000, rating_source = 'Trustpilot (perfil general de Adeslas)',
  rating_checked_at = current_date,
  review_summary_positive = 'La app con videoconsulta agiliza gestiones frente al canal telefónico.',
  review_summary_negative = 'La atención telefónica (esperas largas, baja resolución) es la queja dominante.',
  last_updated = current_date
where name = 'SegurCaixa Adeslas (CaixaBank)';

update public.insurers set
  rating = 1.1, rating_count = 470, rating_source = 'Trustpilot',
  rating_checked_at = current_date,
  review_summary_positive = 'Se valora tener un agente asignado para renovaciones y siniestros, y la solidez financiera percibida.',
  review_summary_negative = 'Gestión de siniestros lenta y condiciones de póliza percibidas como confusas.',
  last_updated = current_date
where name = 'Reale Seguros';

update public.insurers set
  price_from_cents = 1690, price_mid_cents = 2690, price_full_cents = 3890,
  last_updated = current_date
where name = 'petolo (Zurich)';

insert into public.insurers (name, website_url, species, coverages, description, rating, rating_source, rating_checked_at)
select 'Milo', 'https://milopet.com/', '{perro}', '{rc,salud_completa}',
  'Correduría de seguros digital especializada en perros (Milo Correduría de Seguros Digital S.L.), con reembolso de hasta el 100% de gastos veterinarios por accidente y enfermedad gestionado desde la app.',
  4.5, 'Trustpilot', current_date
where not exists (select 1 from public.insurers where name = 'Milo');
