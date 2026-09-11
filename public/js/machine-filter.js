// Filtra las tarjetas .product-card según lo que el usuario escribe en el
// buscador de máquina (#machine-search-input). Compara contra el atributo
// data-aplicaciones de cada tarjeta (las aplicaciones del producto, ya
// separadas por "|" y normalizadas desde el build). No depende de ningún
// framework, igual que los demás scripts de esta carpeta.
(function () {
  const input = document.getElementById('machine-search-input');
  if (!input) return;

  const cards = Array.from(document.querySelectorAll('.product-card[data-aplicaciones]'));
  const emptyMessage = document.getElementById('machine-search-empty');

  const normalize = (text) =>
    text
      .toLowerCase()
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '');

  const filter = () => {
    const term = normalize(input.value.trim());
    let visibleCount = 0;

    cards.forEach((card) => {
      const aplicaciones = card.dataset.aplicaciones || '';
      const matches = term === '' || aplicaciones.includes(term);
      card.hidden = !matches;
      if (matches) visibleCount += 1;
    });

    if (emptyMessage) {
      emptyMessage.hidden = !(term !== '' && visibleCount === 0);
    }
  };

  input.addEventListener('input', filter);
})();
