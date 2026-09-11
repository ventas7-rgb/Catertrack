import { defineConfig } from 'astro/config';

// Todo el sitio (landing page + catálogo) vive en un solo dominio y un solo
export default defineConfig({
  site: 'https://catertracksas.co',
  base: '/',
  server: {
    host: true,
  },
});
