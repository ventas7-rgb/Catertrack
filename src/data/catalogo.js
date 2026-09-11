export const categorias = [
  {
    slug: 'tren-de-rodaje',
    nombre: 'Tren de rodaje',
    subcategorias: [
      { slug: 'cadena', nombre: 'Cadenas' },
      { slug: 'oruga', nombre: 'Orugas de goma' },
      { slug: 'tejas', nombre: 'Tejas' },
      { slug: 'rodillo-inferior', nombre: 'Rodillos inferiores' },
      { slug: 'rodillo-superior', nombre: 'Rodillos superiores' },
      { slug: 'ruedas-guias', nombre: 'Ruedas guías' },
      { slug: 'sprocket', nombre: 'Sprockets' },
      { slug: 'tensor', nombre: 'Resorte tensor' }
    ],
  },
  {
    slug: 'repuestos-motor',
    nombre: 'Partes de motor',
    subcategorias: [
      { slug: 'culata', nombre: 'Culata' },
      { slug: 'valvulas', nombre: 'Válvulas' },
      { slug: 'pistones', nombre: 'Pistones' },
    ],
  },
  {
    slug: 'herramientas-de-corte',
    nombre: 'Herramientas de corte',
    subcategorias: [
      { slug: 'cuchillas', nombre: 'Cuchillas' },
      { slug: 'puntas', nombre: 'Puntas' },
    ],
  },
  {
    slug: 'inyeccion',
    nombre: 'Inyección',
    subcategorias: [
      { slug: 'inyectores', nombre: 'Inyectores' },
      { slug: 'bombas', nombre: 'Bombas' },
      { slug: 'filtros', nombre: 'Filtros' },
    ],
  },
  {
    slug: 'tren-de-fuerza',
    nombre: 'Tren de fuerza',
    subcategorias: [
      { slug: 'embragues', nombre: 'Embragues' },
      { slug: 'transmisiones', nombre: 'Transmisiones' },
    ],
  },
  {
    slug: 'partes-hidraulicas',
    nombre: 'Partes Hidráulicas',
    subcategorias: [
      { slug: 'mangueras', nombre: 'Mangueras' },
      { slug: 'cilindros', nombre: 'Cilindros' },
    ],
  },
  {
    slug: 'ajuste',
    nombre: 'Herramientas de Ajuste',
    subcategorias: [
      { slug: 'kit-tornillos', nombre: 'Kit de tornillos' },
      { slug: 'bujes', nombre: 'Bujes' },
      { slug: 'pasadores', nombre: 'Pasadores' },
    ],
  },
  {
    slug: 'lubricantes',
    nombre: 'Filtros y Lubricantes',
    subcategorias: [
      { slug: 'aceites', nombre: 'Aceites' },
      { slug: 'filtros-aceite', nombre: 'Filtros de aceite' },
    ],
  },
  {
    slug: 'monitores',
    nombre: 'Partes Eléctricas',
    subcategorias: [
      { slug: 'pantallas', nombre: 'Pantallas' },
      { slug: 'sensores', nombre: 'Sensores' },
    ],
  },
  {
    slug: 'llantas',
    nombre: 'Llantas y Rines',
    subcategorias: [
      { slug: 'neumaticos', nombre: 'Neumáticos' },
      { slug: 'camaras', nombre: 'Cámaras' },
    ],
  },
  {
    slug: 'miscelaneos',
    nombre: 'Misceláneos',
    subcategorias: [
      { slug: 'accesorios', nombre: 'Accesorios' },
      { slug: 'componentes', nombre: 'Componentes' },
    ],
  },
];

// Cada producto debe tener esta forma. El campo `aplicaciones` es el que usa
// el buscador "Buscar por máquina" (ver src/components/MachineSearch.astro y
// public/js/machine-filter.js) para filtrar sin tener que revisar cientos de
// productos uno por uno — por eso conviene llenarlo con los modelos de
// máquina donde aplica la pieza, en vez de dejarlo vacío.
//
// {
//   slug: 'cadena-cat-320-38-eslabones',
//   nombre: 'Cadena CAT 320 (38 eslabones)',
//   categoria: 'tren-de-rodaje',       // debe existir en `categorias`
//   subcategoria: 'cadena',            // debe existir en esa categoría
//   marca: 'CAT',
//   aplicaciones: ['CAT 320', 'CAT 320D', 'CAT 320D2'],
//   descripcion: 'Cadena de tren de rodaje...',
//   foto: '',                          // ruta dentro de assets/images/products
//   disponibilidad: 'Disponible',
//   referencia: '...',
// }
export const productos = [
  {
  slug: 'cadena-cat-320-38-eslabones',
  nombre: 'Cadena CAT 320 (38 eslabones)',
  categoria: 'tren-de-rodaje',
  subcategoria: 'cadena',
  marca: 'CAT',
  aplicaciones: ['CAT 320', 'CAT 320D', 'CAT 320D2'],
  descripcion: '...',
  foto: '',
  disponibilidad: 'Disponible',
  referencia: '...',
  },

];
