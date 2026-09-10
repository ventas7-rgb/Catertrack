// Astro's `import.meta.env.BASE_URL` does NOT include a trailing slash
// unless you add one to `base` in astro.config.mjs. Every page in this
// project was concatenating `${base}${slug}` directly, which produced
// broken URLs like "/products.catertrackajuste" (missing the "/").
// Normalizing it once, here, fixes every link in the catalog at once.
export const base = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

export const landingBase = import.meta.env.DEV
  ? 'http://127.0.0.1:5502/index.html'
  : '/';
