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

    if (!popup || !cerrar || !shouldShowPopup) return;

    popup.classList.add("active");

    cerrar.addEventListener("click", () => {
        popup.classList.remove("active");
    });

    popup.addEventListener("click", (e) => {
        if (e.target === popup) {
            popup.classList.remove("active");
        }
    });
});