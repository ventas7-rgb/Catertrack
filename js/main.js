document.addEventListener('DOMContentLoaded', () => {
  const backToTop = document.querySelector('.back-to-top');
  const whatsappButton = document.querySelector('.whatsapp-float');

  const toggleBackToTop = () => {
    if (window.scrollY > 500) {
      backToTop?.classList.add('is-visible');
    } else {
      backToTop?.classList.remove('is-visible');
    }
  };

  const resetPositions = () => {
    if (backToTop) {
      backToTop.style.left = 'auto';
      backToTop.style.top = 'auto';
      backToTop.style.right = '1.25rem';
      backToTop.style.bottom = '7rem';
    }

    if (whatsappButton) {
      whatsappButton.style.left = 'auto';
      whatsappButton.style.top = 'auto';
      whatsappButton.style.right = '1.25rem';
      whatsappButton.style.bottom = '1.25rem';
    }
  };

  toggleBackToTop();
  resetPositions();
  window.addEventListener('scroll', toggleBackToTop, { passive: true });
  window.addEventListener('resize', resetPositions);

  backToTop?.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

window.addEventListener('load', () => {
  const popup = document.getElementById('promoPopup');
  const cerrar = document.getElementById('cerrarPopup');
  const shouldShowPopup = window.matchMedia('(min-width: 768px)').matches;

  if (!popup || !cerrar || !shouldShowPopup) return;

  popup.classList.add('active');

  cerrar.addEventListener('click', () => {
    popup.classList.remove('active');
  });

  popup.addEventListener('click', (event) => {
    if (event.target === popup) {
      popup.classList.remove('active');
    }
  });
});