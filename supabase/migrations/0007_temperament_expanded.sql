-- Amplía la taxonomía de rasgos de personalidad (de 16 a 31 etiquetas, más
-- grupos: adiestramiento, comportamiento en casa, vida diaria). Aditivo: los
-- valores ya guardados siguen siendo válidos, solo se permiten más.

alter table public.animals
  drop constraint if exists animals_temperament_valid;
alter table public.animals
  add constraint animals_temperament_valid
  check (
    temperament <@ array[
      'carinoso','tranquilo','independiente','timido','protector','jugueton','testarudo',
      'muy_activo','actividad_moderada','poco_activo',
      'sociable_perros','no_sociable_perros',
      'sociable_gatos','no_sociable_gatos',
      'sociable_ninos','no_sociable_ninos',
      'sociable_desconocidos','reservado_desconocidos',
      'obediente','aprende_rapido','necesita_entrenamiento','sin_adiestrar',
      'tranquilo_en_casa','vocal','no_destructivo','se_puede_quedar_solo',
      'apto_piso_pequeno','necesita_espacio_exterior','va_bien_con_correa',
      'apto_primerizos','necesita_experiencia'
    ]::text[]
  );
