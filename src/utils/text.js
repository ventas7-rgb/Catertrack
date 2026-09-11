// Normaliza texto para comparaciones "difusas": todo en minúsculas y sin
// tildes. Se usa tanto aquí (al generar las páginas en el build) como en
// public/js/machine-filter.js (al filtrar en el navegador), para que
// buscar "320" encuentre "CAT 320" sin importar mayúsculas ni acentos.
export const normalizeText = (value) =>
  (value ?? '')
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '');
