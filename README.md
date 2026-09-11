# CaterTrack

Un solo proyecto [Astro](https://astro.build) y un solo dominio (`catertracksas.co`) para todo el sitio de CaterTrack. Ya no hay landing y catálogo como dos proyectos separados: **todo vive dentro de este repositorio y se construye con un único `npm run build`.**

- **Landing page** (`public/index.html`, `public/css/`, `public/js/`, `public/assets/`): Inicio, Novedades, Sucursales, Distribuciones, Nosotros, Contacto. HTML5 semántico, Bootstrap 5, AOS, JavaScript ES6.
- **Repuestos / catálogo** (`src/`): páginas de categoría, subcategoría y producto generadas por Astro a partir de `src/data/catalogo.js` (ver `GUIA-PRODUCTOS-MANUALES.md` para cómo agregar productos). Se publican en la **raíz del mismo dominio** (`catertracksas.co/tren-de-rodaje/`, `catertracksas.co/ajuste/`, etc.).

Todo lo que está dentro de `public/` (landing, CSS, JS, imágenes, `robots.txt`, `sitemap.xml`, `CNAME`, el archivo de verificación de Google) es copiado tal cual a `dist/` en cada build — es la convención estándar de Astro para archivos estáticos. Por eso ya no hace falta ni un paso manual de "combinar" landing y catálogo: el build de Astro produce el sitio completo en `dist/`.

Los botones "Buscar repuesto" de la landing page enlazan directamente a las rutas del catálogo.

## Desarrollo

```bash
npm install
npm run dev      # desarrollo local (http://localhost:4321) — sirve la landing Y el catálogo
npm run build    # genera el sitio completo (landing + catálogo) en dist/
npm run preview  # previsualiza el build de producción
```

Para agregar o editar productos y categorías, edita `src/data/catalogo.js` (ver `GUIA-PRODUCTOS-MANUALES.md`). Después de agregar productos, regenera `sitemap.xml` con:

```bash
npm run sitemap
```

Para editar la landing page, edita directamente los archivos dentro de `public/` (`index.html`, `css/`, `js/`, `assets/`).

## Cómo publicar

`npm run build` genera en `dist/` el sitio completo y autosuficiente: la landing, el catálogo y todos los archivos estáticos (`robots.txt`, `sitemap.xml`, `CNAME`, etc.). Basta con subir el contenido de `dist/` a donde se sirva el dominio — no hay ningún paso adicional de copiar o combinar carpetas.

### GitHub Pages

El repositorio incluye `.github/workflows/deploy-pages.yml`. Cada push a `main` corre `astro build` (landing + catálogo juntos) y publica el contenido de `dist/` en GitHub Pages.

En GitHub, configura **Settings > Pages > Source** como **GitHub Actions**. No uses `Deploy from a branch`, porque esa opción no ejecuta el build de Astro.

El dominio personalizado (`catertracksas.co`) y la verificación de Google Search Console se mantienen porque sus archivos (`CNAME`, `google93fd54e4acf4bc40.html`) viven dentro de `public/` y por lo tanto se publican en cada build junto con el resto del sitio.
