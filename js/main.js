document.addEventListener('DOMContentLoaded', () => {
  const backToTop = document.querySelector('.back-to-top');
  const whatsappButton = document.querySelector('.whatsapp-float');
  const statNumbers = document.querySelectorAll('.stat-card__number');
  const clientsTrack = document.querySelector('.clients__track');

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

  const animateCounter = (element) => {
    const target = Number(element.dataset.counter || 0);
    const prefix = element.dataset.prefix || '';
    const suffix = element.dataset.suffix || '';
    const duration = 1400;
    const startTime = performance.now();

    const step = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.round(target * easedProgress);

      element.textContent = `${prefix}${currentValue}${suffix}`;

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        element.textContent = `${prefix}${target}${suffix}`;
      }
    };

    window.requestAnimationFrame(step);
  };

  const initCounters = () => {
    if (!statNumbers.length) return;

    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        animateCounter(entry.target);
        currentObserver.unobserve(entry.target);
      });
    }, { threshold: 0.35 });

    statNumbers.forEach((stat) => observer.observe(stat));
  };

  const initClientsMarquee = () => {
    if (!clientsTrack) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const logos = Array.from(clientsTrack.children);
    if (!logos.length) return;

    const clones = logos.map((logo) => logo.cloneNode(true));
    clones.forEach((clone) => {
      clone.setAttribute('aria-hidden', 'true');
      clientsTrack.appendChild(clone);
    });
  };

  toggleBackToTop();
  resetPositions();
  initCounters();
  initClientsMarquee();

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
  const storageKey = 'catertrack-popup-dismissed-until';

  if (!popup || !cerrar || !shouldShowPopup) return;

  const dismissedUntil = Number(localStorage.getItem(storageKey) || 0);
  const now = Date.now();

  if (dismissedUntil > now) return;

  popup.classList.add('active');

  cerrar.addEventListener('click', () => {
    popup.classList.remove('active');
    localStorage.setItem(storageKey, String(Date.now() + 7 * 24 * 60 * 60 * 1000));
  });

  popup.addEventListener('click', (event) => {
    if (event.target === popup) {
      popup.classList.remove('active');
      localStorage.setItem(storageKey, String(Date.now() + 7 * 24 * 60 * 60 * 1000));
    }
  });
});