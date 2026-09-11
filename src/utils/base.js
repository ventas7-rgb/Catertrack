// Astro's `import.meta.env.BASE_URL` does NOT include a trailing slash
// unless you add one to `base` in astro.config.mjs. Every page in this
// project was concatenating `${base}${slug}` directly, which produced
// broken URLs like "/products.catertrackajuste" (missing the "/").
// Normalizing it once, here, fixes every link in the catalog at once.
export const base = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

// `public/index.html` (la landing page) vive dentro de este mismo proyecto
// Astro, así que tanto en desarrollo (`astro dev`) como en producción se
// sirve en la raíz del sitio. No apuntar nunca a un servidor externo aquí.
export const landingBase = '/';
