# Guía para agregar productos y categorías

Esta guía describe cómo agregar o editar productos y categorías en el catálogo **tal como funciona hoy**: no hay HTML por producto, ni carpetas por producto, ni servidor ni panel de administración. Todo el catálogo (categorías, subcategorías y productos) se genera automáticamente con [Astro](https://astro.build) a partir de un solo archivo de datos.

> Si ves una versión anterior de esta guía que habla de duplicar carpetas como `tren-de-rodaje/segmento-oruga-prueba/index.html`, ignórala: esa era la arquitectura antes de migrar el catálogo a Astro y ya no aplica. Seguirla generaría archivos HTML sueltos que Astro no usa ni publica.

## Dónde vive todo

- **`src/data/catalogo.js`**: la única fuente de verdad. Exporta `categorias` (las 11 categorías y sus subcategorías) y `productos` (cada producto del catálogo).
- **`src/pages/[categoria]/index.astro`**, **`src/pages/[categoria]/[subcategoria]/index.astro`** y **`src/pages/[categoria]/[subcategoria]/[slug].astro`**: generan automáticamente, en el build, la página de "Todos" de cada categoría, la página de cada subcategoría y la ficha de cada producto. No se editan para agregar un producto — leen `catalogo.js`.
- **`src/components/MachineSearch.astro`** y **`public/js/machine-filter.js`**: el buscador por máquina/motor dentro de cada listado.

## Agregar un producto nuevo

1. Abre `src/data/catalogo.js`.
2. Agrega un objeto nuevo al arreglo `productos`, con esta forma:

   ```js
   {
     slug: 'cadena-excavadora-320',       // único, en minúsculas y con guiones
     nombre: 'Cadena excavadora 320',
     categoria: 'tren-de-rodaje',          // debe coincidir con un slug de `categorias`
     subcategoria: 'cadena',               // debe coincidir con una subcategoría de esa categoría
     marca: 'CAT',
     aplicaciones: ['CAT 320', 'CAT 320D', 'CAT 320D2'], // modelo de máquina (o de motor, ver abajo)
     descripcion: `Cadena de tren de rodaje compatible con excavadoras CAT 320, 320D y 320D2.
   Fabricada en acero de alta resistencia, tratada térmicamente para soportar condiciones de trabajo pesado.

   Disponible para entrega inmediata. Garantía CaterTrack incluida.`,
     foto: '',               // ruta dentro de public/assets/images/products/, o '' para el placeholder
     disponibilidad: '18',
     referencia: 'Catertrack',
   }
   ```

3. Guarda el archivo. Astro genera automáticamente:
   - La tarjeta del producto en la vista "Todos" de su categoría y en la vista de su subcategoría.
   - Su ficha individual en `/{categoria}/{subcategoria}/{slug}`.
   - Su entrada en el buscador por máquina/motor (usa el campo `aplicaciones`).

No hay que crear ni tocar ningún archivo HTML por producto.

### El campo `aplicaciones`

Es lo que usa el buscador (`MachineSearch.astro` / `machine-filter.js`) para filtrar sin revisar cientos de productos uno por uno — conviene llenarlo siempre.

- Para casi todas las categorías: el modelo de **máquina** (ej. `'CAT 320'`).
- Para **"Partes de motor"** (`repuestos-motor`, que tiene `buscarPor: 'motor'` en `catalogo.js`): el modelo de **motor** (ej. `'Cummins 6BT'`), porque un mismo motor se monta en varios equipos y no corresponde a una sola máquina.

### La descripción (`descripcion`)

- Se puede escribir con saltos de línea usando comillas invertidas (backticks), como en el ejemplo de arriba — la ficha de producto los respeta.
- En las tarjetas de listado se trunca automáticamente a 2 líneas (CSS `line-clamp`); no hace falta acortarla a mano.

## Agregar o editar una categoría o subcategoría

Edita el arreglo `categorias` en `catalogo.js`:

```js
{
  slug: 'repuestos-motor',
  nombre: 'Partes de motor',
  buscarPor: 'motor', // opcional: 'maquina' (por defecto) o 'motor' — cambia el texto del buscador
  subcategorias: [
    { slug: 'culata', nombre: 'Culata' },
    // ...
  ],
}
```

## Publicar los cambios

```bash
npm run build      # genera dist/ con el catálogo actualizado
npm run sitemap     # regenera sitemap.xml a partir de catalogo.js
```

Luego sube los cambios por el flujo normal de GitHub (push a `main`); el workflow de GitHub Actions construye y publica el sitio automáticamente. Ver `README.md` para el detalle del despliegue.
