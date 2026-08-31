document.addEventListener('DOMContentLoaded', () => {
  const backToTop = document.querySelector('.back-to-top');
  const whatsappButton = document.querySelector('.whatsapp-float');
  const statNumbers = document.querySelectorAll('.stat-card__number');
  const clientsTrack = document.querySelector('.clients__track');
  const offerCountdown = document.getElementById('novedadesOfferCountdown');

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

  const initVisibleCarousels = () => {
    const carousels = document.querySelectorAll('.carousel[data-bs-ride="carousel"]');

    if (!carousels.length || !window.bootstrap?.Carousel) return;

    const carouselInstances = Array.from(carousels, (carousel) => ({
      element: carousel,
      instance: window.bootstrap.Carousel.getOrCreateInstance(carousel)
    }));

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      carouselInstances.forEach(({ instance }) => instance.pause());
      return;
    }

    if (!window.IntersectionObserver) return;

    const visibilityObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const carousel = carouselInstances.find(({ element }) => element === entry.target);
        if (!carousel) return;

        if (entry.isIntersecting) {
          carousel.instance.cycle();
        } else {
          carousel.instance.pause();
        }
      });
    }, { threshold: 0.15 });

    carouselInstances.forEach(({ element, instance }) => {
      instance.pause();
      visibilityObserver.observe(element);
    });
  };

  const initLazyMap = () => {
    const branches = document.getElementById('sucursales');
    if (!branches) return;

    const loadScript = (src) => new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });

    const loadMap = () => {
      const stylesheet = document.createElement('link');
      stylesheet.rel = 'stylesheet';
      stylesheet.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(stylesheet);

      loadScript('https://unpkg.com/leaflet@1.9.4/dist/leaflet.js')
        .then(() => loadScript('js/map.js?v=20260831'))
        .then(() => window.initCaterTrackMap?.())
        .catch(() => {});
    };

    if (!window.IntersectionObserver) {
      loadMap();
      return;
    }

    const observer = new IntersectionObserver(([entry], currentObserver) => {
      if (!entry.isIntersecting) return;

      currentObserver.unobserve(entry.target);
      loadMap();
    }, { rootMargin: '400px 0px' });

    observer.observe(branches);
  };

  const initOfferCountdown = () => {
    if (!offerCountdown) return;

    const storageKey = 'catertrack-novedades-offer-expires-at';
    const offerDuration = 7 * 24 * 60 * 60 * 1000;
    let expiresAt = Number(localStorage.getItem(storageKey) || 0);

    if (!expiresAt || expiresAt <= Date.now()) {
      expiresAt = Date.now() + offerDuration;
      localStorage.setItem(storageKey, String(expiresAt));
    }

    const updateCountdown = () => {
      let remaining = expiresAt - Date.now();

      if (remaining <= 0) {
        expiresAt = Date.now() + offerDuration;
        localStorage.setItem(storageKey, String(expiresAt));
        remaining = offerDuration;
      }

      const totalSeconds = Math.floor(remaining / 1000);
      const days = Math.floor(totalSeconds / 86400);
      const hours = Math.floor((totalSeconds % 86400) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;
      const format = (value) => String(value).padStart(2, '0');

      offerCountdown.textContent = `${days}d ${format(hours)}:${format(minutes)}:${format(seconds)}`;
    };

    updateCountdown();
    window.setInterval(updateCountdown, 1000);
  };

  const initRepuestoLinks = () => {
    const repuestoLinks = Array.from(document.querySelectorAll('.product-card__action'))
      .filter((link) => link.textContent.trim().toLowerCase() === 'buscar repuesto');

    repuestoLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopImmediatePropagation();
        window.location.assign(link.href);
      }, true);
    });
  };

  toggleBackToTop();
  resetPositions();
  initCounters();
  initClientsMarquee();
  initVisibleCarousels();
  initLazyMap();
  initOfferCountdown();
  initRepuestoLinks();

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
  const popupImage = popup?.querySelector('.popup-image');
  const shouldShowPopup = window.matchMedia('(min-width: 768px)').matches;
  const storageKey = 'catertrack-popup-dismissed-until';

  if (!popup || !cerrar || !shouldShowPopup) return;

  const dismissedUntil = Number(localStorage.getItem(storageKey) || 0);
  if (dismissedUntil > Date.now()) return;

  const showPopup = () => {
    if (popupImage?.dataset.src) {
      popupImage.src = popupImage.dataset.src;
      delete popupImage.dataset.src;
    }
    popup.classList.add('active');
  };

  window.addEventListener('scroll', showPopup, { once: true, passive: true });

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