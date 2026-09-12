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
    referencia: ''
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
    referencia: ''
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
    referencia: ''
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
    referencia: ''
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
    referencia: ''
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
    referencia: ''
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
    referencia: ''
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
    referencia: ''
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
    referencia: ''
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
    referencia: ''
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
    referencia: ''
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
    referencia: ''
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
    referencia: ''
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
    referencia: ''
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
    referencia: ''
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
    referencia: ''
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
    referencia: ''
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
    referencia: ''
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
    referencia: ''
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
    referencia: ''
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
    referencia: ''
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
  }
];
