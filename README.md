# Portafolio profesional

Base inicial para el portafolio de Emma Victoria Padilla Jaramillo. Esta etapa contiene la arquitectura funcional de una landing page de una sola página; el diseño visual se desarrollará posteriormente.

## Tecnologías

- React y TypeScript en modo estricto.
- Vite.
- Tailwind CSS.
- ESLint y Prettier.

## Estructura

- `src/assets`: imágenes, íconos, documentos y otros archivos estáticos.
- `src/components/common`: componentes reutilizables generales.
- `src/components/cards`: tarjetas reutilizables para datos.
- `src/components/layout`: encabezado, navegación, menú móvil y pie de página.
- `src/data`: contenido editable separado de los componentes.
- `src/hooks`: lógica reutilizable de React.
- `src/sections`: secciones principales de la landing page.
- `src/styles`: estilos globales y configuración visual general.
- `src/types`: interfaces y tipos compartidos.
- `src/utils`: constantes y funciones auxiliares.

## Instalación y ejecución

```bash
npm install
npm run dev
```

Para compilar producción:

```bash
npm run build
```

Para revisar formato y lint:

```bash
npm run format
npm run lint
```

## Dónde agregar contenido

- Datos personales: `src/data/personal.ts`.
- Proyectos: `src/data/projects.ts`, siguiendo la interfaz `Project`.
- Certificados: `src/data/certificates.ts`.
- Imágenes e íconos: `src/assets/images` y `src/assets/icons`.
- Hoja de vida: `src/assets/documents`.

## Próximas etapas

1. Definir la identidad visual y el sistema responsive.
2. Conectar los datos con las tarjetas y secciones.
3. Completar navegación, accesibilidad y estados interactivos.
4. Añadir pruebas y revisar el rendimiento antes de publicar.
