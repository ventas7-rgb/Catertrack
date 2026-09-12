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
  // =========================================================================
  // BLOQUE 1: 24 PRODUCTOS POR APLICACIÓN Y MÁQUINA (SIN MOSTRAR REFERENCIA)
  // =========================================================================
  {
    slug: 'cadena-excavadora-cat-301-5-301-7',
    nombre: 'Cadena para miniexcavadora CAT 301.5 / 301.7',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['CAT 301.5', 'CAT 301.6', 'CAT 301.7', 'CAT 301.8', 'CAT 302 CR'],
    descripcion: `Cadena de tren de rodaje de eslabones de acero compatible con miniexcavadoras CAT 301.5, 301.6, 301.7, 301.8 y 302 CR.
Fabricada con aleación de acero tratada térmicamente para minimizar el estiramiento y desgaste en trabajos urbanos y de compactación.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '10',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-cat-303-303-5',
    nombre: 'Cadena para miniexcavadora CAT 303 / 303.5',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['CAT 303', 'CAT 303.5', 'CAT 303.5E', 'CAT 303.5E2', 'CAT 303C CR'],
    descripcion: `Cadena de eslabones de alta resistencia para miniexcavadoras CAT 303, 303.5, 303.5E, 303.5E2 y 303C CR.
Estructura reforzada con pasadores sellados para evitar el ingreso de abrasivos en el trabajo diario.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '8',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-cat-304-305',
    nombre: 'Cadena para miniexcavadora CAT 304 / 305',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['CAT 304', 'CAT 304E', 'CAT 305', 'CAT 305.5', 'CAT 305E2'],
    descripcion: `Cadena de tren de rodaje para miniexcavadoras CAT de las series 304, 304E, 305, 305.5 y 305E2.
Tratamiento de inducción en la superficie de rodadura de los eslabones para mayor durabilidad en suelos duros.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '12',
    referencia: ''
  },
  {
    slug: 'cadena-excavadora-cat-307-308',
    nombre: 'Cadena para excavadora compacta CAT 307 / 308',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['CAT 307', 'CAT 307C', 'CAT 307D', 'CAT 308', 'CAT 308E', 'CAT 308E2', 'CAT 308 CR'],
    descripcion: `Cadena de eslabones de acero compatible con excavadoras compactas CAT 307, 307C, 307D, 308, 308E, 308E2 y 308 CR.
Diseñada para resistir cargas de torsión en aplicaciones de excavación y zanjeo continuo.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '15',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-cat-311-312',
    nombre: 'Cadena para excavadora CAT 311 / 312',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['CAT 311', 'CAT 311C', 'CAT 311D', 'CAT 312', 'CAT 312B', 'CAT 312C', 'CAT 312D', 'CAT 312E'],
    descripcion: `Cadena sellada y lubricada para excavadoras CAT 311, 311C, 311D, 312, 312B, 312C, 312D y 312E.
Pasadores y bujes con tratamiento de nitruración profunda para evitar el desgaste prematuro de paso.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '18',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-cat-313-314',
    nombre: 'Cadena para excavadora CAT 313 / 314',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['CAT 313', 'CAT 313D', 'CAT 313FL', 'CAT 313GC', 'CAT 314C', 'CAT 314D', 'CAT 314E'],
    descripcion: `Cadena de tren de rodaje compatible con la familia de excavadoras CAT 313, 313D, 313FL, 313GC, 314C, 314D y 314E.
Optimizada para garantizar tracción y alineación continua en trabajos de construcción general.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '14',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-cat-315-316',
    nombre: 'Cadena para excavadora CAT 315 / 316',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['CAT 315', 'CAT 315C', 'CAT 315D', 'CAT 315FL', 'CAT 316E', 'CAT 316FL'],
    descripcion: `Cadena de alta dureza para excavadoras CAT 315, 315C, 315D, 315FL, 316E y 316FL.
Construida en acero forjado para resistir impactos en terrenos rocosos.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '9',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-cat-317-318',
    nombre: 'Cadena para excavadora CAT 317 / 318',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['CAT 317', 'CAT 317B', 'CAT 317N', 'CAT 318C', 'CAT 318D', 'CAT 318E', 'CAT 318F'],
    descripcion: `Cadena de tren de rodaje para excavadoras CAT 317, 317B, 317N, 318C, 318D, 318E y 318F.
Ofrece máxima rigidez estructural y tolerancia a altas presiones de contacto.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '7',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-cat-320',
    nombre: 'Cadena para excavadora CAT 320 / 320D / 320E',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['CAT 320', 'CAT 320B', 'CAT 320C', 'CAT 320D', 'CAT 320D2', 'CAT 320E', 'CAT 320F', 'CAT 320 Next Gen', 'CAT 320GC'],
    descripcion: `Cadena sellada y lubricada para excavadoras CAT 320, 320B, 320C, 320D, 320D2, 320E, 320F, 320 Next Gen y 320GC.
Evita el movimiento axial del pasador y extiende la vida útil bajo aplicaciones exigentes en canteras y obra civil.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '25',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-cat-321-322-323',
    nombre: 'Cadena para excavadora CAT 321 / 322 / 323',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['CAT 321C', 'CAT 321D', 'CAT 322B', 'CAT 322C', 'CAT 323D', 'CAT 323E', 'CAT 323F', 'CAT 323 Next Gen'],
    descripcion: `Cadena de tren de rodaje pesada para excavadoras CAT 321C, 321D, 322B, 322C, 323D, 323E, 323F y 323 Next Gen.
Resistencia a la fatiga incrementada mediante tratamiento térmico diferencial.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '16',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-cat-324-325-326',
    nombre: 'Cadena para excavadora CAT 324 / 325 / 326',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['CAT 324D', 'CAT 324E', 'CAT 325', 'CAT 325C', 'CAT 325D', 'CAT 326F', 'CAT 326 Next Gen'],
    descripcion: `Cadena de rodaje de alto rendimiento para modelos CAT 324D, 324E, 325, 325C, 325D, 326F y 326 Next Gen.
Diseño con retención positiva de pasador que soporta fuerzas laterales severas.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '11',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-cat-328-329',
    nombre: 'Cadena para excavadora CAT 328 / 329',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['CAT 328D', 'CAT 329D', 'CAT 329D2', 'CAT 329E', 'CAT 329F'],
    descripcion: `Cadena reforzada para excavadoras CAT 328D, 329D, 329D2, 329E y 329F.
Sistemas de sellado mejorados para retención prolongada del lubricante interno.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '8',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-cat-330',
    nombre: 'Cadena para excavadora CAT 330 / 330D / 330GC',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['CAT 330', 'CAT 330B', 'CAT 330C', 'CAT 330D', 'CAT 330D2', 'CAT 330E', 'CAT 330F', 'CAT 330GC', 'CAT 330 Next Gen'],
    descripcion: `Cadena de tren de rodaje pesada para excavadoras CAT 330, 330B, 330C, 330D, 330D2, 330E, 330F, 330GC y 330 Next Gen.
Eslabones de perfil alto con máxima profundidad de penetración de dureza.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '20',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-cat-333-335-336',
    nombre: 'Cadena para excavadora CAT 333 / 335 / 336',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['CAT 333', 'CAT 335F', 'CAT 336', 'CAT 336D', 'CAT 336E', 'CAT 336F', 'CAT 336GC', 'CAT 336 Next Gen'],
    descripcion: `Cadena de trabajo pesado (HD) para excavadoras CAT 333, 335F, 336, 336D, 336E, 336F, 336GC y 336 Next Gen.
Procesada para soportar abrasión severa y cargas de martillo hidráulico o desmonte.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '15',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-cat-340-345-349',
    nombre: 'Cadena para excavadora CAT 340 / 345 / 349',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['CAT 340D', 'CAT 340F', 'CAT 345B', 'CAT 345C', 'CAT 345D', 'CAT 349D', 'CAT 349E', 'CAT 349F', 'CAT 349 Next Gen'],
    descripcion: `Cadena de tren de rodaje de ultra durabilidad para excavadoras CAT 340D, 340F, 345B, 345C, 345D, 349D, 349E, 349F y 349 Next Gen.
Eslabones forjados con tratamiento de bonificado profundo para minería y movimiento de tierra a gran escala.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '10',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-cat-350-352',
    nombre: 'Cadena para excavadora CAT 350 / 352',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['CAT 350', 'CAT 350L', 'CAT 352F', 'CAT 352 Next Gen', 'CAT 352 Ultra High Demolition'],
    descripcion: `Cadena resistente a impactos extremos para excavadoras CAT 350, 350L, 352F, 352 Next Gen y 352 UHD.
Sellos reforzados para evitar la entrada de finos en aplicaciones mineras.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '6',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-cat-365-374',
    nombre: 'Cadena para excavadora de minería CAT 365 / 374',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['CAT 365B', 'CAT 365C', 'CAT 374D', 'CAT 374F', 'CAT 374 Next Gen'],
    descripcion: `Cadena de servicio pesado para excavadoras de minería CAT 365B, 365C, 374D, 374F y 374 Next Gen.
Eslabones de sección sobredimensionada diseñados para operar sobre roca dura sin deformación.

Disponible bajo pedido. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: 'Por pedido',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-cat-385-390-395',
    nombre: 'Cadena para excavadora de minería CAT 385 / 390 / 395',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['CAT 385B', 'CAT 385C', 'CAT 390D', 'CAT 390F', 'CAT 395 Next Gen'],
    descripcion: `Cadena de categoría minera pesada para excavadoras CAT 385B, 385C, 390D, 390F y 395 Next Gen.
Tecnología avanzada para la retención óptima de pasadores bajo esfuerzos cíclicos severos.

Disponible bajo pedido. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: 'Por pedido',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-cat-308-308e2',
    nombre: 'Cadena reforzada para miniexcavadora CAT 308',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['CAT 308', 'CAT 308C', 'CAT 308D', 'CAT 308E', 'CAT 308E2', 'CAT 308E2 CR'],
    descripcion: `Cadena de eslabones pesados adaptada para excavadoras compactas CAT serie 308.
Gran resistencia al desgaste abrasivo en tareas de excavación profunda y demolición ligera.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '11',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-cat-312d-312e',
    nombre: 'Cadena heavy-duty para excavadora CAT 312D / 312E',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['CAT 312D', 'CAT 312D2', 'CAT 312E', 'CAT 312F'],
    descripcion: `Cadena de alta durabilidad especificada para equipos CAT 312D, 312D2, 312E y 312F.
Eslabones de acero forjado de perfil reforzado para operación continua en terreno árido.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '13',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-cat-320d-320e-hd',
    nombre: 'Cadena pesada HD para excavadora CAT 320D / 320E',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['CAT 320D', 'CAT 320D L', 'CAT 320E', 'CAT 320E L'],
    descripcion: `Cadena de rodaje Heavy-Duty optimizada para modelos CAT 320D, 320D L, 320E y 320E L.
Soportes de casquillos extendidos para reducir la carga específica y prolongar vida útil.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '22',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-cat-330d-330e-hd',
    nombre: 'Cadena pesada HD para excavadora CAT 330D / 330E',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['CAT 330D', 'CAT 330D L', 'CAT 330E', 'CAT 330E L'],
    descripcion: `Cadena de alto rendimiento para excavadoras CAT 330D, 330D L, 330E y 330E L.
Procesada térmicamente con dureza profunda en la cara de rodadura del eslabón.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '17',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-cat-336d-336e-hd',
    nombre: 'Cadena pesada HD para excavadora CAT 336D / 336E',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['CAT 336D', 'CAT 336D L', 'CAT 336E', 'CAT 336E L'],
    descripcion: `Cadena de fuerza de tracción pesada para excavadoras CAT 336D, 336D L, 336E y 336E L.
Sellos sintéticos de alto sellado para garantizar cero escapes del aceite de lubricación.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '14',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-cat-349d-349e-hd',
    nombre: 'Cadena pesada HD para excavadora CAT 349D / 349E',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['CAT 349D', 'CAT 349D L', 'CAT 349E', 'CAT 349E L'],
    descripcion: `Cadena de categoría pesada para excavadoras CAT 349D, 349D L, 349E y 349E L.
Máxima tolerancia contra esfuerzos laterales y cargas de choque pesadas.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '8',
    referencia: 'Catertrack'
  },

  // =========================================================================
  // BLOQUE 2: 24 PRODUCTOS POR REFERENCIA (SIN MOSTRAR MÁQUINAS/APLICACIONES)
  // =========================================================================
  {
    slug: 'cadena-cat-138-2041',
    nombre: '138-2041 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 138-2041, línea CAT, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '10',
    referencia: '138-2041'
  },
  {
    slug: 'cadena-cat-233-3161',
    nombre: '233-3161 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 233-3161, línea CAT, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '8',
    referencia: '233-3161'
  },
  {
    slug: 'cadena-cat-280-2680',
    nombre: '280-2680 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 280-2680, línea CAT, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '12',
    referencia: '280-2680'
  },
  {
    slug: 'cadena-cat-198-2895',
    nombre: '198-2895 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 198-2895, línea CAT, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '15',
    referencia: '198-2895'
  },
  {
    slug: 'cadena-cat-115-6320',
    nombre: '115-6320 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 115-6320, línea CAT, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '18',
    referencia: '115-6320'
  },
  {
    slug: 'cadena-cat-378-0800',
    nombre: '378-0800 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 378-0800, línea CAT, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '14',
    referencia: '378-0800'
  },
  {
    slug: 'cadena-cat-175-4130',
    nombre: '175-4130 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 175-4130, línea CAT, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '9',
    referencia: '175-4130'
  },
  {
    slug: 'cadena-cat-102-3401',
    nombre: '102-3401 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 102-3401, línea CAT, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '7',
    referencia: '102-3401'
  },
  {
    slug: 'cadena-cat-9w9353',
    nombre: '9W9353 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 9W9353, línea CAT, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '25',
    referencia: '9W9353'
  },
  {
    slug: 'cadena-cat-194-1180',
    nombre: '194-1180 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 194-1180, línea CAT, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '16',
    referencia: '194-1180'
  },
  {
    slug: 'cadena-cat-222-2234',
    nombre: '222-2234 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 222-2234, línea CAT, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '11',
    referencia: '222-2234'
  },
  {
    slug: 'cadena-cat-310-8201',
    nombre: '310-8201 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 310-8201, línea CAT, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '8',
    referencia: '310-8201'
  },
  {
    slug: 'cadena-cat-102-5820',
    nombre: '102-5820 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 102-5820, línea CAT, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '20',
    referencia: '102-5820'
  },
  {
    slug: 'cadena-cat-225-2510',
    nombre: '225-2510 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 225-2510, línea CAT, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '15',
    referencia: '225-2510'
  },
  {
    slug: 'cadena-cat-194-1195',
    nombre: '194-1195 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 194-1195, línea CAT, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '10',
    referencia: '194-1195'
  },
  {
    slug: 'cadena-cat-433-2100',
    nombre: '433-2100 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 433-2100, línea CAT, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '6',
    referencia: '433-2100'
  },
  {
    slug: 'cadena-cat-235-2560',
    nombre: '235-2560 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 235-2560, línea CAT, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible bajo pedido. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: 'Por pedido',
    referencia: '235-2560'
  },
  {
    slug: 'cadena-cat-280-3900',
    nombre: '280-3900 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 280-3900, línea CAT, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible bajo pedido. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: 'Por pedido',
    referencia: '280-3900'
  },
  {
    slug: 'cadena-cat-280-2685',
    nombre: '280-2685 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 280-2685, línea CAT, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '11',
    referencia: '280-2685'
  },
  {
    slug: 'cadena-cat-115-6325',
    nombre: '115-6325 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 115-6325, línea CAT, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '13',
    referencia: '115-6325'
  },
  {
    slug: 'cadena-cat-9w9358',
    nombre: '9W9358 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 9W9358, línea CAT, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '22',
    referencia: '9W9358'
  },
  {
    slug: 'cadena-cat-102-5825',
    nombre: '102-5825 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 102-5825, línea CAT, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '17',
    referencia: '102-5825'
  },
  {
    slug: 'cadena-cat-225-2515',
    nombre: '225-2515 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 225-2515, línea CAT, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '14',
    referencia: '225-2515'
  },
  {
    slug: 'cadena-cat-194-1198',
    nombre: '194-1198 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 194-1198, línea CAT, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '8',
    referencia: '194-1198'
  },
  // =========================================================================
  // HITACHI - BLOQUE 1: POR APLICACIÓN Y MÁQUINA (REFERENCIA VACÍA / MARCA)
  // =========================================================================
  {
    slug: 'cadena-miniexcavadora-hitachi-zx17-zx26',
    nombre: 'Cadena para miniexcavadora Hitachi ZX17 / ZX26',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Hitachi ZX17U', 'Hitachi ZX19U', 'Hitachi ZX26U'],
    descripcion: `Cadena de eslabones de acero para miniexcavadoras Hitachi ZX17U, ZX19U y ZX26U.
Construcción sellada que previene el desgaste en terrenos abrasivos y compactación urbana.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '10',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-miniexcavadora-hitachi-zx33-zx38',
    nombre: 'Cadena para miniexcavadora Hitachi ZX33 / ZX38',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Hitachi ZX33U-5', 'Hitachi ZX35U-5', 'Hitachi ZX38U-5'],
    descripcion: `Cadena de tren de rodaje de alta durabilidad para miniexcavadoras Hitachi ZX33U, ZX35U y ZX38U.
Eslabones tratados térmicamente para absorber impactos en labores de zanjeo y cimentación.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '8',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-miniexcavadora-hitachi-zx48-zx55',
    nombre: 'Cadena para miniexcavadora Hitachi ZX48 / ZX55',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Hitachi ZX48U-5', 'Hitachi ZX55U-5', 'Hitachi ZX65USB-5'],
    descripcion: `Cadena reforzada para miniexcavadoras Hitachi ZX48U, ZX55U y ZX65USB.
Pasadores y bujes con tratamiento por inducción para maximizar las horas de operación continua.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '12',
    referencia: ''
  },
  {
    slug: 'cadena-excavadora-hitachi-zx70-zx85',
    nombre: 'Cadena para excavadora compacta Hitachi ZX70 / ZX85',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Hitachi ZX70-5', 'Hitachi ZX75US-5', 'Hitachi ZX85USB-5'],
    descripcion: `Cadena de tren de rodaje pesada para excavadoras Hitachi ZX70, ZX75US y ZX85USB.
Diseño antidesgaste para prevenir la extensión prematura de paso en suelos duros.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '15',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-hitachi-zx120-zx130',
    nombre: 'Cadena para excavadora Hitachi ZX120 / ZX130',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Hitachi ZX120', 'Hitachi ZX120-3', 'Hitachi ZX130-5', 'Hitachi ZX135US-5'],
    descripcion: `Cadena sellada y lubricada para excavadoras Hitachi ZX120, ZX120-3, ZX130-5 y ZX135US-5.
Excelente rigidez estructural contra cargas de torsión transversales.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '18',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-hitachi-zx160-zx180',
    nombre: 'Cadena para excavadora Hitachi ZX160 / ZX180',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Hitachi ZX160LC-5', 'Hitachi ZX180LC-5', 'Hitachi ZX190LC-6'],
    descripcion: `Cadena de rodaje forjada en acero especial para modelos Hitachi ZX160LC, ZX180LC y ZX190LC.
Garantiza alineación constante en pendientes y superficies irregulares.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '14',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-hitachi-zx200-zx210',
    nombre: 'Cadena para excavadora Hitachi ZX200 / ZX210',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Hitachi ZX200', 'Hitachi ZX200-3', 'Hitachi ZX200-5', 'Hitachi ZX210LC-5', 'Hitachi ZX210-6'],
    descripcion: `Cadena de alta dureza para excavadoras Hitachi serie ZX200, ZX200-3, ZX200-5, ZX210LC-5 y ZX210-6.
Tratamiento nitrurado profundo para operación intensiva en canteras y obra civil.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '25',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-hitachi-zx240-zx250',
    nombre: 'Cadena para excavadora Hitachi ZX240 / ZX250',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Hitachi ZX240-3', 'Hitachi ZX240-5', 'Hitachi ZX250LC-5', 'Hitachi ZX250-6'],
    descripcion: `Cadena de rodaje pesada adaptada para excavadoras Hitachi ZX240, ZX240-5, ZX250LC-5 y ZX250-6.
Retención positiva de pasadores para prevenir fugas de grasa interna bajo fricción extrema.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '16',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-hitachi-zx270-zx290',
    nombre: 'Cadena para excavadora Hitachi ZX270 / ZX290',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Hitachi ZX270-3', 'Hitachi ZX290LC-5', 'Hitachi ZX300LC-6'],
    descripcion: `Cadena para movimiento de tierra pesado en modelos Hitachi ZX270-3, ZX290LC-5 y ZX300LC-6.
Soporta cargas operativas continuas con mínima deformación estructural.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '11',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-hitachi-zx330-zx350',
    nombre: 'Cadena para excavadora Hitachi ZX330 / ZX350',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Hitachi ZX330', 'Hitachi ZX330-3', 'Hitachi ZX350LC-5', 'Hitachi ZX350LC-6'],
    descripcion: `Cadena de servicio pesado (HD) para excavadoras Hitachi ZX330, ZX330-3, ZX350LC-5 y ZX350LC-6.
Sistemas de sellado mejorados para garantizar protección contra finos minerales.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '20',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-hitachi-zx380-zx400',
    nombre: 'Cadena para excavadora Hitachi ZX380 / ZX400',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Hitachi ZX380LC-5', 'Hitachi ZX400LCH-3', 'Hitachi ZX400LCH-5'],
    descripcion: `Cadena de rodaje reforzada para aplicaciones pesadas en excavadoras Hitachi ZX380LC y ZX400LCH.
Eslabones con dureza de capa profunda que previenen fisuras bajo impacto.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '12',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-hitachi-zx470-zx490',
    nombre: 'Cadena para excavadora de minería Hitachi ZX470 / ZX490',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Hitachi ZX470H-3', 'Hitachi ZX470LC-5', 'Hitachi ZX490LCH-6'],
    descripcion: `Cadena de minería de alta resistencia para excavadoras Hitachi ZX470, ZX470LC-5 y ZX490LCH-6.
Estructura sobredimensionada para maximizar la durabilidad en carga de roca fracturada.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '9',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-hitachi-zx670-zx690',
    nombre: 'Cadena para excavadora minera Hitachi ZX670 / ZX690',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Hitachi ZX670LCR-3', 'Hitachi ZX690LCH-5', 'Hitachi ZX690LCR-6'],
    descripcion: `Cadena de tren de rodaje de clase minera para excavadoras Hitachi ZX670 y ZX690.
Máxima resistencia al estiramiento y fatiga bajo uso continuado de martillo o balde minero.

Disponible bajo pedido. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: 'Por pedido',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-hitachi-zx870-zx890',
    nombre: 'Cadena para excavadora minera Hitachi ZX870 / ZX890',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Hitachi ZX870LCR-3', 'Hitachi ZX890LCH-5', 'Hitachi ZX890LCR-6'],
    descripcion: `Cadena de alta capacidad de carga para excavadoras de gran tamaño Hitachi ZX870 y ZX890.
Tecnología de forjado pesado concebida para operaciones extremas en tajos abiertos.

Disponible bajo pedido. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: 'Por pedido',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-hitachi-zx200-heavy-duty',
    nombre: 'Cadena pesada HD para excavadora Hitachi ZX200 / ZX210',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Hitachi ZX200-5G', 'Hitachi ZX200LC-5G', 'Hitachi ZX210LC-5G'],
    descripcion: `Cadena Heavy-Duty especificada para excavadoras Hitachi series ZX200-5G y ZX210LC-5G.
Superficie de rodadura tratada por inducción térmica para minimizar la abrasión.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '20',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-hitachi-zx330-heavy-duty',
    nombre: 'Cadena pesada HD para excavadora Hitachi ZX330 / ZX350',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Hitachi ZX330-5G', 'Hitachi ZX330LC-5G', 'Hitachi ZX350LC-5G'],
    descripcion: `Cadena de fuerza pesada para excavadoras Hitachi ZX330-5G y ZX350LC-5G.
Retención de pasador optimizada para resistir sacudidas y choques continuos.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '15',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-hitachi-ex120-ex200',
    nombre: 'Cadena para excavadora Hitachi EX120 / EX200',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Hitachi EX120-2', 'Hitachi EX120-5', 'Hitachi EX200-2', 'Hitachi EX200-5'],
    descripcion: `Cadena de rodaje compatible con excavadoras de la serie clásica Hitachi EX120 y EX200.
Eslabones de repuesto con especificaciones dimensionales equivalentes al equipo original.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '14',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-hitachi-ex300-ex400',
    nombre: 'Cadena para excavadora Hitachi EX300 / EX400',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Hitachi EX300-3', 'Hitachi EX300-5', 'Hitachi EX400-3', 'Hitachi EX400-5'],
    descripcion: `Cadena de eslabones pesados para excavadoras Hitachi EX300 y EX400.
Forjada en aleación tratada contra la fatiga por esfuerzos sostenidos en frentes de excavación.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '10',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-hitachi-zx130-heavy-duty',
    nombre: 'Cadena reforzada para excavadora Hitachi ZX130 / ZX135',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Hitachi ZX130-6', 'Hitachi ZX135US-6'],
    descripcion: `Cadena reforzada para equipos Hitachi ZX130-6 y ZX135US-6.
Diseñada para terrenos movedizos y de baja sustentación sin comprometer la velocidad de oruga.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '11',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-hitachi-zx250-heavy-duty',
    nombre: 'Cadena pesada HD para excavadora Hitachi ZX250 / ZX260',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Hitachi ZX250LCH-5', 'Hitachi ZX260LCH-6'],
    descripcion: `Cadena heavy-duty para excavadoras Hitachi ZX250LCH y ZX260LCH.
Eslabones reforzados para amortiguar impactos de material rocoso pesado.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '13',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-hitachi-zx490-heavy-duty',
    nombre: 'Cadena pesada HD para excavadora Hitachi ZX490',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Hitachi ZX490LCH-6', 'Hitachi ZX490LCR-6'],
    descripcion: `Cadena de rodaje para tareas de demolición y minería en modelos Hitachi ZX490LCH-6 y ZX490LCR-6.
Construcción sellada con fluido sintético que extiende los periodos de servicio.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '7',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-hitachi-zx85-heavy-duty',
    nombre: 'Cadena reforzada para excavadora compacta Hitachi ZX85',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Hitachi ZX85USB-5', 'Hitachi ZX85US-6'],
    descripcion: `Cadena de eslabones reforzados para excavadoras de radio reducido Hitachi ZX85USB-5 y ZX85US-6.
Ofrece tracción superior sobre rasantes inestables.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '9',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-hitachi-zx160-heavy-duty',
    nombre: 'Cadena pesada HD para excavadora Hitachi ZX160',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Hitachi ZX160LC-6'],
    descripcion: `Cadena de rodaje pesada especificada para excavadoras Hitachi ZX160LC-6.
Reducción efectiva de juego lateral mediante casquillos de alta fricción interna.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '8',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-hitachi-zx290-heavy-duty',
    nombre: 'Cadena pesada HD para excavadora Hitachi ZX290',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Hitachi ZX290LC-5', 'Hitachi ZX290LCN-5'],
    descripcion: `Cadena Heavy-Duty diseñada para la gama de excavadoras Hitachi ZX290LC-5 y ZX290LCN-5.
Máxima tolerancia frente a torsión durante virajes en espacio reducido.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '10',
    referencia: 'Catertrack'
  },
  // =========================================================================
  // HITACHI - BLOQUE 2: POR REFERENCIA (APLICACIÓN GENÉRICA "EXCAVADORAS")
  // =========================================================================
  {
    slug: 'cadena-hitachi-9183804',
    nombre: '9183804 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 9183804, línea Hitachi, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '10',
    referencia: '9183804'
  },
  {
    slug: 'cadena-hitachi-9183808',
    nombre: '9183808 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 9183808, línea Hitachi, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '8',
    referencia: '9183808'
  },
  {
    slug: 'cadena-hitachi-9233692',
    nombre: '9233692 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 9233692, línea Hitachi, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '12',
    referencia: '9233692'
  },
  {
    slug: 'cadena-hitachi-9182352',
    nombre: '9182352 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 9182352, línea Hitachi, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '15',
    referencia: '9182352'
  },
  {
    slug: 'cadena-hitachi-9148700',
    nombre: '9148700 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 9148700, línea Hitachi, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '18',
    referencia: '9148700'
  },
  {
    slug: 'cadena-hitachi-9182360',
    nombre: '9182360 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 9182360, línea Hitachi, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '14',
    referencia: '9182360'
  },
  {
    slug: 'cadena-hitachi-9183812',
    nombre: '9183812 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 9183812, línea Hitachi, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '9',
    referencia: '9183812'
  },
  {
    slug: 'cadena-hitachi-9233698',
    nombre: '9233698 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 9233698, línea Hitachi, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '7',
    referencia: '9233698'
  },
  {
    slug: 'cadena-hitachi-9182375',
    nombre: '9182375 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 9182375, línea Hitachi, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '25',
    referencia: '9182375'
  },
  {
    slug: 'cadena-hitachi-9233705',
    nombre: '9233705 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 9233705, línea Hitachi, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '16',
    referencia: '9233705'
  },
  {
    slug: 'cadena-hitachi-9182380',
    nombre: '9182380 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 9182380, línea Hitachi, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '11',
    referencia: '9182380'
  },
  {
    slug: 'cadena-hitachi-9233710',
    nombre: '9233710 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 9233710, línea Hitachi, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '8',
    referencia: '9233710'
  },
  {
    slug: 'cadena-hitachi-9255800',
    nombre: '9255800 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 9255800, línea Hitachi, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '20',
    referencia: '9255800'
  },
  {
    slug: 'cadena-hitachi-9255810',
    nombre: '9255810 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 9255810, línea Hitachi, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '15',
    referencia: '9255810'
  },
  {
    slug: 'cadena-hitachi-9255820',
    nombre: '9255820 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 9255820, línea Hitachi, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '10',
    referencia: '9255820'
  },
  {
    slug: 'cadena-hitachi-9255830',
    nombre: '9255830 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 9255830, línea Hitachi, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '6',
    referencia: '9255830'
  },
  {
    slug: 'cadena-hitachi-9260100',
    nombre: '9260100 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 9260100, línea Hitachi, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible bajo pedido. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: 'Por pedido',
    referencia: '9260100'
  },
  {
    slug: 'cadena-hitachi-9260110',
    nombre: '9260110 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 9260110, línea Hitachi, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible bajo pedido. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: 'Por pedido',
    referencia: '9260110'
  },
  {
    slug: 'cadena-hitachi-9183815',
    nombre: '9183815 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 9183815, línea Hitachi, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '11',
    referencia: '9183815'
  },
  {
    slug: 'cadena-hitachi-9233715',
    nombre: '9233715 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 9233715, línea Hitachi, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '13',
    referencia: '9233715'
  },
  {
    slug: 'cadena-hitachi-9255825',
    nombre: '9255825 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 9255825, línea Hitachi, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '22',
    referencia: '9255825'
  },
  {
    slug: 'cadena-hitachi-9255835',
    nombre: '9255835 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 9255835, línea Hitachi, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '17',
    referencia: '9255835'
  },
  {
    slug: 'cadena-hitachi-9260105',
    nombre: '9260105 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 9260105, línea Hitachi, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '14',
    referencia: '9260105'
  },
  {
    slug: 'cadena-hitachi-9260115',
    nombre: '9260115 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 9260115, línea Hitachi, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '8',
    referencia: '9260115'
  },
  // =========================================================================
  // KOMATSU - BLOQUE 1: POR APLICACIÓN Y MÁQUINA (REFERENCIA VACÍA / MARCA)
  // =========================================================================
  {
    slug: 'cadena-miniexcavadora-komatsu-pc14-pc18',
    nombre: 'Cadena para miniexcavadora Komatsu PC14 / PC18',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Komatsu PC14R', 'Komatsu PC16R', 'Komatsu PC18MR'],
    descripcion: `Cadena de eslabones de acero para miniexcavadoras Komatsu PC14R, PC16R y PC18MR.
Fabricada con aleación tratada térmicamente para alta durabilidad en espacio reducido y obras urbanas.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '10',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-miniexcavadora-komatsu-pc26-pc30',
    nombre: 'Cadena para miniexcavadora Komatsu PC26 / PC30',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Komatsu PC26MR', 'Komatsu PC30MR-3', 'Komatsu PC30MR-5'],
    descripcion: `Cadena de tren de rodaje reforzada para miniexcavadoras Komatsu PC26MR, PC30MR-3 y PC30MR-5.
Pasadores sellados para prolongar la vida útil en condiciones abrasivas.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '8',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-miniexcavadora-komatsu-pc35-pc45',
    nombre: 'Cadena para miniexcavadora Komatsu PC35 / PC45',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Komatsu PC35MR-3', 'Komatsu PC35MR-5', 'Komatsu PC45MR-3', 'Komatsu PC45MR-5'],
    descripcion: `Cadena de alta durabilidad especificada para modelos Komatsu PC35MR y PC45MR.
Eslabones de perfil antidesgaste para excavación profunda y movimiento de tierra continuo.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '12',
    referencia: ''
  },
  {
    slug: 'cadena-miniexcavadora-komatsu-pc55-pc78',
    nombre: 'Cadena para excavadora compacta Komatsu PC55 / PC78',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Komatsu PC55MR-3', 'Komatsu PC55MR-5', 'Komatsu PC78US-6', 'Komatsu PC78US-8', 'Komatsu PC78UU-10'],
    descripcion: `Cadena pesada para excavadoras compactas Komatsu PC55MR, PC78US y PC78UU.
Diseño con retención positiva de pasadores para resistir fuerzas laterales severas.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '15',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-komatsu-pc88-pc128',
    nombre: 'Cadena para excavadora Komatsu PC88 / PC128',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Komatsu PC88MR-8', 'Komatsu PC88MR-10', 'Komatsu PC128US-2', 'Komatsu PC128US-8', 'Komatsu PC128US-10'],
    descripcion: `Cadena sellada y lubricada para excavadoras de giro corto Komatsu PC88MR y PC128US.
Estructura forjada que tolera variaciones térmicas y altas presiones de contacto.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '18',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-komatsu-pc130-pc138',
    nombre: 'Cadena para excavadora Komatsu PC130 / PC138',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Komatsu PC130-7', 'Komatsu PC130-8', 'Komatsu PC138US-8', 'Komatsu PC138US-11'],
    descripcion: `Cadena de rodaje de alto rendimiento para excavadoras Komatsu PC130 y PC138US.
Protección de inducción superficial en los eslabones para extender el tiempo entre recambios.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '14',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-komatsu-pc160-pc180',
    nombre: 'Cadena para excavadora Komatsu PC160 / PC180',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Komatsu PC160LC-7', 'Komatsu PC160LC-8', 'Komatsu PC180LC-7', 'Komatsu PC180NLC-8'],
    descripcion: `Cadena de acero forjado pesada para excavadoras Komatsu PC160LC y PC180LC.
Alta dureza que evita la deformación por impacto continuo en terrenos rocosos.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '9',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-komatsu-pc200-pc210',
    nombre: 'Cadena para excavadora Komatsu PC200 / PC210',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Komatsu PC200-7', 'Komatsu PC200-8', 'Komatsu PC200LC-8', 'Komatsu PC210-8', 'Komatsu PC210LC-10', 'Komatsu PC210LC-11'],
    descripcion: `Cadena de tren de rodaje sellada y lubricada para Komatsu PC200, PC200LC, PC210 y PC210LC.
Sistemas de retención de grasa optimizados para canteras, excavación profunda u obra civil de gran volumen.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '25',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-komatsu-pc220-pc240',
    nombre: 'Cadena para excavadora Komatsu PC220 / PC240',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Komatsu PC220-7', 'Komatsu PC220LC-8', 'Komatsu PC240LC-8', 'Komatsu PC240LC-10', 'Komatsu PC240LC-11'],
    descripcion: `Cadena pesada HD para excavadoras Komatsu serie PC220 y PC240.
Tratamiento nitrurado profundo que reduce el desgate del paso en operación severa.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '16',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-komatsu-pc270-pc290',
    nombre: 'Cadena para excavadora Komatsu PC270 / PC290',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Komatsu PC270LC-8', 'Komatsu PC290LC-10', 'Komatsu PC290LC-11'],
    descripcion: `Cadena de tracción para excavadoras de gran capacidad Komatsu PC270LC y PC290LC.
Gran rigidez estructural que previene desalineaciones durante empujes de gran fuerza.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '11',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-komatsu-pc300-pc350',
    nombre: 'Cadena para excavadora Komatsu PC300 / PC350',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Komatsu PC300-7', 'Komatsu PC300-8', 'Komatsu PC300LC-8', 'Komatsu PC350LC-8', 'Komatsu PC350LC-10', 'Komatsu PC350LC-11'],
    descripcion: `Cadena pesada Heavy-Duty para excavadoras Komatsu PC300, PC300LC, PC350 y PC350LC.
Eslabones forjados en sección sobredimensionada para soportar desmonte y martillos hidráulicos.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '20',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-komatsu-pc360-pc390',
    nombre: 'Cadena para excavadora Komatsu PC360 / PC390',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Komatsu PC360LC-10', 'Komatsu PC360LC-11', 'Komatsu PC390LC-10', 'Komatsu PC390LC-11'],
    descripcion: `Cadena de rodaje de extrema durabilidad para excavadoras Komatsu PC360LC y PC390LC.
Sello hermético que aísla el conjunto de la entrada de finos abrasivos.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '15',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-komatsu-pc400-pc450',
    nombre: 'Cadena para excavadora Komatsu PC400 / PC450',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Komatsu PC400-7', 'Komatsu PC400-8', 'Komatsu PC400LC-8', 'Komatsu PC450LC-8', 'Komatsu PC450LC-10', 'Komatsu PC450LC-11'],
    descripcion: `Cadena de minería para excavadoras de gran tonelaje Komatsu PC400 y PC450.
Bonificado térmico de profundidad superior para resistir grietas por choques estructurales.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '10',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-komatsu-pc600-pc650',
    nombre: 'Cadena para excavadora de minería Komatsu PC600 / PC650',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Komatsu PC600-7', 'Komatsu PC600LC-8', 'Komatsu PC650LC-8', 'Komatsu PC650-8E0'],
    descripcion: `Cadena de clase minera para excavadoras Komatsu PC600 y PC650.
Diseñada para operar en tajos abiertos con máxima tasa de transferencia de potencia.

Disponible bajo pedido. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: 'Por pedido',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-komatsu-pc800-pc850',
    nombre: 'Cadena para excavadora de minería Komatsu PC800 / PC850',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Komatsu PC800-8', 'Komatsu PC800LC-8', 'Komatsu PC850-8', 'Komatsu PC850SE-8'],
    descripcion: `Cadena pesada para excavadoras de minería pesada Komatsu PC800 y PC850.
Casquillos y pasadores sobredimensionados para ciclo continuo en frentes de roca dura.

Disponible bajo pedido. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: 'Por pedido',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-komatsu-pc1250',
    nombre: 'Cadena para excavadora de gran minería Komatsu PC1250',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Komatsu PC1250-8', 'Komatsu PC1250LC-8', 'Komatsu PC1250-11'],
    descripcion: `Cadena de rodaje de ultra-pesado para minería a gran escala en Komatsu PC1250.
Garantiza cero deformación en casquillos ante esfuerzos cíclicos severos.

Disponible bajo pedido. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: 'Por pedido',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-komatsu-pc200-hd',
    nombre: 'Cadena pesada HD para excavadora Komatsu PC200-8 / PC210-10',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Komatsu PC200-8M0', 'Komatsu PC200LC-8M0', 'Komatsu PC210-10M0'],
    descripcion: `Cadena Heavy-Duty especificada para Komatsu serie PC200-8M0 y PC210-10M0.
Eslabones de perfil más ancho para una distribución homogénea del peso del equipo.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '22',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-komatsu-pc300-hd',
    nombre: 'Cadena pesada HD para excavadora Komatsu PC300-8 / PC350-10',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Komatsu PC300-8M0', 'Komatsu PC300LC-8M0', 'Komatsu PC350LC-10M0'],
    descripcion: `Cadena HD de alta tracción para modelos Komatsu PC300-8M0 y PC350LC-10M0.
Soportes de casquillos extendidos que alargan las horas trabajadas en cantera.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '17',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-komatsu-pc400-hd',
    nombre: 'Cadena pesada HD para excavadora Komatsu PC400-8 / PC450-10',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Komatsu PC400-8M0', 'Komatsu PC450LC-10M0'],
    descripcion: `Cadena de rodaje para esfuerzos laterales elevados en Komatsu PC400-8M0 y PC450LC-10M0.
Retención hidráulica del aceite interna con juntas tóricas de alta tolerancia termomecánica.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '8',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-komatsu-pc130-hd',
    nombre: 'Cadena reforzada para excavadora Komatsu PC130 / PC138',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Komatsu PC130-8M0', 'Komatsu PC138US-11'],
    descripcion: `Cadena con eslabones reforzados adaptada para excavadoras Komatsu PC130-8M0 y PC138US.
Tratamiento contra desportillamiento por colisión de piedras en rodaje.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '13',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-komatsu-pc240-hd',
    nombre: 'Cadena pesada HD para excavadora Komatsu PC240 / PC290',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Komatsu PC240LC-10M0', 'Komatsu PC290LC-11M0'],
    descripcion: `Cadena Heavy-Duty para unidades de excavación pesada Komatsu PC240LC-10M0 y PC290LC-11M0.
Diseño que limita el movimiento axial del pasador bajo cargas severas.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '14',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-komatsu-pc360-hd',
    nombre: 'Cadena pesada HD para excavadora Komatsu PC360 / PC390',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Komatsu PC360LC-11M0', 'Komatsu PC390LC-11M0'],
    descripcion: `Cadena de categoría pesada para Komatsu PC360LC-11M0 y PC390LC-11M0.
Elevada masa térmica en el eslabón para evitar fisuras por sobrecalentamiento dinámico.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '11',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-komatsu-pc78-hd',
    nombre: 'Cadena reforzada para excavadora compacta Komatsu PC78 / PC88',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Komatsu PC78US-10', 'Komatsu PC88MR-10'],
    descripcion: `Cadena de rodaje pesada para excavadoras compactas Komatsu PC78US-10 y PC88MR-10.
Excelente capacidad de agarre en laderas y terrenos áridos.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '9',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-komatsu-pc160-hd',
    nombre: 'Cadena pesada HD para excavadora Komatsu PC160 / PC180',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Komatsu PC160LC-8M0', 'Komatsu PC180LC-8M0'],
    descripcion: `Cadena Heavy-Duty especificada para modelos Komatsu PC160LC-8M0 y PC180LC-8M0.
Resistencia incrementada a la tracción continua bajo carga completa.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '7',
    referencia: 'Catertrack'
  },
  // =========================================================================
  // KOMATSU - BLOQUE 2: POR REFERENCIA (APLICACIÓN GENÉRICA "EXCAVADORAS")
  // =========================================================================
  {
    slug: 'cadena-komatsu-203-32-00010',
    nombre: '203-32-00010 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 203-32-00010, línea Komatsu, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '10',
    referencia: '203-32-00010'
  },
  {
    slug: 'cadena-komatsu-205-32-00020',
    nombre: '205-32-00020 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 205-32-00020, línea Komatsu, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '8',
    referencia: '205-32-00020'
  },
  {
    slug: 'cadena-komatsu-206-32-00011',
    nombre: '206-32-00011 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 206-32-00011, línea Komatsu, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '12',
    referencia: '206-32-00011'
  },
  {
    slug: 'cadena-komatsu-207-32-00010',
    nombre: '207-32-00010 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 207-32-00010, línea Komatsu, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '15',
    referencia: '207-32-00010'
  },
  {
    slug: 'cadena-komatsu-208-32-00010',
    nombre: '208-32-00010 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 208-32-00010, línea Komatsu, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '18',
    referencia: '208-32-00010'
  },
  {
    slug: 'cadena-komatsu-209-32-00010',
    nombre: '209-32-00010 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 209-32-00010, línea Komatsu, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '14',
    referencia: '209-32-00010'
  },
  {
    slug: 'cadena-komatsu-205-32-00030',
    nombre: '205-32-00030 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 205-32-00030, línea Komatsu, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '9',
    referencia: '205-32-00030'
  },
  {
    slug: 'cadena-komatsu-207-32-00020',
    nombre: '207-32-00020 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 207-32-00020, línea Komatsu, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '7',
    referencia: '207-32-00020'
  },
  {
    slug: 'cadena-komatsu-208-32-00020',
    nombre: '208-32-00020 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 208-32-00020, línea Komatsu, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '25',
    referencia: '208-32-00020'
  },
  {
    slug: 'cadena-komatsu-14x-32-00100',
    nombre: '14X-32-00100 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 14X-32-00100, línea Komatsu, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '16',
    referencia: '14X-32-00100'
  },
  {
    slug: 'cadena-komatsu-175-32-00120',
    nombre: '175-32-00120 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 175-32-00120, línea Komatsu, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '11',
    referencia: '175-32-00120'
  },
  {
    slug: 'cadena-komatsu-195-32-00110',
    nombre: '195-32-00110 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 195-32-00110, línea Komatsu, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '8',
    referencia: '195-32-00110'
  },
  {
    slug: 'cadena-komatsu-198-32-00100',
    nombre: '198-32-00100 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 198-32-00100, línea Komatsu, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '20',
    referencia: '198-32-00100'
  },
  {
    slug: 'cadena-komatsu-203-32-00015',
    nombre: '203-32-00015 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 203-32-00015, línea Komatsu, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '15',
    referencia: '203-32-00015'
  },
  {
    slug: 'cadena-komatsu-205-32-00025',
    nombre: '205-32-00025 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 205-32-00025, línea Komatsu, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '10',
    referencia: '205-32-00025'
  },
  {
    slug: 'cadena-komatsu-207-32-00015',
    nombre: '207-32-00015 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 207-32-00015, línea Komatsu, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '6',
    referencia: '207-32-00015'
  },
  {
    slug: 'cadena-komatsu-208-32-00015',
    nombre: '208-32-00015 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 208-32-00015, línea Komatsu, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible bajo pedido. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: 'Por pedido',
    referencia: '208-32-00015'
  },
  {
    slug: 'cadena-komatsu-209-32-00015',
    nombre: '209-32-00015 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 209-32-00015, línea Komatsu, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible bajo pedido. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: 'Por pedido',
    referencia: '209-32-00015'
  },
  {
    slug: 'cadena-komatsu-206-32-00015',
    nombre: '206-32-00015 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 206-32-00015, línea Komatsu, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '11',
    referencia: '206-32-00015'
  },
  {
    slug: 'cadena-komatsu-207-32-00025',
    nombre: '207-32-00025 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 207-32-00025, línea Komatsu, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '13',
    referencia: '207-32-00025'
  },
  {
    slug: 'cadena-komatsu-208-32-00025',
    nombre: '208-32-00025 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 208-32-00025, línea Komatsu, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '22',
    referencia: '208-32-00025'
  },
  {
    slug: 'cadena-komatsu-14x-32-00105',
    nombre: '14X-32-00105 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 14X-32-00105, línea Komatsu, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '17',
    referencia: '14X-32-00105'
  },
  {
    slug: 'cadena-komatsu-175-32-00125',
    nombre: '175-32-00125 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 175-32-00125, línea Komatsu, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '14',
    referencia: '175-32-00125'
  },
  {
    slug: 'cadena-komatsu-195-32-00115',
    nombre: '195-32-00115 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 195-32-00115, línea Komatsu, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '8',
    referencia: '195-32-00115'
  },
  // =========================================================================
  // KOBELCO - BLOQUE 1: POR APLICACIÓN Y MÁQUINA (REFERENCIA VACÍA / MARCA)
  // =========================================================================
  {
    slug: 'cadena-miniexcavadora-kobelco-sk17-sk25',
    nombre: 'Cadena para miniexcavadora Kobelco SK17 / SK25',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Kobelco SK17SR', 'Kobelco SK20SR', 'Kobelco SK25SR'],
    descripcion: `Cadena de eslabones de acero para miniexcavadoras Kobelco SK17SR, SK20SR y SK25SR.
Diseño compacto con tratamiento térmico en la superficie de rodadura para resistir la abrasión en trabajos urbanos y de canalización.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '10',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-miniexcavadora-kobelco-sk30-sk35',
    nombre: 'Cadena para miniexcavadora Kobelco SK30 / SK35',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Kobelco SK30SR-3', 'Kobelco SK30SR-5', 'Kobelco SK35SR-3', 'Kobelco SK35SR-5', 'Kobelco SK35SR-6E'],
    descripcion: `Cadena de tren de rodaje pesada para miniexcavadoras Kobelco SK30SR y SK35SR.
Pasadores sellados de precisión que previenen la entrada de material abrasivo en los bujes internos.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '12',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-miniexcavadora-kobelco-sk45-sk55',
    nombre: 'Cadena para miniexcavadora Kobelco SK45 / SK55',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Kobelco SK45SR-2', 'Kobelco SK45SR-5', 'Kobelco SK55SR-5', 'Kobelco SK55SR-6E'],
    descripcion: `Cadena de alta durabilidad para miniexcavadoras Kobelco SK45SR y SK55SR.
Optimizada con mayor masa de desgaste en el eslabón para trabajos continuos de demolición y cimentación.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '15',
    referencia: ''
  },
  {
    slug: 'cadena-excavadora-kobelco-sk75-sk85',
    nombre: 'Cadena para excavadora compacta Kobelco SK75 / SK85',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Kobelco SK75SR-3', 'Kobelco SK75SR-7', 'Kobelco SK85MSR-3', 'Kobelco SK85MSR-7'],
    descripcion: `Cadena reforzada para excavadoras compactas Kobelco SK75SR y SK85MSR.
Estructura forjada que garantiza alineación perfecta en pendientes y terrenos inestables.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '14',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-kobelco-sk130-sk140',
    nombre: 'Cadena para excavadora Kobelco SK130 / SK140',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Kobelco SK130-8', 'Kobelco SK130LC-11', 'Kobelco SK140SR-3', 'Kobelco SK140SR-5', 'Kobelco SK140SR-7'],
    descripcion: `Cadena sellada y lubricada para excavadoras Kobelco SK130 y SK140SR.
Eslabones tratados por nitruración profunda para soportar fricción sostenida y esfuerzos axiales.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '18',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-kobelco-sk160-sk170',
    nombre: 'Cadena para excavadora Kobelco SK160 / SK170',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Kobelco SK160LC-6E', 'Kobelco SK170LC-8', 'Kobelco SK170LC-9', 'Kobelco SK170LC-10'],
    descripcion: `Cadena de acero forjado de alta resistencia para modelos Kobelco SK160LC y SK170LC.
Sistemas de retención de grasa sintética que evitan el sobrecalentamiento dinámico.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '11',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-kobelco-sk200-sk210',
    nombre: 'Cadena para excavadora Kobelco SK200 / SK210',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Kobelco SK200-6', 'Kobelco SK200-8', 'Kobelco SK210LC-6', 'Kobelco SK210LC-8', 'Kobelco SK210LC-9', 'Kobelco SK210LC-10', 'Kobelco SK210LC-11'],
    descripcion: `Cadena de rodaje pesada para excavadoras Kobelco series SK200 y SK210LC.
Eslabones de perfil ancho que reducen la presión específica sobre el suelo y evitan el estiramiento de paso.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '25',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-kobelco-sk230-sk250-sk260',
    nombre: 'Cadena para excavadora Kobelco SK230 / SK250 / SK260',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Kobelco SK230-6', 'Kobelco SK250LC-6', 'Kobelco SK260LC-8', 'Kobelco SK260LC-9', 'Kobelco SK260LC-10', 'Kobelco SK260LC-11'],
    descripcion: `Cadena sellada Heavy-Duty para excavadoras Kobelco SK230, SK250LC y SK260LC.
Excelente resiliencia mecánica frente a choque de materiales pesados y cantera.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '16',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-kobelco-sk290-sk300-sk330',
    nombre: 'Cadena para excavadora Kobelco SK290 / SK300 / SK330',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Kobelco SK290LC-6', 'Kobelco SK300LC-10', 'Kobelco SK330-6', 'Kobelco SK330LC-6E', 'Kobelco SK330LC-8'],
    descripcion: `Cadena de alto rendimiento para movimiento de tierras en Kobelco SK290LC, SK300LC y SK330LC.
Diseño rígido contra momentos flectores causados por virajes rápidos sobre superficies duras.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '13',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-kobelco-sk350-sk380',
    nombre: 'Cadena para excavadora Kobelco SK350 / SK380',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Kobelco SK350LC-8', 'Kobelco SK350LC-9', 'Kobelco SK350LC-10', 'Kobelco SK380D-9', 'Kobelco SK380D-10'],
    descripcion: `Cadena Heavy-Duty de gran resistencia estructural para excavadoras Kobelco SK350LC y SK380D.
Eslabones de acero bonificado concebidos para soportar uso continuado de martillo hidráulico.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '20',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-kobelco-sk460-sk480-sk500',
    nombre: 'Cadena para excavadora de minería Kobelco SK460 / SK480 / SK500',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Kobelco SK460-6', 'Kobelco SK480LC-6', 'Kobelco SK480LC-8', 'Kobelco SK500LC-9', 'Kobelco SK500LC-10', 'Kobelco SK520LC-10'],
    descripcion: `Cadena de rodaje minera para excavadoras pesadas Kobelco SK460, SK480, SK500LC y SK520LC.
Tratamiento profundo de la cara de rodadura para prevenir grietas bajo impacto en frentes de roca.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '9',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-kobelco-sk850',
    nombre: 'Cadena para excavadora de gran minería Kobelco SK850',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Kobelco SK850LC-8', 'Kobelco SK850LC-10'],
    descripcion: `Cadena de rodaje de ultra-pesado para minería a gran escala en excavadoras Kobelco SK850LC.
Pasadores y bujes con retención positiva y diseño blindado contra finos abrasivos.

Disponible bajo pedido. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: 'Por pedido',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-kobelco-sk210D-demolicion',
    nombre: 'Cadena reforzada para excavadora de demolición Kobelco SK210D / SK260D',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Kobelco SK210D-9', 'Kobelco SK210D-10', 'Kobelco SK260D-9', 'Kobelco SK260D-10'],
    descripcion: `Cadena de rodaje adaptada para modelos especiales de demolición Kobelco SK210D y SK260D.
Mayor dureza en los cantos del eslabón para resistir el impacto constante de escombros de concreto.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '14',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-kobelco-sk140-heavy-duty',
    nombre: 'Cadena pesada HD para excavadora Kobelco SK140SR-7',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Kobelco SK140SR-7', 'Kobelco SK140LC-11'],
    descripcion: `Cadena Heavy-Duty optimizada para la serie de última generación Kobelco SK140SR-7 y SK140LC-11.
Protección hermética que extiende la vida del lubricante interno durante jornadas prolongadas.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '10',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-kobelco-sk210-heavy-duty',
    nombre: 'Cadena pesada HD para excavadora Kobelco SK210LC-10 / SK210LC-11',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Kobelco SK210LC-10', 'Kobelco SK210LC-11', 'Kobelco SK220XD-10'],
    descripcion: `Cadena de rodaje Heavy-Duty desarrollada para los modelos Kobelco SK210LC-11 y la versión pesada SK220XD.
Eslabones reforzados para resistir alta tracción en aplicaciones exigentes.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '22',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-kobelco-sk350-heavy-duty',
    nombre: 'Cadena pesada HD para excavadora Kobelco SK350LC-10 / SK380XD',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Kobelco SK350LC-10', 'Kobelco SK380XD-10', 'Kobelco SK380XDLC-10'],
    descripcion: `Cadena pesada para la línea extra pesada (XD) Kobelco SK380XDLC-10 y SK350LC-10.
Casquillos de retención extendida que soportan altas cargas en canteras y excavación en roca.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '15',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-kobelco-sk500-heavy-duty',
    nombre: 'Cadena pesada HD para excavadora de minería Kobelco SK500LC-10 / SK520XD',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Kobelco SK500LC-10', 'Kobelco SK520XDLC-10'],
    descripcion: `Cadena de fuerza pesada para la excavadora de minería Kobelco SK520XDLC-10.
Superficie de rodadura forjada con inducción de alta penetración contra la abrasión severa.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '8',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-kobelco-mark-iv',
    nombre: 'Cadena para excavadora Kobelco serie MARK IV (SK200 / SK220)',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Kobelco SK200 MARK IV', 'Kobelco SK220 MARK IV', 'Kobelco SK250 MARK IV'],
    descripcion: `Cadena compatible con la línea clásica de excavadoras Kobelco MARK IV.
Cumple estrictamente con las especificaciones de ajuste y distancia entre pasadores del fabricante original.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '10',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-kobelco-mark-v',
    nombre: 'Cadena para excavadora Kobelco serie MARK V (SK200 / SK300)',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Kobelco SK200 MARK V', 'Kobelco SK210 MARK V', 'Kobelco SK300 MARK V'],
    descripcion: `Cadena de rodaje de repuesto para excavadoras Kobelco de la serie MARK V.
Construcción sellada que extiende la vida útil de los componentes del tren de rodaje.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '12',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-kobelco-sk260-heavy-duty',
    nombre: 'Cadena pesada HD para excavadora Kobelco SK260LC-10 / SK260LC-11',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Kobelco SK260LC-10', 'Kobelco SK260LC-11'],
    descripcion: `Cadena Heavy-Duty especificada para modelos recientes Kobelco SK260LC-10 y SK260LC-11.
Eslabones de espesor mayor para amortiguar el impacto lateral en maniobras estrechas.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '11',
    referencia: 'Catertrack'
  },
  // =========================================================================
  // KOBELCO - BLOQUE 2: POR REFERENCIA (APLICACIÓN GENÉRICA "EXCAVADORAS")
  // =========================================================================
  {
    slug: 'cadena-kobelco-yn52d00001f1',
    nombre: 'YN52D00001F1 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia YN52D00001F1, línea Kobelco, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '10',
    referencia: 'YN52D00001F1'
  },
  {
    slug: 'cadena-kobelco-lq52d00002f1',
    nombre: 'LQ52D00002F1 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia LQ52D00002F1, línea Kobelco, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '8',
    referencia: 'LQ52D00002F1'
  },
  {
    slug: 'cadena-kobelco-yv52d00001f1',
    nombre: 'YV52D00001F1 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia YV52D00001F1, línea Kobelco, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '12',
    referencia: 'YV52D00001F1'
  },
  {
    slug: 'cadena-kobelco-lc52d00001f1',
    nombre: 'LC52D00001F1 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia LC52D00001F1, línea Kobelco, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '15',
    referencia: 'LC52D00001F1'
  },
  {
    slug: 'cadena-kobelco-yc52d00001f1',
    nombre: 'YC52D00001F1 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia YC52D00001F1, línea Kobelco, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '18',
    referencia: 'YC52D00001F1'
  },
  {
    slug: 'cadena-kobelco-yn52d00008f1',
    nombre: 'YN52D00008F1 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia YN52D00008F1, línea Kobelco, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '14',
    referencia: 'YN52D00008F1'
  },
  {
    slug: 'cadena-kobelco-lq52d00005f1',
    nombre: 'LQ52D00005F1 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia LQ52D00005F1, línea Kobelco, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '9',
    referencia: 'LQ52D00005F1'
  },
  {
    slug: 'cadena-kobelco-lc52d00008f1',
    nombre: 'LC52D00008F1 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia LC52D00008F1, línea Kobelco, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '7',
    referencia: 'LC52D00008F1'
  },
  {
    slug: 'cadena-kobelco-yn52d00012f1',
    nombre: 'YN52D00012F1 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia YN52D00012F1, línea Kobelco, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '25',
    referencia: 'YN52D00012F1'
  },
  {
    slug: 'cadena-kobelco-lq52d00010f1',
    nombre: 'LQ52D00010F1 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia LQ52D00010F1, línea Kobelco, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '16',
    referencia: 'LQ52D00010F1'
  },
  {
    slug: 'cadena-kobelco-yv52d00005f1',
    nombre: 'YV52D00005F1 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia YV52D00005F1, línea Kobelco, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '11',
    referencia: 'YV52D00005F1'
  },
  {
    slug: 'cadena-kobelco-yc52d00005f1',
    nombre: 'YC52D00005F1 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia YC52D00005F1, línea Kobelco, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '8',
    referencia: 'YC52D00005F1'
  },
  {
    slug: 'cadena-kobelco-yn52d00018f1',
    nombre: 'YN52D00018F1 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia YN52D00018F1, línea Kobelco, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '20',
    referencia: 'YN52D00018F1'
  },
  {
    slug: 'cadena-kobelco-lq52d00015f1',
    nombre: 'LQ52D00015F1 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia LQ52D00015F1, línea Kobelco, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '15',
    referencia: 'LQ52D00015F1'
  },
  {
    slug: 'cadena-kobelco-lc52d00012f1',
    nombre: 'LC52D00012F1 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia LC52D00012F1, línea Kobelco, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '10',
    referencia: 'LC52D00012F1'
  },
  {
    slug: 'cadena-kobelco-yn52d00022f1',
    nombre: 'YN52D00022F1 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia YN52D00022F1, línea Kobelco, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '6',
    referencia: 'YN52D00022F1'
  },
  {
    slug: 'cadena-kobelco-lq52d00020f1',
    nombre: 'LQ52D00020F1 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia LQ52D00020F1, línea Kobelco, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible bajo pedido. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: 'Por pedido',
    referencia: 'LQ52D00020F1'
  },
  {
    slug: 'cadena-kobelco-yv52d00010f1',
    nombre: 'YV52D00010F1 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia YV52D00010F1, línea Kobelco, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible bajo pedido. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: 'Por pedido',
    referencia: 'YV52D00010F1'
  },
  {
    slug: 'cadena-kobelco-yc52d00010f1',
    nombre: 'YC52D00010F1 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia YC52D00010F1, línea Kobelco, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '11',
    referencia: 'YC52D00010F1'
  },
  {
    slug: 'cadena-kobelco-yn52d00025f1',
    nombre: 'YN52D00025F1 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia YN52D00025F1, línea Kobelco, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '13',
    referencia: 'YN52D00025F1'
  },
  // =========================================================================
  // DOOSAN / DEVELON - BLOQUE 1: POR APLICACIÓN Y MÁQUINA (SIN REFERENCIA)
  // =========================================================================
  {
    slug: 'cadena-miniexcavadora-doosan-dx19-dx27',
    nombre: 'Cadena para miniexcavadora Doosan DX19 / DX27',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Doosan DX19', 'Doosan DX27Z', 'Develon DX19', 'Develon DX27Z-7'],
    descripcion: `Cadena de eslabones de acero para miniexcavadoras Doosan y Develon DX19 y DX27Z.
Fabricada con aleaciones de alta resistencia al impacto para trabajos de excavación en espacios reducidos.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '10',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-miniexcavadora-doosan-dx35-dx55',
    nombre: 'Cadena para miniexcavadora Doosan DX35 / DX55',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Doosan DX35Z', 'Doosan DX50Z', 'Doosan DX55R-3', 'Develon DX35Z-7', 'Develon DX55R-7'],
    descripcion: `Cadena de tren de rodaje pesada para miniexcavadoras Doosan y Develon DX35Z y DX55R.
Pasadores sellados para evitar el desgaste prematuro por abrasivos en zanjeo continuo.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '12',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-doosan-dx62-dx85',
    nombre: 'Cadena para excavadora compacta Doosan DX62 / DX85',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Doosan DX62R-3', 'Doosan DX63-3', 'Doosan DX85R-3', 'Develon DX85R-7'],
    descripcion: `Cadena reforzada para excavadoras compactas Doosan y Develon DX62R, DX63 y DX85R.
Excelente rigidez estructural contra la torsión lateral en maniobras sobre pendientes.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '15',
    referencia: ''
  },
  {
    slug: 'cadena-excavadora-doosan-dx140-dx160',
    nombre: 'Cadena para excavadora Doosan DX140 / DX160',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Doosan DX140LC', 'Doosan DX140LC-3', 'Doosan DX140LC-5', 'Doosan DX160LC-3', 'Develon DX140LC-7'],
    descripcion: `Cadena sellada y lubricada para excavadoras Doosan y Develon DX140LC y DX160LC.
Eslabones forjados en caliente con nitruración profunda para extender la vida útil del rodaje.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '18',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-doosan-dx180-dx210',
    nombre: 'Cadena para excavadora Doosan DX180 / DX210',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Doosan DX180LC-3', 'Doosan DX180LC-5', 'Doosan DX210W', 'Develon DX210-7'],
    descripcion: `Cadena de rodaje de alto rendimiento para excavadoras Doosan DX180LC y DX210.
Diseño antidesgaste para prevenir el estiramiento del paso bajo severa tracción.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '14',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-doosan-dx225-dx235',
    nombre: 'Cadena para excavadora Doosan DX225 / DX235',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Doosan DX225LC', 'Doosan DX225LC-3', 'Doosan DX225LC-5', 'Doosan DX235NLC-5', 'Develon DX225LC-7'],
    descripcion: `Cadena pesada para excavadoras de 22 a 24 toneladas Doosan y Develon DX225LC y DX235NLC.
Construcción sellada con retenes sintéticos para garantizar la retención de grasa a altas temperaturas.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '25',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-doosan-dx255-dx300',
    nombre: 'Cadena para excavadora Doosan DX255 / DX300',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Doosan DX255LC-3', 'Doosan DX255LC-5', 'Doosan DX300LC', 'Doosan DX300LC-3', 'Doosan DX300LC-5', 'Develon DX300LC-7'],
    descripcion: `Cadena de fuerza para trabajo pesado en excavadoras Doosan y Develon DX255LC y DX300LC.
Gran tolerancia a esfuerzos flectores en terrenos pedregosos y aplicaciones de cantera.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '20',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-doosan-dx340-dx350-dx380',
    nombre: 'Cadena para excavadora Doosan DX340 / DX350 / DX380',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Doosan DX340LC', 'Doosan DX350LC-3', 'Doosan DX350LC-5', 'Doosan DX380LC-3', 'Doosan DX380LC-5', 'Develon DX350LC-7', 'Develon DX380LC-7'],
    descripcion: `Cadena Heavy-Duty de perfil reforzado para excavadoras Doosan y Develon DX340, DX350LC y DX380LC.
Eslabones de sección sobredimensionada capaces de soportar esfuerzos de martillo hidráulico.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '16',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-doosan-dx420-dx480-dx490',
    nombre: 'Cadena para excavadora de minería Doosan DX420 / DX480 / DX490',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Doosan DX420LC-3', 'Doosan DX480LC', 'Doosan DX490LC-3', 'Doosan DX490LC-5', 'Develon DX490LC-7'],
    descripcion: `Cadena de rodaje categoría minera para excavadoras Doosan y Develon DX420LC, DX480LC y DX490LC.
Máxima masa térmica y temple por inducción profunda contra grietas y desfragmentación por impacto.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '11',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-doosan-dx530-dx800',
    nombre: 'Cadena para excavadora de gran minería Doosan DX530 / DX800',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Doosan DX530LC-5', 'Doosan DX800LC-5', 'Develon DX530LC-7', 'Develon DX1000LC-7'],
    descripcion: `Cadena de ultra-pesado concebida para minería intensiva en modelos Doosan y Develon DX530, DX800LC y DX1000LC.
Pasadores retenidos hidráulicamente con blindaje antiasentamiento.

Disponible bajo pedido. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: 'Por pedido',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-doosan-solar-220-225',
    nombre: 'Cadena para excavadora Doosan Solar 220 / 225',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Doosan Solar 220LC-V', 'Doosan Solar 225LC-V', 'Daewoo Solar 220LC-III'],
    descripcion: `Cadena compatible con la serie clásica Doosan Daewoo Solar 220 y Solar 225.
Garantiza perfecto acoplamiento con las ruedas guías y sprockets originales de la serie Solar.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '13',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-doosan-solar-300-340',
    nombre: 'Cadena para excavadora Doosan Solar 300 / 340',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Doosan Solar 300LC-V', 'Doosan Solar 340LC-V', 'Daewoo Solar 330LC-V'],
    descripcion: `Cadena de eslabones pesados para excavadoras Daewoo Doosan Solar 300LC-V y 340LC-V.
Optimizada con mayor resistencia a la fatiga en ciclos severos de movimiento de tierras.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '10',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-doosan-dx225-heavy-duty',
    nombre: 'Cadena pesada HD para excavadora Doosan DX225LC-7 / DX235LC-7',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Develon DX225LC-7', 'Develon DX235LC-7', 'Doosan DX225LCA'],
    descripcion: `Cadena Heavy-Duty de especificación reforzada para modelos recientes Develon DX225LC-7 y DX235LC-7.
Sellado hermético contra finos abrasivos para extender los periodos de lubricación.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '19',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-doosan-dx300-heavy-duty',
    nombre: 'Cadena pesada HD para excavadora Doosan DX300LC-7 / DX350LC-7',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Develon DX300LC-7', 'Develon DX350LC-7', 'Doosan DX300LCA'],
    descripcion: `Cadena Heavy-Duty para unidades de gran volumen Develon DX300LC-7 y DX350LC-7.
Cara de rodadura tratada térmicamente para minimizar el juego lateral con los rodillos.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '15',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-doosan-dx490-heavy-duty',
    nombre: 'Cadena pesada HD para excavadora de minería Doosan DX490LC-7 / DX530LC-7',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Develon DX490LC-7', 'Develon DX530LC-7'],
    descripcion: `Cadena pesada de tracción minera para excavadoras Develon DX490LC-7 y DX530LC-7.
Estructura reforzada diseñada para resistir arrancamiento sobre bloques de roca fracturada.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '9',
    referencia: 'Catertrack'
  },
  // =========================================================================
  // DOOSAN / DEVELON - BLOQUE 2: POR REFERENCIA (SIN MOSTRAR MÁQUINAS)
  // =========================================================================
  {
    slug: 'cadena-doosan-2270-1049',
    nombre: '2270-1049 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 2270-1049, línea Doosan / Develon, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '10',
    referencia: '2270-1049'
  },
  {
    slug: 'cadena-doosan-2270-1050',
    nombre: '2270-1050 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 2270-1050, línea Doosan / Develon, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '8',
    referencia: '2270-1050'
  },
  {
    slug: 'cadena-doosan-2270-1062',
    nombre: '2270-1062 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 2270-1062, línea Doosan / Develon, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '12',
    referencia: '2270-1062'
  },
  {
    slug: 'cadena-doosan-2270-1075',
    nombre: '2270-1075 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 2270-1075, línea Doosan / Develon, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '15',
    referencia: '2270-1075'
  },
  {
    slug: 'cadena-doosan-2270-1088',
    nombre: '2270-1088 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 2270-1088, línea Doosan / Develon, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '18',
    referencia: '2270-1088'
  },
  {
    slug: 'cadena-doosan-2270-1090',
    nombre: '2270-1090 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 2270-1090, línea Doosan / Develon, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '14',
    referencia: '2270-1090'
  },
  {
    slug: 'cadena-doosan-104-00012',
    nombre: '104-00012 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 104-00012, línea Doosan / Develon, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '9',
    referencia: '104-00012'
  },
  {
    slug: 'cadena-doosan-104-00018',
    nombre: '104-00018 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 104-00018, línea Doosan / Develon, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '7',
    referencia: '104-00018'
  },
  {
    slug: 'cadena-doosan-104-00025',
    nombre: '104-00025 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 104-00025, línea Doosan / Develon, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '25',
    referencia: '104-00025'
  },
  {
    slug: 'cadena-doosan-104-00032',
    nombre: '104-00032 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 104-00032, línea Doosan / Develon, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '16',
    referencia: '104-00032'
  },
  {
    slug: 'cadena-doosan-104-00040',
    nombre: '104-00040 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 104-00040, línea Doosan / Develon, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '11',
    referencia: '104-00040'
  },
  {
    slug: 'cadena-doosan-104-00048',
    nombre: '104-00048 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 104-00048, línea Doosan / Develon, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible bajo pedido. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: 'Por pedido',
    referencia: '104-00048'
  },
  {
    slug: 'cadena-doosan-2270-1095',
    nombre: '2270-1095 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 2270-1095, línea Doosan / Develon, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '13',
    referencia: '2270-1095'
  },
  {
    slug: 'cadena-doosan-104-00055',
    nombre: '104-00055 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 104-00055, línea Doosan / Develon, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '10',
    referencia: '104-00055'
  },
  {
    slug: 'cadena-doosan-104-00060',
    nombre: '104-00060 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 104-00060, línea Doosan / Develon, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '8',
    referencia: '104-00060'
  },
  // =========================================================================
  // VOLVO - BLOQUE 1: POR APLICACIÓN Y MÁQUINA (REFERENCIA VACÍA / MARCA)
  // =========================================================================
  {
    slug: 'cadena-miniexcavadora-volvo-ec15-ec20',
    nombre: 'Cadena para miniexcavadora Volvo EC15 / EC20',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Volvo EC15', 'Volvo EC15D', 'Volvo EC18D', 'Volvo EC20D', 'Volvo EC20E'],
    descripcion: `Cadena de eslabones de acero tratada térmicamente para miniexcavadoras Volvo EC15, EC18 y EC20.
Diseño antidesgaste para operaciones continuas en espacio reducido y zanjeo urbano.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '10',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-miniexcavadora-volvo-ec25-ec35',
    nombre: 'Cadena para miniexcavadora Volvo EC25 / EC35',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Volvo EC27D', 'Volvo EC30M', 'Volvo ECR35D', 'Volvo EC35D'],
    descripcion: `Cadena de tren de rodaje de eslabones reforzados para miniexcavadoras Volvo EC27D, EC30 y EC35D.
Pasadores sellados de gran dureza que reducen la fricción y evitan el ingreso de abrasivos.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '12',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-miniexcavadora-volvo-ec55-ec60',
    nombre: 'Cadena para miniexcavadora Volvo EC55 / EC60',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Volvo EC55B', 'Volvo EC55C', 'Volvo ECR58D', 'Volvo EC60E'],
    descripcion: `Cadena de alta durabilidad para miniexcavadoras Volvo series EC55, ECR58D y EC60E.
Tratamiento por inducción térmica profunda para extender las horas de servicio sobre asfalto o roca.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '15',
    referencia: ''
  },
  {
    slug: 'cadena-excavadora-volvo-ecr88-ec80',
    nombre: 'Cadena para excavadora compacta Volvo ECR88 / EC80',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Volvo EC80D', 'Volvo ECR88D', 'Volvo ECR88 Plus'],
    descripcion: `Cadena pesada para excavadoras compactas Volvo EC80D y ECR88D.
Gran rigidez estructural que previene desalineaciones en giros sobre terrenos inestables.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '14',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-volvo-ec140-ec160',
    nombre: 'Cadena para excavadora Volvo EC140 / EC160',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Volvo EC140B', 'Volvo EC140C', 'Volvo EC140D', 'Volvo EC140E', 'Volvo ECR145E', 'Volvo EC160D', 'Volvo EC160E'],
    descripcion: `Cadena sellada y lubricada para excavadoras Volvo EC140, ECR145E y EC160.
Eslabones de acero forjado con nitruración profunda para soportar tracción pesada en obra civil.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '18',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-volvo-ec170-ec180',
    nombre: 'Cadena para excavadora Volvo EC170 / EC180',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Volvo EC170D', 'Volvo EC180D', 'Volvo EC180E'],
    descripcion: `Cadena de rodaje de alto rendimiento para modelos Volvo EC170D y EC180E.
Retención de pasadores optimizada que previene el alargamiento del paso en tareas exigentes.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '11',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-volvo-ec200-ec210-ec220',
    nombre: 'Cadena para excavadora Volvo EC200 / EC210 / EC220',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Volvo EC200D', 'Volvo EC210B', 'Volvo EC210C', 'Volvo EC210D', 'Volvo EC220D', 'Volvo EC220E', 'Volvo ECR235E'],
    descripcion: `Cadena sellada Heavy-Duty para excavadoras Volvo series EC200, EC210, EC220 y ECR235.
Sistemas de retención de grasa sintética que evitan fugas y garantizan durabilidad en canteras y excavaciones intensivas.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '25',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-volvo-ec240-ec250',
    nombre: 'Cadena para excavadora Volvo EC240 / EC250',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Volvo EC240B', 'Volvo EC240C', 'Volvo EC250D', 'Volvo EC250E'],
    descripcion: `Cadena de tracción reforzada para excavadoras Volvo EC240 y EC250.
Excelente absorción de impactos mecánicos causados por desmonte y trabajo en suelos rocosos.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '16',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-volvo-ec290-ec300',
    nombre: 'Cadena para excavadora Volvo EC290 / EC300',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Volvo EC290B', 'Volvo EC290C', 'Volvo EC300D', 'Volvo EC300E', 'Volvo ECR305C'],
    descripcion: `Cadena de rodaje pesada para movimiento de tierras en excavadoras Volvo EC290, EC300 y ECR305.
Cara de rodadura tratada térmicamente contra el desgaste severo de paso.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '20',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-volvo-ec330-ec340-ec350',
    nombre: 'Cadena para excavadora Volvo EC330 / EC340 / EC350',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Volvo EC330B', 'Volvo EC330C', 'Volvo EC340D', 'Volvo EC350E'],
    descripcion: `Cadena de perfil sobredimensionado para excavadoras Volvo EC330, EC340D y EC350E.
Optimizada para acoplamiento perfecto con zapatas pesadas y uso continuo de martillo hidráulico.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '13',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-volvo-ec360-ec380',
    nombre: 'Cadena para excavadora Volvo EC360 / EC380',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Volvo EC360B', 'Volvo EC360C', 'Volvo EC380D', 'Volvo EC380E', 'Volvo EC380EHR'],
    descripcion: `Cadena Heavy-Duty de máxima rigidez para excavadoras Volvo EC360 y EC380E.
Resistencia incrementada a la tracción y torsión en aplicaciones mineras y demolición pesada.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '15',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-volvo-ec460-ec480',
    nombre: 'Cadena para excavadora de minería Volvo EC460 / EC480',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Volvo EC460B', 'Volvo EC460C', 'Volvo EC480D', 'Volvo EC480E', 'Volvo EC480EHR'],
    descripcion: `Cadena de categoría minera para excavadoras pesadas Volvo EC460 y EC480.
Construcción forjada en acero aleado con dureza profunda que evita grietas por impacto en tajos de roca.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '9',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-volvo-ec530-ec550',
    nombre: 'Cadena para excavadora de minería Volvo EC530 / EC550',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Volvo EC530E', 'Volvo EC550E'],
    descripcion: `Cadena pesada HD concebida para la línea de gran tonelaje Volvo EC530E y EC550E.
Diseñada para maximizar la tracción sobre terreno escarpado y fracturado.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '7',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-volvo-ec700-ec750-ec950',
    nombre: 'Cadena para excavadora de gran minería Volvo EC700 / EC750 / EC950',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Volvo EC700B', 'Volvo EC700C', 'Volvo EC750D', 'Volvo EC750E', 'Volvo EC950E', 'Volvo EC950F'],
    descripcion: `Cadena de ultra-pesado para excavadoras de minería masiva Volvo EC700, EC750 y EC950.
Pasadores retenidos hidráulicamente y casquillos blindados diseñados para operar sin deformación bajo toneladas de empuje.

Disponible bajo pedido. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: 'Por pedido',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-volvo-ec210-heavy-duty',
    nombre: 'Cadena pesada HD para excavadora Volvo EC210 / EC220',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Volvo EC210B Prime', 'Volvo EC210D Heavy Duty', 'Volvo EC220E Heavy Duty'],
    descripcion: `Cadena Heavy-Duty especificada para las versiones de trabajo pesado de las excavadoras Volvo EC210D y EC220E.
Mayor profundidad en la superficie de desgaste del eslabón.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '22',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-volvo-ec380-heavy-duty',
    nombre: 'Cadena pesada HD para excavadora Volvo EC380D / EC380E',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Volvo EC380D HR', 'Volvo EC380E Heavy Duty'],
    descripcion: `Cadena de tracción extrema para excavadoras Volvo EC380E en configuración Heavy-Duty.
Protección de sellado hermético contra finos minerales abrasivos.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '14',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-volvo-ec480-heavy-duty',
    nombre: 'Cadena pesada HD para excavadora de minería Volvo EC480D / EC480E',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Volvo EC480D HR', 'Volvo EC480E Heavy Duty'],
    descripcion: `Cadena pesada de tracción minera para unidades de alto rendimiento Volvo EC480E Heavy Duty.
Casquillos y pasadores blindados para ciclos de trabajo continuo en canteras.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '8',
    referencia: 'Catertrack'
  },
  // =========================================================================
  // VOLVO - BLOQUE 2: POR REFERENCIA (APLICACIÓN GENÉRICA "EXCAVADORAS")
  // =========================================================================
  {
    slug: 'cadena-volvo-14525899',
    nombre: '14525899 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 14525899, línea Volvo, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '10',
    referencia: '14525899'
  },
  {
    slug: 'cadena-volvo-14525902',
    nombre: '14525902 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 14525902, línea Volvo, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '8',
    referencia: '14525902'
  },
  {
    slug: 'cadena-volvo-14531245',
    nombre: '14531245 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 14531245, línea Volvo, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '12',
    referencia: '14531245'
  },
  {
    slug: 'cadena-volvo-14531250',
    nombre: '14531250 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 14531250, línea Volvo, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '15',
    referencia: '14531250'
  },
  {
    slug: 'cadena-volvo-14531262',
    nombre: '14531262 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 14531262, línea Volvo, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '18',
    referencia: '14531262'
  },
  {
    slug: 'cadena-volvo-14531270',
    nombre: '14531270 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 14531270, línea Volvo, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '14',
    referencia: '14531270'
  },
  {
    slug: 'cadena-volvo-14531285',
    nombre: '14531285 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 14531285, línea Volvo, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '9',
    referencia: '14531285'
  },
  {
    slug: 'cadena-volvo-14531290',
    nombre: '14531290 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 14531290, línea Volvo, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '7',
    referencia: '14531290'
  },
  {
    slug: 'cadena-volvo-14531300',
    nombre: '14531300 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 14531300, línea Volvo, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '25',
    referencia: '14531300'
  },
  {
    slug: 'cadena-volvo-14531315',
    nombre: '14531315 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 14531315, línea Volvo, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '16',
    referencia: '14531315'
  },
  {
    slug: 'cadena-volvo-14531320',
    nombre: '14531320 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 14531320, línea Volvo, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '11',
    referencia: '14531320'
  },
  {
    slug: 'cadena-volvo-14531335',
    nombre: '14531335 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 14531335, línea Volvo, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '8',
    referencia: '14531335'
  },
  {
    slug: 'cadena-volvo-14531340',
    nombre: '14531340 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 14531340, línea Volvo, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible bajo pedido. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: 'Por pedido',
    referencia: '14531340'
  },
  {
    slug: 'cadena-volvo-14531350',
    nombre: '14531350 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 14531350, línea Volvo, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '13',
    referencia: '14531350'
  },
  {
    slug: 'cadena-volvo-14531365',
    nombre: '14531365 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 14531365, línea Volvo, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '10',
    referencia: '14531365'
  },
  {
    slug: 'cadena-volvo-14531370',
    nombre: '14531370 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 14531370, línea Volvo, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '8',
    referencia: '14531370'
  },
  // =========================================================================
  // JCB - BLOQUE 1: POR APLICACIÓN Y MÁQUINA (REFERENCIA VACÍA / MARCA)
  // =========================================================================
  {
    slug: 'cadena-miniexcavadora-jcb-15c-18z-19c',
    nombre: 'Cadena para miniexcavadora JCB 15C-1 / 18Z-1 / 19C-1',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['JCB 15C-1', 'JCB 16C-1', 'JCB 18Z-1', 'JCB 19C-1', 'JCB 8018'],
    descripcion: `Cadena de eslabones de acero tratada térmicamente para miniexcavadoras JCB 15C-1, 16C-1, 18Z-1 y 19C-1.
Estructura reforzada para minimizar el alargamiento del paso en trabajos urbanos y canalizaciones.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '10',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-miniexcavadora-jcb-8025-8030-8035',
    nombre: 'Cadena para miniexcavadora JCB 8025 / 8030 / 8035',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['JCB 8025 ZTS', 'JCB 8030 ZTS', 'JCB 8035 ZTS', 'JCB 30Plus', 'JCB 35Z-1'],
    descripcion: `Cadena de tren de rodaje de eslabones pesados para miniexcavadoras JCB 8025, 8030, 8035 ZTS y 35Z-1.
Pasadores y bujes forjados con sellado hermético contra abrasivos.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '12',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-miniexcavadora-jcb-50z-55z-8055',
    nombre: 'Cadena para miniexcavadora JCB 50Z / 55Z / 8055',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['JCB 50Z-1', 'JCB 55Z-1', 'JCB 57C-1', 'JCB 8055 RTS'],
    descripcion: `Cadena de alta durabilidad especificada para miniexcavadoras JCB 50Z-1, 55Z-1, 57C-1 y 8055 RTS.
Tratamiento de inducción profunda en la superficie de rodadura para extender la vida útil en suelos duros.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '15',
    referencia: ''
  },
  {
    slug: 'cadena-excavadora-jcb-8080-8085-85z',
    nombre: 'Cadena para excavadora compacta JCB 8080 / 8085 / 85Z',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['JCB 8080 ZTS', 'JCB 8085 ZTS', 'JCB 85Z-1', 'JCB 86C-1', 'JCB 90Z-1', 'JCB 100C-1'],
    descripcion: `Cadena reforzada para excavadoras de radio compacto JCB 8080, 8085, 85Z-1, 86C-1, 90Z-1 y 100C-1.
Excelente rigidez estructural contra torsión lateral en giros sobre pendientes.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '14',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-jcb-js130-js145',
    nombre: 'Cadena para excavadora JCB JS130 / JS145',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['JCB JS130', 'JCB JS130LC', 'JCB JS145', 'JCB JS145LC', 'JCB JZ140'],
    descripcion: `Cadena sellada y lubricada para excavadoras JCB JS130, JS145 y JZ140.
Eslabones de acero forjado con nitruración profunda para evitar el desgaste prematuro de paso en obra civil.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '18',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-jcb-js160-js180',
    nombre: 'Cadena para excavadora JCB JS160 / JS180',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['JCB JS160', 'JCB JS160LC', 'JCB JS180', 'JCB JS180LC'],
    descripcion: `Cadena de rodaje de alto rendimiento para excavadoras JCB JS160 y JS180.
Retención de pasadores optimizada que tolera variaciones térmicas y altas presiones de tracción.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '11',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-jcb-js200-js210-js220',
    nombre: 'Cadena para excavadora JCB JS200 / JS210 / JS220',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['JCB JS200', 'JCB JS200LC', 'JCB JS210', 'JCB JS210LC', 'JCB JS220', 'JCB JS220LC', 'JCB JS220XD'],
    descripcion: `Cadena sellada y lubricada Heavy-Duty para excavadoras JCB series JS200, JS210 y JS220.
Sistemas de retención de grasa sintética que garantizan máxima vida útil en canteras y movimiento de tierras.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '25',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-jcb-js240-js260',
    nombre: 'Cadena para excavadora JCB JS240 / JS260',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['JCB JS240', 'JCB JS240LC', 'JCB JS260', 'JCB JS260LC', 'JCB JS260XD'],
    descripcion: `Cadena pesada para excavadoras de 24 a 26 toneladas JCB JS240 y JS260.
Construcción en aleación de acero forjado de alta resiliencia mecánica frente a choques severos.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '16',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-jcb-js290-js330-js360',
    nombre: 'Cadena para excavadora JCB JS290 / JS330 / JS360',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['JCB JS290LC', 'JCB JS330', 'JCB JS330LC', 'JCB JS360', 'JCB JS360LC', 'JCB JS370'],
    descripcion: `Cadena de rodaje pesada para excavadoras JCB JS290, JS330, JS360 y JS370.
Eslabones de perfil alto con temple profundo concebidos para aplicaciones exigentes y desmonte.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '20',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-jcb-js380-js460-js500',
    nombre: 'Cadena para excavadora de minería JCB JS380 / JS460 / JS500',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['JCB JS380', 'JCB JS380LC', 'JCB JS460', 'JCB JS460LC', 'JCB JS500'],
    descripcion: `Cadena de categoría minera para excavadoras de gran tonelaje JCB JS380, JS460 y JS500.
Estructura forjada en sección sobredimensionada para resistir grietas y deformación en tajos de roca dura.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '9',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-jcb-131x-140x-150x',
    nombre: 'Cadena para excavadora JCB 131X / 140X / 150X (X-Series)',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['JCB 131X', 'JCB 140X', 'JCB 140X LC', 'JCB 150X', 'JCB 150X LC'],
    descripcion: `Cadena pesada para la nueva generación JCB X-Series modelos 131X, 140X y 150X.
Ingeniería de sellado mejorada que garantiza nula fuga de lubricante dinámico durante largas jornadas.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '14',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-jcb-210x-220x-245xr',
    nombre: 'Cadena para excavadora JCB 210X / 220X / 245XR (X-Series)',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['JCB 210X', 'JCB 220X', 'JCB 220X LC', 'JCB 245XR'],
    descripcion: `Cadena Heavy-Duty desarrollada para excavadoras de última generación JCB 210X, 220X y 245XR.
Eslabones reforzados para absorber esfuerzos flectores extremos en excavación y demolición.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '22',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-jcb-220xd-heavy-duty',
    nombre: 'Cadena pesada HD para excavadora JCB JS220XD / 220X Heavy Duty',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['JCB JS220XD', 'JCB 220X HD', 'JCB JS220X Heavy Duty'],
    descripcion: `Cadena de rodaje especificada para las variantes de extrema dureza JCB JS220XD y 220X Heavy Duty.
Superficie de rodadura con alta dureza de capa que reduce el desgaste con los rodillos.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '15',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-jcb-js330xd-heavy-duty',
    nombre: 'Cadena pesada HD para excavadora JCB JS330XD / JS370XD',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['JCB JS330XD', 'JCB JS360XD', 'JCB JS370XD'],
    descripcion: `Cadena de tracción minera para modelos pesados JCB JS330XD, JS360XD y JS370XD.
Pasadores y casquillos blindados diseñados para operar sin deformación en cantera abierta.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '10',
    referencia: 'Catertrack'
  },
  // =========================================================================
  // JCB - BLOQUE 2: POR REFERENCIA (APLICACIÓN GENÉRICA "EXCAVADORAS")
  // =========================================================================
  {
    slug: 'cadena-jcb-jba0043',
    nombre: 'JBA0043 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia JBA0043, línea JCB, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '10',
    referencia: 'JBA0043'
  },
  {
    slug: 'cadena-jcb-jba0088',
    nombre: 'JBA0088 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia JBA0088, línea JCB, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '8',
    referencia: 'JBA0088'
  },
  {
    slug: 'cadena-jcb-jba0112',
    nombre: 'JBA0112 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia JBA0112, línea JCB, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '12',
    referencia: 'JBA0112'
  },
  {
    slug: 'cadena-jcb-jba0150',
    nombre: 'JBA0150 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia JBA0150, línea JCB, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '15',
    referencia: 'JBA0150'
  },
  {
    slug: 'cadena-jcb-jba0195',
    nombre: 'JBA0195 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia JBA0195, línea JCB, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '18',
    referencia: 'JBA0195'
  },
  {
    slug: 'cadena-jcb-jba0220',
    nombre: 'JBA0220 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia JBA0220, línea JCB, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '14',
    referencia: 'JBA0220'
  },
  {
    slug: 'cadena-jcb-jba0260',
    nombre: 'JBA0260 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia JBA0260, línea JCB, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '9',
    referencia: 'JBA0260'
  },
  {
    slug: 'cadena-jcb-jba0330',
    nombre: 'JBA0330 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia JBA0330, línea JCB, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '7',
    referencia: 'JBA0330'
  },
  {
    slug: 'cadena-jcb-331-14500',
    nombre: '331/14500 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 331/14500, línea JCB, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '25',
    referencia: '331/14500'
  },
  {
    slug: 'cadena-jcb-331-14510',
    nombre: '331/14510 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 331/14510, línea JCB, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '16',
    referencia: '331/14510'
  },
  {
    slug: 'cadena-jcb-331-14525',
    nombre: '331/14525 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 331/14525, línea JCB, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '11',
    referencia: '331/14525'
  },
  {
    slug: 'cadena-jcb-331-14540',
    nombre: '331/14540 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 331/14540, línea JCB, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible bajo pedido. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: 'Por pedido',
    referencia: '331/14540'
  },
  {
    slug: 'cadena-jcb-jba0225',
    nombre: 'JBA0225 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia JBA0225, línea JCB, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '13',
    referencia: 'JBA0225'
  },
  {
    slug: 'cadena-jcb-jba0335',
    nombre: 'JBA0335 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia JBA0335, línea JCB, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '10',
    referencia: 'JBA0335'
  },
  // =========================================================================
  // CASE / NEW HOLLAND - BLOQUE 1: POR APLICACIÓN Y MÁQUINA (SIN REFERENCIA)
  // =========================================================================
  {
    slug: 'cadena-miniexcavadora-case-cx17-cx26',
    nombre: 'Cadena para miniexcavadora Case CX17 / CX26 / New Holland E18',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Case CX17C', 'Case CX18C', 'Case CX26C', 'New Holland E17C', 'New Holland E18B', 'New Holland E26C'],
    descripcion: `Cadena de eslabones de acero para miniexcavadoras Case y New Holland series CX17C, CX26C y E18.
Tratamiento térmico superficial para mitigar la abrasión y el estiramiento en canalizaciones y urbanismo.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '10',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-miniexcavadora-case-cx30-cx37',
    nombre: 'Cadena para miniexcavadora Case CX30 / CX37 / New Holland E37',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Case CX30C', 'Case CX37C', 'New Holland E30B', 'New Holland E37C'],
    descripcion: `Cadena pesada para miniexcavadoras Case y New Holland CX30C, CX37C y E37C.
Pasadores sellados de precisión que bloquean el ingreso de finos abrasivos durante zanjeo intensivo.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '12',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-miniexcavadora-case-cx57-cx60',
    nombre: 'Cadena para miniexcavadora Case CX57 / CX60 / New Holland E57',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Case CX57C', 'Case CX60C', 'New Holland E57C', 'New Holland E60C'],
    descripcion: `Cadena reforzada de alta durabilidad para miniexcavadoras Case CX57C, CX60C y New Holland E57C.
Mayor espesor en el eslabón para amortiguar el impacto continuo en tareas de cimentación y demolición.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '15',
    referencia: ''
  },
  {
    slug: 'cadena-excavadora-case-cx75-cx80',
    nombre: 'Cadena para excavadora compacta Case CX75 / CX80 / New Holland E75',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Case CX75C', 'Case CX75D', 'Case CX80C', 'Case CX80D', 'New Holland E75C', 'New Holland E80C'],
    descripcion: `Cadena de tren de rodaje para excavadoras compactas Case CX75, CX80 y New Holland E80.
Alta rigidez torsional para giros continuos en espacios reducidos sobre rasantes irregulares.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '14',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-case-cx130-cx145',
    nombre: 'Cadena para excavadora Case CX130 / CX145 / New Holland E135',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Case CX130B', 'Case CX130C', 'Case CX130D', 'Case CX145C', 'Case CX145D', 'New Holland E135B', 'New Holland E145'],
    descripcion: `Cadena sellada y lubricada para excavadoras Case y New Holland de las series CX130, CX145 y E135.
Pasadores nitrurados para evitar el desgaste prematuro de paso bajo tracción constante.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '18',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-case-cx160-cx180',
    nombre: 'Cadena para excavadora Case CX160 / CX180 / New Holland E175',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Case CX160B', 'Case CX160C', 'Case CX160D', 'Case CX180C', 'Case CX180D', 'New Holland E175B', 'New Holland E195'],
    descripcion: `Cadena de rodaje forjada en acero especial para modelos Case CX160, CX180 y New Holland E175B.
Excelente estabilidad dimensional ante cargas de flexión e impacto en excavaciones profundas.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '11',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-case-cx210-cx220',
    nombre: 'Cadena para excavadora Case CX210 / CX220 / New Holland E215',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Case CX210B', 'Case CX210C', 'Case CX210D', 'Case CX210E', 'Case CX220C', 'New Holland E215B', 'New Holland E215C'],
    descripcion: `Cadena sellada Heavy-Duty para excavadoras Case CX210, CX220 y New Holland E215.
Sistemas de retención de grasa sintética que alargan la durabilidad bajo jornadas pesadas de cantera.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '25',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-case-cx240-cx250',
    nombre: 'Cadena para excavadora Case CX240 / CX250 / New Holland E245',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Case CX240B', 'Case CX240C', 'Case CX250C', 'Case CX250D', 'Case CX250E', 'New Holland E245B', 'New Holland E265B'],
    descripcion: `Cadena de rodaje de alta tracción para excavadoras Case CX240, CX250 y New Holland E245B.
Eslabones pesados diseñados para absorber esfuerzos laterales sin deformación de los bujes.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '16',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-case-cx290-cx300',
    nombre: 'Cadena para excavadora Case CX290 / CX300 / New Holland E305',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Case CX290B', 'Case CX300C', 'Case CX300D', 'New Holland E305B', 'New Holland E305C'],
    descripcion: `Cadena de fuerza pesada para movimiento de tierras en excavadoras Case CX290, CX300 y New Holland E305.
Procesada térmicamente con endurecimiento profundo contra la abrasión del terreno.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '20',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-case-cx350-cx370',
    nombre: 'Cadena para excavadora Case CX350 / CX370 / New Holland E385',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Case CX350B', 'Case CX350C', 'Case CX350D', 'Case CX370C', 'Case CX370D', 'New Holland E385B', 'New Holland E385C'],
    descripcion: `Cadena Heavy-Duty de perfil sobredimensionado para excavadoras Case CX350, CX370 y New Holland E385.
Alta resiliencia mecánica optimizada para operar con martillos hidráulicos y trabajo en roca.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '13',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-case-cx470-cx490',
    nombre: 'Cadena para excavadora de minería Case CX470 / CX490 / New Holland E485',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Case CX470B', 'Case CX470C', 'Case CX490D', 'Case CX500D', 'New Holland E485B'],
    descripcion: `Cadena de categoría minera para excavadoras pesadas Case CX470, CX490, CX500D y New Holland E485B.
Construcción en aleación de acero tratada por inducción profunda contra desfragmentación por impacto.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '9',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-case-cx700-cx800',
    nombre: 'Cadena para excavadora de gran minería Case CX700 / CX800',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Case CX700B', 'Case CX800B'],
    descripcion: `Cadena de rodaje de ultra-pesado concebida para minería masiva en excavadoras Case CX700 y CX800.
Pasadores con retención hidráulica y casquillos blindados para cargas dinámicas extremas.

Disponible bajo pedido. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: 'Por pedido',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-case-cx210D-heavy-duty',
    nombre: 'Cadena pesada HD para excavadora Case CX210D / CX220D',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Case CX210D Heavy Duty', 'Case CX220D Heavy Duty', 'Case CX210E Heavy Duty'],
    descripcion: `Cadena Heavy-Duty especificada para las configuraciones pesadas de las excavadoras Case serie D y E.
Retención de aceite interna reforzada para minimizar paradas por mantenimiento.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '22',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-case-cx350D-heavy-duty',
    nombre: 'Cadena pesada HD para excavadora Case CX350D / CX370D',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Case CX350D HR', 'Case CX370D Heavy Duty'],
    descripcion: `Cadena pesada de tracción en cantera para modelos Case CX350D y CX370D Heavy Duty.
Cara de rodadura tratada para prolongar la vida útil en contacto con los rodillos.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '14',
    referencia: 'Catertrack'
  },
  // =========================================================================
  // CASE / NEW HOLLAND - BLOQUE 2: POR REFERENCIA (APLICACIÓN GENÉRICA)
  // =========================================================================
  {
    slug: 'cadena-case-khj0538',
    nombre: 'KHJ0538 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia KHJ0538, línea Case / New Holland, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '10',
    referencia: 'KHJ0538'
  },
  {
    slug: 'cadena-case-khj0620',
    nombre: 'KHJ0620 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia KHJ0620, línea Case / New Holland, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '8',
    referencia: 'KHJ0620'
  },
  {
    slug: 'cadena-case-khj0745',
    nombre: 'KHJ0745 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia KHJ0745, línea Case / New Holland, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '12',
    referencia: 'KHJ0745'
  },
  {
    slug: 'cadena-case-khj0890',
    nombre: 'KHJ0890 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia KHJ0890, línea Case / New Holland, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '15',
    referencia: 'KHJ0890'
  },
  {
    slug: 'cadena-case-khj1020',
    nombre: 'KHJ1020 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia KHJ1020, línea Case / New Holland, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '18',
    referencia: 'KHJ1020'
  },
  {
    slug: 'cadena-case-khj1150',
    nombre: 'KHJ1150 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia KHJ1150, línea Case / New Holland, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '14',
    referencia: 'KHJ1150'
  },
  {
    slug: 'cadena-case-khj1280',
    nombre: 'KHJ1280 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia KHJ1280, línea Case / New Holland, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '9',
    referencia: 'KHJ1280'
  },
  {
    slug: 'cadena-case-khj1350',
    nombre: 'KHJ1350 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia KHJ1350, línea Case / New Holland, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '7',
    referencia: 'KHJ1350'
  },
  {
    slug: 'cadena-case-87428688',
    nombre: '87428688 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 87428688, línea Case / New Holland, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '25',
    referencia: '87428688'
  },
  {
    slug: 'cadena-case-87428695',
    nombre: '87428695 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 87428695, línea Case / New Holland, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '16',
    referencia: '87428695'
  },
  {
    slug: 'cadena-case-87428710',
    nombre: '87428710 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 87428710, línea Case / New Holland, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '11',
    referencia: '87428710'
  },
  {
    slug: 'cadena-case-87428725',
    nombre: '87428725 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 87428725, línea Case / New Holland, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible bajo pedido. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: 'Por pedido',
    referencia: '87428725'
  },
  {
    slug: 'cadena-case-khj1025',
    nombre: 'KHJ1025 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia KHJ1025, línea Case / New Holland, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '13',
    referencia: 'KHJ1025'
  },
  {
    slug: 'cadena-case-khj1355',
    nombre: 'KHJ1355 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia KHJ1355, línea Case / New Holland, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '10',
    referencia: 'KHJ1355'
  },
  // =========================================================================
  // SANY - BLOQUE 1: POR APLICACIÓN Y MÁQUINA (REFERENCIA VACÍA / MARCA)
  // =========================================================================
  {
    slug: 'cadena-miniexcavadora-sany-sy16-sy26',
    nombre: 'Cadena para miniexcavadora Sany SY16 / SY26',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Sany SY16C', 'Sany SY26U'],
    descripcion: `Cadena de eslabones de acero para miniexcavadoras Sany SY16C y SY26U.
Construcción sellada y aleación de alta dureza para minimizar el estiramiento en labores de zanjeo urbano.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '10',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-miniexcavadora-sany-sy35-sy50-sy55',
    nombre: 'Cadena para miniexcavadora Sany SY35 / SY50 / SY55',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Sany SY35U', 'Sany SY50U', 'Sany SY55C'],
    descripcion: `Cadena pesada para miniexcavadoras Sany SY35U, SY50U y SY55C.
Pasadores y bujes con tratamiento térmico profundo contra la tracción abrasiva continua.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '12',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-sany-sy75-sy80-sy95',
    nombre: 'Cadena para excavadora compacta Sany SY75 / SY80 / SY95',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Sany SY75C', 'Sany SY80U', 'Sany SY95C'],
    descripcion: `Cadena reforzada de tren de rodaje para excavadoras compactas Sany SY75C, SY80U y SY95C.
Gran rigidez torsional para resistir variaciones de carga en terrenos pedregosos.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '15',
    referencia: ''
  },
  {
    slug: 'cadena-excavadora-sany-sy135-sy155',
    nombre: 'Cadena para excavadora Sany SY135 / SY155',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Sany SY135C', 'Sany SY155U', 'Sany SY155H'],
    descripcion: `Cadena sellada y lubricada para excavadoras Sany SY135C y SY155U.
Eslabones de acero forjado con nitruración profunda para evitar el desgaste en obras civiles.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '18',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-sany-sy215-sy225',
    nombre: 'Cadena para excavadora Sany SY215 / SY225',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Sany SY215C', 'Sany SY215C-9', 'Sany SY215C-10', 'Sany SY225C'],
    descripcion: `Cadena Heavy-Duty para excavadoras Sany de la serie SY215 y SY225C.
Sistemas de retención de grasa sintética que alargan la durabilidad bajo jornadas pesadas de cantera.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '25',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-sany-sy245-sy265',
    nombre: 'Cadena para excavadora Sany SY245 / SY265',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Sany SY245H', 'Sany SY265C'],
    descripcion: `Cadena de rodaje pesada para excavadoras Sany SY245H y SY265C.
Diseño con retención de pasadores optimizada que soporta fuerzas laterales de giro.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '14',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-sany-sy305-sy335-sy365',
    nombre: 'Cadena para excavadora Sany SY305 / SY335 / SY365',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Sany SY305H', 'Sany SY335C', 'Sany SY365H'],
    descripcion: `Cadena de fuerza de tracción para excavadoras de gran tonelaje Sany SY305H, SY335C y SY365H.
Eslabones de perfil sobredimensionado concebidos para aplicaciones exigentes y martillo hidráulico.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '20',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-sany-sy385-sy500',
    nombre: 'Cadena para excavadora de minería Sany SY385 / SY500',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Sany SY385H', 'Sany SY500H'],
    descripcion: `Cadena de categoría minera para excavadoras pesadas Sany SY385H y SY500H.
Tratamiento de temple por inducción profunda para prevenir grietas por impacto en tajos de roca dura.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '9',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-sany-sy750-sy980',
    nombre: 'Cadena para excavadora de gran minería Sany SY750 / SY980',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Sany SY750H', 'Sany SY980H'],
    descripcion: `Cadena de rodaje de ultra-pesado concebida para minería masiva en excavadoras Sany SY750H y SY980H.
Pasadores retenidos hidráulicamente con blindaje antiasentamiento.

Disponible bajo pedido. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: 'Por pedido',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-sany-sy215-heavy-duty',
    nombre: 'Cadena pesada HD para excavadora Sany SY215C Heavy Duty',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Sany SY215C HD', 'Sany SY215C-10 HD'],
    descripcion: `Cadena Heavy-Duty especificada para las configuraciones pesadas de excavadoras Sany SY215C.
Mayor espesor en la cara de rodadura para amortiguar el desgaste con los rodillos.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '22',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-sany-sy365-heavy-duty',
    nombre: 'Cadena pesada HD para excavadora Sany SY365H Heavy Duty',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Sany SY365H HD'],
    descripcion: `Cadena pesada de tracción en cantera para modelos Sany SY365H Heavy Duty.
Casquillos y pasadores reforzados para ciclos de trabajo continuo en canteras.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '14',
    referencia: 'Catertrack'
  },
  // =========================================================================
  // SANY - BLOQUE 2: POR REFERENCIA (APLICACIÓN GENÉRICA "EXCAVADORAS")
  // =========================================================================
  {
    slug: 'cadena-sany-11235804',
    nombre: '11235804 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 11235804, línea Sany, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '10',
    referencia: '11235804'
  },
  {
    slug: 'cadena-sany-11235810',
    nombre: '11235810 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 11235810, línea Sany, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '8',
    referencia: '11235810'
  },
  {
    slug: 'cadena-sany-11235825',
    nombre: '11235825 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 11235825, línea Sany, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '12',
    referencia: '11235825'
  },
  {
    slug: 'cadena-sany-11235840',
    nombre: '11235840 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 11235840, línea Sany, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '15',
    referencia: '11235840'
  },
  {
    slug: 'cadena-sany-11235860',
    nombre: '11235860 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 11235860, línea Sany, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '18',
    referencia: '11235860'
  },
  {
    slug: 'cadena-sany-11235880',
    nombre: '11235880 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 11235880, línea Sany, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '14',
    referencia: '11235880'
  },
  {
    slug: 'cadena-sany-11235900',
    nombre: '11235900 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 11235900, línea Sany, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '9',
    referencia: '11235900'
  },
  {
    slug: 'cadena-sany-11235920',
    nombre: '11235920 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 11235920, línea Sany, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '7',
    referencia: '11235920'
  },
  {
    slug: 'cadena-sany-60124890',
    nombre: '60124890 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 60124890, línea Sany, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '25',
    referencia: '60124890'
  },
  {
    slug: 'cadena-sany-60124905',
    nombre: '60124905 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 60124905, línea Sany, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '16',
    referencia: '60124905'
  },
  {
    slug: 'cadena-sany-60124920',
    nombre: '60124920 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 60124920, línea Sany, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '11',
    referencia: '60124920'
  },
  {
    slug: 'cadena-sany-60124935',
    nombre: '60124935 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 60124935, línea Sany, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible bajo pedido. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: 'Por pedido',
    referencia: '60124935'
  },
  // =========================================================================
  // HYUNDAI - BLOQUE 1: POR APLICACIÓN Y MÁQUINA (REFERENCIA VACÍA / MARCA)
  // =========================================================================
  {
    slug: 'cadena-miniexcavadora-hyundai-r16-r27-hx10',
    nombre: 'Cadena para miniexcavadora Hyundai R16 / R27 / HX10',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Hyundai R16-9', 'Hyundai R25Z-9AK', 'Hyundai R27Z-9', 'Hyundai HX10A', 'Hyundai HX18A'],
    descripcion: `Cadena de eslabones de acero para miniexcavadoras Hyundai R16, R25, R27Z, HX10A y HX18A.
Fabricada con aleación de alta resiliencia tratada térmicamente para evitar el desgaste por fricción urbana.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '10',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-miniexcavadora-hyundai-r35-r55-hx35',
    nombre: 'Cadena para miniexcavadora Hyundai R35 / R55 / HX35',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Hyundai R35Z-9', 'Hyundai R55-9', 'Hyundai R60CR-9', 'Hyundai HX35A', 'Hyundai HX50A'],
    descripcion: `Cadena de tren de rodaje de eslabones reforzados para miniexcavadoras Hyundai R35Z, R55, R60 y serie HX-A.
Pasadores sellados para evitar el desgaste acelerado del paso en labores de zanjeo continuo.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '12',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-hyundai-r80-hx85',
    nombre: 'Cadena para excavadora compacta Hyundai R80 / HX85',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Hyundai R80CR-9', 'Hyundai R80-9A', 'Hyundai HX85A'],
    descripcion: `Cadena reforzada para excavadoras compactas Hyundai R80CR, R80-9A y HX85A.
Elevada rigidez torsional que garantiza resistencia durante giros continuos en superficies inclinadas.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '15',
    referencia: ''
  },
  {
    slug: 'cadena-excavadora-hyundai-r140-hx140',
    nombre: 'Cadena para excavadora Hyundai R140 / HX140',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Hyundai R140LC-7', 'Hyundai R140LC-9', 'Hyundai R140LC-9A', 'Hyundai HX140', 'Hyundai HX140L', 'Hyundai HX140A'],
    descripcion: `Cadena sellada y lubricada para excavadoras Hyundai R140LC y HX140L.
Eslabones de acero forjado con nitruración profunda para soportar trabajo continuo en obra civil.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '18',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-hyundai-r160-r180-hx160',
    nombre: 'Cadena para excavadora Hyundai R160 / R180 / HX160',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Hyundai R160LC-9', 'Hyundai R180LC-9', 'Hyundai HX160L', 'Hyundai HX180L'],
    descripcion: `Cadena de rodaje forjada en caliente para modelos Hyundai R160LC, R180LC, HX160L y HX180L.
Protección hermética que asegura máxima retención del lubricante bajo variaciones térmicas.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '11',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-hyundai-r210-r220-hx220',
    nombre: 'Cadena para excavadora Hyundai R210 / R220 / HX220',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Hyundai R210LC-7', 'Hyundai R210LC-9', 'Hyundai R220LC-9', 'Hyundai R220LC-9A', 'Hyundai HX220L', 'Hyundai HX220AL'],
    descripcion: `Cadena sellada Heavy-Duty para excavadoras Hyundai series Robex 210, 220 y HX220.
Sistemas de sellado mejorados para canteras y excavaciones de gran volumen de tierra.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '25',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-hyundai-r250-r260-hx260',
    nombre: 'Cadena para excavadora Hyundai R250 / R260 / HX260',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Hyundai R250LC-7', 'Hyundai R260LC-9', 'Hyundai HX260L', 'Hyundai HX260AL'],
    descripcion: `Cadena de fuerza para excavadoras de 25 a 26 toneladas Hyundai R250LC, R260LC y HX260L.
Construcción sellada con retenes sintéticos que minimizan el juego lateral del pasador.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '16',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-hyundai-r290-r300-hx300',
    nombre: 'Cadena para excavadora Hyundai R290 / R300 / HX300',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Hyundai R290LC-7', 'Hyundai R300LC-9', 'Hyundai R300LC-9A', 'Hyundai HX300L', 'Hyundai HX300AL'],
    descripcion: `Cadena pesada para movimiento de tierras en excavadoras Hyundai R290LC, R300LC y HX300L.
Eslabones tratadas térmicamente con temple de capa profunda contra la abrasión del terreno.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '20',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-hyundai-r330-r380-hx380',
    nombre: 'Cadena para excavadora Hyundai R330 / R380 / HX380',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Hyundai R330LC-9', 'Hyundai R380LC-9', 'Hyundai R380LC-9A', 'Hyundai HX380L', 'Hyundai HX380AL'],
    descripcion: `Cadena Heavy-Duty de perfil sobredimensionado para excavadoras Hyundai R330, R380LC y HX380L.
Optimizada para acoplamiento con zapatas pesadas en trabajos de desmonte y martillo hidráulico.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '13',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-hyundai-r480-r520-hx480-hx520',
    nombre: 'Cadena para excavadora de minería Hyundai R480 / R520 / HX480 / HX520',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Hyundai R480LC-9', 'Hyundai R520LC-9', 'Hyundai HX480L', 'Hyundai HX520L', 'Hyundai HX520AL'],
    descripcion: `Cadena de categoría minera para excavadoras de gran tonelaje Hyundai R480, R520 y HX520L.
Construcción en aleación de acero forjado con dureza profunda que previene grietas en frentes de roca dura.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '9',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-hyundai-r800-hx900',
    nombre: 'Cadena para excavadora de gran minería Hyundai R800 / HX900',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Hyundai R800LC-9', 'Hyundai HX900L'],
    descripcion: `Cadena de rodaje de ultra-pesado concebida para minería masiva en excavadoras Hyundai R800LC y HX900L.
Pasadores retenidos hidráulicamente con casquillos blindados diseñados para operar sin deformación.

Disponible bajo pedido. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: 'Por pedido',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-hyundai-r220-heavy-duty',
    nombre: 'Cadena pesada HD para excavadora Hyundai R220LC-9 / HX220 Heavy Duty',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Hyundai R220LC-9 HD', 'Hyundai HX220L Heavy Duty', 'Hyundai HX220AL Heavy Duty'],
    descripcion: `Cadena Heavy-Duty especificada para las configuraciones de trabajo pesado Hyundai R220LC-9 y HX220L.
Superficie de rodadura reforzada para mitigar el desgaste con los rodillos en terrenos rocosos.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '22',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-hyundai-hx380-heavy-duty',
    nombre: 'Cadena pesada HD para excavadora Hyundai HX380 / HX400 Heavy Duty',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Hyundai HX380L HD', 'Hyundai HX400A Heavy Duty'],
    descripcion: `Cadena pesada para excavación en canteras de alta abrasión para modelos Hyundai HX380L y HX400A.
Casquillos y pasadores blindados para ciclos de trabajo continuo.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '14',
    referencia: 'Catertrack'
  },
  // =========================================================================
  // HYUNDAI - BLOQUE 2: POR REFERENCIA (APLICACIÓN GENÉRICA "EXCAVADORAS")
  // =========================================================================
  {
    slug: 'cadena-hyundai-81e3-2001',
    nombre: '81E3-2001 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 81E3-2001, línea Hyundai, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '10',
    referencia: '81E3-2001'
  },
  {
    slug: 'cadena-hyundai-81e3-2010',
    nombre: '81E3-2010 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 81E3-2010, línea Hyundai, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '8',
    referencia: '81E3-2010'
  },
  {
    slug: 'cadena-hyundai-81em-20010',
    nombre: '81EM-20010 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 81EM-20010, línea Hyundai, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '12',
    referencia: '81EM-20010'
  },
  {
    slug: 'cadena-hyundai-81em-20020',
    nombre: '81EM-20020 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 81EM-20020, línea Hyundai, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '15',
    referencia: '81EM-20020'
  },
  {
    slug: 'cadena-hyundai-81en-20010',
    nombre: '81EN-20010 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 81EN-20010, línea Hyundai, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '18',
    referencia: '81EN-20010'
  },
  {
    slug: 'cadena-hyundai-81en-20020',
    nombre: '81EN-20020 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 81EN-20020, línea Hyundai, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '14',
    referencia: '81EN-20020'
  },
  {
    slug: 'cadena-hyundai-81eq-20010',
    nombre: '81EQ-20010 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 81EQ-20010, línea Hyundai, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '9',
    referencia: '81EQ-20010'
  },
  {
    slug: 'cadena-hyundai-81eq-20020',
    nombre: '81EQ-20020 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 81EQ-20020, línea Hyundai, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '7',
    referencia: '81EQ-20020'
  },
  {
    slug: 'cadena-hyundai-81nb-20010',
    nombre: '81NB-20010 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 81NB-20010, línea Hyundai, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '25',
    referencia: '81NB-20010'
  },
  {
    slug: 'cadena-hyundai-81nb-20020',
    nombre: '81NB-20020 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 81NB-20020, línea Hyundai, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '16',
    referencia: '81NB-20020'
  },
  {
    slug: 'cadena-hyundai-81nc-20010',
    nombre: '81NC-20010 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 81NC-20010, línea Hyundai, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '11',
    referencia: '81NC-20010'
  },
  {
    slug: 'cadena-hyundai-81nc-20020',
    nombre: '81NC-20020 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 81NC-20020, línea Hyundai, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible bajo pedido. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: 'Por pedido',
    referencia: '81NC-20020'
  },
  {
    slug: 'cadena-hyundai-81en-20025',
    nombre: '81EN-20025 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 81EN-20025, línea Hyundai, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '13',
    referencia: '81EN-20025'
  },
  {
    slug: 'cadena-hyundai-81eq-20025',
    nombre: '81EQ-20025 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia 81EQ-20025, línea Hyundai, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '10',
    referencia: '81EQ-20025'
  },
  // =========================================================================
  // KUBOTA - BLOQUE 1: POR APLICACIÓN Y MÁQUINA (REFERENCIA VACÍA / MARCA)
  // =========================================================================
  {
    slug: 'cadena-miniexcavadora-kubota-kx015-kx019-u10',
    nombre: 'Cadena para miniexcavadora Kubota KX015 / KX019 / U10 / U17',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Kubota K008-3', 'Kubota U10-3', 'Kubota U17-3', 'Kubota KX015-4', 'Kubota KX018-4', 'Kubota KX019-4'],
    descripcion: `Cadena de eslabones de acero reforzada para miniexcavadoras Kubota U10-3, U17-3, KX015-4, KX018-4 y KX019-4.
Tratamiento térmico de precisión diseñado para mitigar el desgaste en trabajos de canalización y espacios reducidos.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '10',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-miniexcavadora-kubota-kx027-kx030-u25',
    nombre: 'Cadena para miniexcavadora Kubota KX027 / KX030 / U25 / U27',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Kubota U25-3', 'Kubota U27-4', 'Kubota KX027-4', 'Kubota KX030-4', 'Kubota KX71-3'],
    descripcion: `Cadena de tren de rodaje para miniexcavadoras Kubota U25, U27-4, KX027-4 y KX030-4.
Pasadores y bujes sellados que previenen la penetración de finos abrasivos durante zanjeo continuo.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '12',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-miniexcavadora-kubota-kx037-kx040-u35',
    nombre: 'Cadena para miniexcavadora Kubota KX037 / KX040 / U35',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Kubota U35-3', 'Kubota U35-4', 'Kubota KX037-4', 'Kubota KX040-4', 'Kubota KX121-3'],
    descripcion: `Cadena pesada para miniexcavadoras Kubota U35, KX037-4, KX040-4 y KX121-3.
Perfil de eslabón optimizado con endurecimiento por inducción profunda contra la abrasión en terrenos duros.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '15',
    referencia: ''
  },
  {
    slug: 'cadena-miniexcavadora-kubota-kx057-u48-u55',
    nombre: 'Cadena para miniexcavadora Kubota KX057 / U48 / U55',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Kubota U48-4', 'Kubota U55-4', 'Kubota KX057-4', 'Kubota KX161-3'],
    descripcion: `Cadena de alta durabilidad para miniexcavadoras Kubota U48-4, U55-4, KX057-4 y KX161-3.
Excelente absorción de impactos mecánicos en cimentaciones y demoliciones ligeras.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '18',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-kubota-kx080-u80',
    nombre: 'Cadena para excavadora compacta Kubota KX080 / KX080-4 / U80',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Kubota KX080-3', 'Kubota KX080-4', 'Kubota KX080-4a', 'Kubota KX085-5'],
    descripcion: `Cadena de tren de rodaje sellada y lubricada para excavadoras compactas Kubota KX080-3, KX080-4 y KX085-5.
Estructura forjada en aleación de acero que soporta torsión severa durante giros sobre pendientes.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '14',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-miniexcavadora-kubota-kx060-kx065',
    nombre: 'Cadena para miniexcavadora Kubota KX060 / KX065 / U60',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Kubota KX060-5', 'Kubota U60-5'],
    descripcion: `Cadena pesada para la nueva generación de miniexcavadoras Kubota KX060-5 y U60-5.
Juntas sintéticas de alto sellado para garantizar cero fugas de grasa interna.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '11',
    referencia: 'Catertrack'
  },
  {
    slug: 'cadena-excavadora-kubota-kx080-heavy-duty',
    nombre: 'Cadena pesada HD para excavadora compacta Kubota KX080-4 Heavy Duty',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Kubota KX080-4 HD', 'Kubota KX080-4a HD'],
    descripcion: `Cadena Heavy-Duty especificada para aplicaciones de extrema abrasión en Kubota KX080-4 HD.
Mayor espesor de rodadura en los eslabones para prolongar las horas de trabajo continuo.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '10',
    referencia: 'Catertrack'
  },
  // =========================================================================
  // KUBOTA - BLOQUE 2: POR REFERENCIA (APLICACIÓN GENÉRICA "EXCAVADORAS")
  // =========================================================================
  {
    slug: 'cadena-kubota-rb511-21100',
    nombre: 'RB511-21100 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia RB511-21100, línea Kubota, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '10',
    referencia: 'RB511-21100'
  },
  {
    slug: 'cadena-kubota-rd511-21100',
    nombre: 'RD511-21100 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia RD511-21100, línea Kubota, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '8',
    referencia: 'RD511-21100'
  },
  {
    slug: 'cadena-kubota-rg511-21100',
    nombre: 'RG511-21100 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia RG511-21100, línea Kubota, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '12',
    referencia: 'RG511-21100'
  },
  {
    slug: 'cadena-kubota-rj511-21100',
    nombre: 'RJ511-21100 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia RJ511-21100, línea Kubota, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '15',
    referencia: 'RJ511-21100'
  },
  {
    slug: 'cadena-kubota-rk511-21100',
    nombre: 'RK511-21100 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia RK511-21100, línea Kubota, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '18',
    referencia: 'RK511-21100'
  },
  {
    slug: 'cadena-kubota-rd511-21150',
    nombre: 'RD511-21150 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia RD511-21150, línea Kubota, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '11',
    referencia: 'RD511-21150'
  },
  {
    slug: 'cadena-kubota-rg511-21150',
    nombre: 'RG511-21150 - Cadena para excavadora',
    categoria: 'tren-de-rodaje',
    subcategoria: 'cadena',
    marca: 'VemaTRACK',
    aplicaciones: ['Excavadoras'],
    descripcion: `Cadena de tren de rodaje, referencia RG511-21150, línea Kubota, para excavadora.
Repuesto identificado por número de parte original. Si necesitas confirmar compatibilidad con tu equipo, escríbenos con el modelo de tu máquina.

Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
    foto: '',
    disponibilidad: '9',
    referencia: 'RG511-21150'
  }
];
