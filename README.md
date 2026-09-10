# CaterTrack

Un solo repositorio y un solo dominio (`catertracksas.co`) para todo el sitio de CaterTrack:

- **Landing page** (`index.html`, `css/`, `js/`, `assets/`): Inicio, Novedades, Sucursales, Distribuciones, Nosotros, Contacto. HTML5 semántico, Bootstrap 5, AOS, JavaScript ES6. Se abre directamente o se sirve con cualquier servidor estático.
- **Repuestos / catálogo** (`src/`): páginas de categoría, subcategoría y producto generadas con [Astro](https://astro.build) a partir de `src/data/catalogo.js`. Se publican en la **raíz del mismo dominio** (`catertracksas.co/tren-de-rodaje/`, `catertracksas.co/ajuste/`, etc. — sin subcarpeta ni prefijo), para que sea un solo sitio, no dos proyectos distintos.

Los botones "Buscar repuesto" de la landing page enlazan directamente a esas rutas.

## Desarrollo del catálogo

```bash
npm install
npm run dev      # desarrollo local (http://localhost:4321)
npm run build    # genera las páginas de categoría/producto en dist/
npm run preview  # previsualiza el build de producción
```

Para agregar o editar productos y categorías, edita `src/data/catalogo.js`. Después de agregar productos, regenera `sitemap.xml` con:

```bash
npm run sitemap
```

## Cómo publicar (un solo sitio)

1. Corre `npm run build`. Esto genera en `dist/` las carpetas de categoría (`ajuste/`, `tren-de-rodaje/`, etc.), `css/catalog.css` y las imágenes que usa el catálogo. **No genera ningún `index.html`** — ese archivo es el de la raíz del repositorio (tu landing page) y no se toca.
2. Sube al servidor: todos los archivos de la raíz del repositorio (`index.html`, `css/`, `js/`, `assets/`, `robots.txt`, `sitemap.xml`, `CNAME`, etc.) **más** el contenido de `dist/`, todo dentro de la misma carpeta raíz del dominio. No hay conflictos de nombres entre ambos.

### GitHub Pages

El repositorio incluye `.github/workflows/deploy-pages.yml`. Cada push a `main` construye el catálogo y combina su contenido con la landing estática en un único artefacto para GitHub Pages.

En GitHub, configura **Settings > Pages > Source** como **GitHub Actions**. No uses `Deploy from a branch`, porque esa opción no ejecuta el build de Astro ni copia el contenido de `dist/` a la raíz publicada.

## Landing page

Abrir `index.html` en un navegador o servir la carpeta con un servidor estático.
