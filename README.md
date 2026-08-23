# Mi Seguro Mascota

App real (Next.js + Supabase) para el sitio de guías y comparativas de seguros
para mascotas en España.

## Stack

- **Next.js 16** (App Router, TypeScript, Tailwind v4)
- **Supabase** — Postgres, autenticación y storage
- **Vercel** — despliegue

## Desarrollo local

```bash
npm install
npm run dev
```

Copia `.env.example` a `.env.local` y rellena las claves de Supabase del
proyecto (Project Settings → API en supabase.com).

## Base de datos

Las migraciones SQL viven en `supabase/migrations/`. Ejecútalas en el
**SQL Editor** de Supabase, en orden, la primera vez que conectes un proyecto
nuevo.

## Estado del proyecto

- ✅ Fase 0 — andamiaje, diseño, despliegue
- ✅ Fase 1 — contenido del sitio + comparador de seguros (datos reales, sin
  precios ni reseñas inventados)
- ⏳ Fase 2 — usuarios y autenticación (email + Google)
- ⏳ Fase 3 — adopción de mascotas
- ⏳ Fase 4 — chat entre usuarios
- ⏳ Fase 5 — Google AdSense
- ⏳ Fase 6 — panel de administración + auditoría final
