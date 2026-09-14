// Motor de listado + búsqueda del catálogo (categoría y subcategoría).
//
// Antes este archivo solo mostraba/ocultaba tarjetas .product-card que Astro
// ya había puesto en el HTML. Eso funcionaba bien con pocos productos, pero
// con catálogos grandes (una sola subcategoría llegó a 367 productos en esta
// tienda) meter TODAS las tarjetas completas en el HTML de una sola vez
// vuelve la página pesadísima de descargar (esa página pesaba 553 KB solo en
// tarjetas) — y eso empeora mucho a medida que el catálogo crece hacia
// miles de referencias.
//
// Por eso ahora:
// - Astro solo renderiza como HTML real las primeras PAGE_SIZE tarjetas
//   (rápidas, visibles sin JavaScript, buenas para buscadores).
// - El resto de productos de esa categoría/subcategoría viaja como datos
//   livianos en `window.__catalogItems` (ver el <script define:vars> en los
//   .astro de listado) — mucho más liviano que HTML completo por producto.
// - Este script agrega esas tarjetas al DOM bajo demanda: con el botón
//   "Cargar más" (paginación), o de una si el usuario busca algo, para que
//   el buscador por máquina/referencia siga alcanzando TODO el catálogo de
//   la página, no solo lo que ya está cargado en pantalla.
(function () {
  const grid = document.getElementById('product-grid');
  if (!grid) return;

  const items = Array.isArray(window.__catalogItems) ? window.__catalogItems : [];
  const base = grid.dataset.base || '/';
  const pageSize = parseInt(grid.dataset.pageSize, 10) || 24;
  const staticCount = grid.querySelectorAll('.product-card').length;

  const input = document.getElementById('machine-search-input');
  const emptyMessage = document.getElementById('machine-search-empty');
  const loadMoreBtn = document.getElementById('load-more-btn');
  const brandSelect = document.getElementById('brand-filter-select');

  const normalize = (text) =>
    (text ?? '')
      .toString()
      .toLowerCase()
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '');

  // Igual que antes: solo para la referencia, se quita todo lo que no sea
  // letra o número, así "138-2041" y "1382041" calzan sin importar el guion.
  const onlyAlphanumeric = (text) => text.replace(/[^a-z0-9]/g, '');

  const escapeHtml = (value) =>
    String(value ?? '').replace(/[&<>"']/g, (char) => (
      { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]
    ));

  const entries = items.map((item) => ({
    item,
    aplicacionesNorm: normalize((item.aplicaciones || []).join('|')),
    referenciaClean: onlyAlphanumeric(normalize(item.referencia || '')),
    marcasEquipo: item.marcasEquipo || [],
  }));

  let loadedCount = Math.min(staticCount || pageSize, entries.length);
  let searchActive = false;

  function cardHtml(item) {
    const href = `${base}${item.categoria}/${item.subcategoria}/${item.slug}`;
    const foto = item.foto || `${base}assets/images/products/placeholder.webp`;
    const disponibilidad = item.disponibilidad || 'Por confirmar';
    const referencia = item.referencia || 'Por confirmar';
    const aplicacion = (item.aplicaciones || []).join(', ') || 'Por confirmar';
    const marcaEquipoRow = (item.marcasEquipo || []).length > 0
      ? `<div><dt>Marca de equipo</dt><dd>${escapeHtml(item.marcasEquipo.join(', '))}</dd></div>`
      : '';
    const waText = encodeURIComponent(`Hola CaterTrack, quiero cotizar ${item.nombre}`);

    return `<article class="product-card js-card" data-slug="${escapeHtml(item.slug)}">
      <a class="product-card__cover-link" href="${escapeHtml(href)}" aria-label="Ver detalles de ${escapeHtml(item.nombre)}"></a>
      <div class="product-card__visual">
        <img src="${escapeHtml(foto)}" alt="${escapeHtml(item.nombre)}" loading="lazy" />
      </div>
      <div class="product-card__content">
        <span class="product-card__category">${escapeHtml(item.subcategoria)}</span>
        <span class="product-card__availability"><strong>Disponibilidad:</strong> ${escapeHtml(disponibilidad)}</span>
        <h3>${escapeHtml(item.nombre)}</h3>
        <dl class="product-card__details">
          <div><dt>Marca</dt><dd>${escapeHtml(item.marca)}</dd></div>
          ${marcaEquipoRow}
          <div><dt>Referencia</dt><dd>${escapeHtml(referencia)}</dd></div>
          <div><dt>Aplicación</dt><dd>${escapeHtml(aplicacion)}</dd></div>
        </dl>
        <p class="product-card__description">${escapeHtml(item.descripcion)}</p>
        <a class="product-card__cta" href="https://wa.me/573132416739?text=${waText}" target="_blank" rel="noopener noreferrer">
          Solicitar cotización
          <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
        </a>
      </div>
    </article>`;
  }

  function appendCard(entry) {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = cardHtml(entry.item).trim();
    grid.appendChild(wrapper.firstElementChild);
  }

  function clearDynamicCards() {
    grid.querySelectorAll('.product-card.js-card').forEach((el) => el.remove());
  }

  function updateLoadMoreVisibility() {
    if (!loadMoreBtn) return;
    loadMoreBtn.hidden = searchActive || loadedCount >= entries.length;
  }

  function loadMore() {
    const next = entries.slice(loadedCount, loadedCount + pageSize);
    next.forEach(appendCard);
    loadedCount += next.length;
    updateLoadMoreVisibility();
  }

  function resetToBrowseView() {
    searchActive = false;
    clearDynamicCards();
    loadedCount = Math.min(staticCount || pageSize, entries.length);
    grid.querySelectorAll('.product-card').forEach((el) => {
      el.hidden = false;
    });
    if (emptyMessage) emptyMessage.hidden = true;
    updateLoadMoreVisibility();
  }

  // El buscador libre (texto) y el selector de marca son dos filtros
  // independientes que se combinan con AND: si ambos están activos, solo se
  // muestran los productos que cumplen los dos a la vez.
  function applyFilters() {
    const rawTerm = input ? input.value : '';
    const term = normalize(rawTerm.trim());
    const brand = brandSelect ? brandSelect.value : '';

    if (term === '' && brand === '') {
      resetToBrowseView();
      return;
    }

    searchActive = true;
    const termClean = onlyAlphanumeric(term);
    const matches = entries.filter(({ aplicacionesNorm, referenciaClean, marcasEquipo }) => {
      const matchesTerm =
        term === '' ||
        aplicacionesNorm.includes(term) ||
        (termClean !== '' && referenciaClean.includes(termClean));
      const matchesBrand = brand === '' || marcasEquipo.includes(brand);
      return matchesTerm && matchesBrand;
    });

    // Se ocultan las tarjetas estáticas y se dibujan de nuevo todas las que
    // coinciden (estén ya cargadas o no) — así el filtro siempre cubre el
    // catálogo completo de la página, no solo lo que se había cargado hasta
    // ese momento con "Cargar más".
    clearDynamicCards();
    grid.querySelectorAll('.product-card').forEach((el) => {
      el.hidden = true;
    });
    matches.forEach(appendCard);
    updateLoadMoreVisibility();

    if (emptyMessage) emptyMessage.hidden = matches.length !== 0;
  }

  updateLoadMoreVisibility();
  if (loadMoreBtn) loadMoreBtn.addEventListener('click', loadMore);
  if (input) input.addEventListener('input', applyFilters);
  if (brandSelect) brandSelect.addEventListener('change', applyFilters);
})();
