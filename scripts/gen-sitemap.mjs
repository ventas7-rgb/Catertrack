import { writeFileSync } from 'node:fs';
import { categorias, productos } from '../src/data/catalogo.js';

const SITE = 'https://catertracksas.co';
const BASE = '/';

const urls = [`${SITE}/`];

for (const categoria of categorias) {
  urls.push(`${SITE}${BASE}${categoria.slug}/`);
  for (const subcategoria of categoria.subcategorias || []) {
    urls.push(`${SITE}${BASE}${categoria.slug}/${subcategoria.slug}/`);
  }
}

// Antes se filtraba con `if (!producto.publicado) continue;`, pero ningún
// producto de catalogo.js define ese campo, así que el sitemap nunca incluía
// ninguna URL de producto. Se incluyen todos los productos del catálogo.
for (const producto of productos) {
  urls.push(`${SITE}${BASE}${producto.categoria}/${producto.subcategoria}/${producto.slug}/`);
}

const today = new Date().toISOString().slice(0, 10);

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
  .map(
    (loc) =>
      `  <url><loc>${loc}</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq></url>`
  )
  .join('\n')}\n</urlset>\n`;

// Se escribe dentro de public/ (no en la raíz del repo) para que Astro lo
// copie tal cual a dist/ en cada build — antes escribía en la raíz del repo,
// un archivo que Astro nunca copia a dist/, así que el sitemap.xml publicado
// quedaba siempre congelado en la versión generada manualmente la última vez.
writeFileSync(new URL('../public/sitemap.xml', import.meta.url), xml);
console.log(`sitemap.xml generado con ${urls.length} URLs`);
