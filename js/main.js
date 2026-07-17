document.addEventListener('DOMContentLoaded', () => {
  const backToTop = document.querySelector('.back-to-top');
  const whatsappButton = document.querySelector('.whatsapp-float');
  const storageKey = 'catertrack-float-positions';
  const floatButtons = [backToTop, whatsappButton].filter(Boolean);

  const toggleBackToTop = () => {
    if (window.scrollY > 500) {
      backToTop?.classList.add('is-visible');
    } else {
      backToTop?.classList.remove('is-visible');
    }
  };

  const applyPosition = (button, x, y) => {
    if (!button) return;

    const safeX = Math.min(Math.max(x, 12), window.innerWidth - 68);
    const safeY = Math.min(Math.max(y, 12), window.innerHeight - 68);

    button.style.left = `${safeX}px`;
    button.style.top = `${safeY}px`;
    button.style.right = 'auto';
    button.style.bottom = 'auto';
  };

  const savePositions = () => {
    const positions = {};

    floatButtons.forEach((button) => {
      if (!button) return;
      const rect = button.getBoundingClientRect();
      const key = button.classList.contains('whatsapp-float') ? 'whatsapp' : 'backToTop';
      positions[key] = { x: rect.left, y: rect.top };
    });

    localStorage.setItem(storageKey, JSON.stringify(positions));
  };

  const restorePositions = () => {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || '{}');
      if (saved.whatsapp) {
        applyPosition(whatsappButton, saved.whatsapp.x, saved.whatsapp.y);
      }
      if (saved.backToTop) {
        applyPosition(backToTop, saved.backToTop.x, saved.backToTop.y);
      }
    } catch (error) {
      console.warn('No se pudieron restaurar posiciones de botones flotantes', error);
    }
  };

  const initDrag = (button) => {
    if (!button) return;

    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;
    let dragged = false;
    let startX = 0;
    let startY = 0;

    const handlePointerDown = (event) => {
      isDragging = true;
      dragged = false;
      button.classList.add('dragging');
      const rect = button.getBoundingClientRect();
      offsetX = event.clientX - rect.left;
      offsetY = event.clientY - rect.top;
      startX = event.clientX;
      startY = event.clientY;
      button.setPointerCapture(event.pointerId);
      event.preventDefault();
    };

    const handlePointerMove = (event) => {
      if (!isDragging) return;
      const deltaX = event.clientX - startX;
      const deltaY = event.clientY - startY;
      if (Math.abs(deltaX) > 8 || Math.abs(deltaY) > 8) {
        dragged = true;
      }
      applyPosition(button, event.clientX - offsetX, event.clientY - offsetY);
    };

    const handlePointerUp = (event) => {
      isDragging = false;
      button.classList.remove('dragging');
      savePositions();

      if (dragged) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    };

    const handleClick = (event) => {
      if (dragged) {
        event.preventDefault();
        event.stopImmediatePropagation();
        dragged = false;
      }
    };

    button.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    button.addEventListener('click', handleClick);
  };

  toggleBackToTop();
  restorePositions();
  floatButtons.forEach(initDrag);
  window.addEventListener('scroll', toggleBackToTop, { passive: true });
  window.addEventListener('resize', restorePositions);

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