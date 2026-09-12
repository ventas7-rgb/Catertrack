// Filtra las tarjetas .product-card según lo que el usuario escribe en el
// buscador de máquina (#machine-search-input). Compara tanto contra
// data-aplicaciones (modelos de máquina del producto) como contra
// data-referencia (código de repuesto), ambos ya normalizados desde el
// build. Así el mismo buscador sirve para "CAT 320" o para "9W9353".
//
// La referencia además se compara "sin separadores": muchas referencias
// llevan guion o diagonal (ej. "138-2041", "331/20601"), pero el cliente
// suele escribirlas corridas (ej. "1382041"). Por eso, solo para la
// referencia, se quita todo lo que no sea letra o número antes de comparar
// — así calza sin importar si el usuario escribe o no el guion/diagonal.
// No depende de ningún framework, igual que los demás scripts de esta carpeta.
(function () {
  const input = document.getElementById('machine-search-input');
  if (!input) return;

  const cardEls = Array.from(document.querySelectorAll('.product-card[data-aplicaciones]'));
  const emptyMessage = document.getElementById('machine-search-empty');

  const normalize = (text) =>
    text
      .toLowerCase()
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '');

  const onlyAlphanumeric = (text) => text.replace(/[^a-z0-9]/g, '');

  // Se precalcula una sola vez por tarjeta (no en cada tecla que se escribe).
  const cards = cardEls.map((card) => ({
    card,
    aplicaciones: card.dataset.aplicaciones || '',
    referenciaClean: onlyAlphanumeric(card.dataset.referencia || ''),
  }));

  const filter = () => {
    const term = normalize(input.value.trim());
    const termClean = onlyAlphanumeric(term);
    let visibleCount = 0;

    cards.forEach(({ card, aplicaciones, referenciaClean }) => {
      const matches =
        term === '' ||
        aplicaciones.includes(term) ||
        (termClean !== '' && referenciaClean.includes(termClean));
      card.hidden = !matches;
      if (matches) visibleCount += 1;
    });

    if (emptyMessage) {
      emptyMessage.hidden = !(term !== '' && visibleCount === 0);
    }
  };

  input.addEventListener('input', filter);
})();
