import { defineConfig } from 'astro/config';

// Todo el sitio (landing page + catálogo) vive en un solo dominio y un solo
// repositorio: catertracksas.co, sin subcarpeta/prefijo. El catálogo Astro
// se publica en la raíz, junto a index.html.
export default defineConfig({
  site: 'https://catertracksas.co',
  base: '/',
  server: {
    host: true,
  },
});
