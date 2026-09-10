import { writeFileSync } from 'node:fs';
import { categorias, productos } from '../src/data/catalogo.js';

const SITE = 'https://catertracksas.co';
const BASE = '/';

const urls = [`${SITE}/`];

for (const categoria of categorias) {
  urls.push(`${SITE}${BASE}${categoria.slug}/`);
}

for (const producto of productos) {
  if (!producto.publicado) continue;
  urls.push(`${SITE}${BASE}${producto.categoria}/${producto.subcategoria}/${producto.slug}/`);
}

const today = new Date().toISOString().slice(0, 10);

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
  .map(
    (loc) =>
      `  <url><loc>${loc}</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq></url>`
  )
  .join('\n')}\n</urlset>\n`;

writeFileSync(new URL('../sitemap.xml', import.meta.url), xml);
console.log(`sitemap.xml generado con ${urls.length} URLs`);
