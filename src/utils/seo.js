// Antes cada página metía el texto "crudo" del producto directo en la meta
// description. Con descripciones de varias líneas (como las que ya usas para
// productos), eso deja saltos de línea literales dentro del atributo
// content="..." del HTML — no rompe nada, pero Google y las vistas previas
// (WhatsApp, Facebook, etc.) lo muestran feo/cortado a mitad de frase.
//
// Esta función deja la meta description como debe ser: una sola línea,
// sin espacios/saltos duplicados, y con un límite razonable de longitud
// (Google igual corta alrededor de 155-160 caracteres, así que no tiene
// sentido mandarle un párrafo completo).
export function toMetaDescription(text, maxLength = 160) {
  const flat = (text ?? '').toString().replace(/\s+/g, ' ').trim();
  if (flat.length <= maxLength) return flat;
  return `${flat.slice(0, maxLength - 1).trimEnd()}…`;
}
