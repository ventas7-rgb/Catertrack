// Junta los productos de todas las categorías. Cada categoría vive en su
// propio archivo (más fácil de editar/revisar cuando cada uno tenga miles de
// productos) y este archivo es el único lugar que necesita conocer los 11
// archivos.
import { productos as trenDeRodaje } from './tren-de-rodaje.js';
import { productos as repuestosMotor } from './repuestos-motor.js';
import { productos as herramientasDeCorte } from './herramientas-de-corte.js';
import { productos as inyeccion } from './inyeccion.js';
import { productos as trenDeFuerza } from './tren-de-fuerza.js';
import { productos as partesHidraulicas } from './partes-hidraulicas.js';
import { productos as ajuste } from './ajuste.js';
import { productos as lubricantes } from './lubricantes.js';
import { productos as monitores } from './monitores.js';
import { productos as llantas } from './llantas.js';
import { productos as miscelaneos } from './miscelaneos.js';

// Mapa slug de categoría -> productos de esa categoría. Las páginas de
// categoría y subcategoría usan esto para leer solo los productos que
// necesitan en vez de cargar y filtrar el catálogo completo — con el
// catálogo creciendo a miles de referencias, filtrar 25.000 productos en
// cada una de las 11 páginas de categoría sería mucho trabajo de más para
// encontrar los ~2.000 que le corresponden a cada una.
export const productosPorCategoria = {
  'tren-de-rodaje': trenDeRodaje,
  'repuestos-motor': repuestosMotor,
  'herramientas-de-corte': herramientasDeCorte,
  inyeccion: inyeccion,
  'tren-de-fuerza': trenDeFuerza,
  'partes-hidraulicas': partesHidraulicas,
  ajuste: ajuste,
  lubricantes: lubricantes,
  monitores: monitores,
  llantas: llantas,
  miscelaneos: miscelaneos,
};

// Catálogo completo (todas las categorías juntas). Lo siguen necesitando
// scripts/gen-sitemap.mjs (para listar todas las URLs de producto) y la
// página de detalle [slug].astro (que debe poder encontrar un producto sin
// importar de qué categoría es).
export const productos = [
  ...trenDeRodaje,
  ...repuestosMotor,
  ...herramientasDeCorte,
  ...inyeccion,
  ...trenDeFuerza,
  ...partesHidraulicas,
  ...ajuste,
  ...lubricantes,
  ...monitores,
  ...llantas,
  ...miscelaneos,
];
