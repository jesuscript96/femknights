# FemKnights — thonik-style landing

Landing page inspirada en [thonik.nl/about](https://thonik.nl/about), construida con **Next.js (App Router)** + React + TypeScript y CSS propio.

## Destacado

- Clon fiel de la landing: hero, secciones de expresión, cita, servicios (`online / offline / on-site`) con la diana que crece, y "Based in Amsterdam".
- Secciones extra: clientes, proceso y contacto.
- **Menú diana sticky**: badge flotante que se despliega en un menú radial de anillos-enlace, con animación de apertura y efecto hover tipo acordeón (solo crece la sección activa, sin solapes).

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build de producción

```bash
npm run build
npm run start
```

## Deploy en Vercel

El proyecto es un app estándar de Next.js: importa el repo en Vercel y se despliega sin configuración adicional (framework detectado automáticamente).
