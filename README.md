# Portafolio — Daniel Chacon

Portafolio personal de **Daniel Esteban Chacon Diaz**, desarrollador Full-Stack (React, Node.js, Python, SQL/NoSQL) enfocado en IA y automatización.

Single-page en React 19 + Vite, bilingüe (ES/EN) y sin dependencias de UI más allá de `lucide-react`.

## Secciones

- **Hero** con roles animados, CTA y estadísticas calculadas desde los datos.
- **Sobre mí**, idiomas y competencias.
- **Trayectoria**: línea de tiempo de experiencia y formación.
- **Habilidades**: filtro por categoría; al hacer clic en una tecnología muestra en qué experiencia/proyecto se usó y permite saltar a él.
- **Proyectos**: filtro por categoría y caso destacado (DENTI) con diagrama de arquitectura interactivo.
- **Terminal**: consola funcional (`help`, `skills`, `projects`, `goto`, `cv`…) con historial (↑/↓) y autocompletado (Tab).
- **Contacto**: descarga de CV, formulario que abre el cliente de correo y botón para copiar el email.

## Editar el contenido

Todo el contenido está centralizado; no hace falta tocar los componentes:

- [src/data/portfolio.js](src/data/portfolio.js) — perfil, experiencia, formación, habilidades, proyectos y diagrama de DENTI.
- [src/data/ui.js](src/data/ui.js) — textos de interfaz en español e inglés.
- `public/cv-es.pdf` y `public/cv-en.pdf` — hojas de vida descargables.

## Scripts

```bash
npm install
npm run dev      # desarrollo
npm run build    # build de producción en dist/
npm run preview  # servir el build
npm run lint
```
