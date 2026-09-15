// Antes este archivo era el único lugar con TODO el catálogo (taxonomía +
// productos) junto. Con el catálogo creciendo a ~25.000 productos eso lo
// iba a volver imposible de editar/revisar, así que los datos reales ahora
// viven repartidos así:
//   - src/data/categorias.js            -> taxonomía (categorías/subcategorías)
//   - src/data/productos/<categoria>.js -> productos de cada categoría (uno
//     por categoría, ej. tren-de-rodaje.js, repuestos-motor.js...)
//   - src/data/productos/index.js       -> junta todas las categorías
//
// Este archivo se deja como "puente": cualquier página o script que ya hacía
// `import { categorias, productos } from '../data/catalogo'` sigue
// funcionando exactamente igual, sin tener que saber que ahora hay 12
// archivos distintos detrás.
export { categorias } from './categorias.js';
export { productos, productosPorCategoria } from './productos/index.js';
