document.addEventListener('DOMContentLoaded', () => {
  const backToTop = document.querySelector('.back-to-top');

  const toggleBackToTop = () => {
    if (window.scrollY > 500) {
      backToTop?.classList.add('is-visible');
    } else {
      backToTop?.classList.remove('is-visible');
    }
  };

  toggleBackToTop();
  window.addEventListener('scroll', toggleBackToTop, { passive: true });

  backToTop?.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
window.addEventListener("load", () => {
    const popup = document.getElementById("promoPopup");
    const cerrar = document.getElementById("cerrarPopup");
    const shouldShowPopup = window.matchMedia("(min-width: 768px)").matches;

    if (!popup || !cerrar || !shouldShowPopup) {
        popup?.style.setProperty("display", "none");
        return;
    }

    popup.style.display = "flex";

    cerrar.addEventListener("click", () => {
        popup.style.display = "none";
    });

    popup.addEventListener("click", (e) => {
        if (e.target === popup) {
            popup.style.display = "none";
        }
    });
});