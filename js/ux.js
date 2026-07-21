document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const heroContent = document.querySelector('.hero__content');
  const progressBar = document.querySelector('.scroll-progress');
  const loading = document.getElementById('page-loading');
  const heroVideo = document.querySelector('.hero__video');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (window.AOS) {
    window.AOS.init({
      duration: 700,
      once: true,
      easing: 'ease-out-cubic'
    });
  }

  if (!prefersReducedMotion) {
    document.body.classList.add('has-motion');
  }

  const setHeaderState = () => {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 18);
  };

  const updateProgress = () => {
    const scrollTop = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const pct = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
    if (progressBar) {
      progressBar.style.width = `${pct}%`;
    }
  };

  const animateCounters = () => {
    const counters = document.querySelectorAll('[data-counter]');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const element = entry.target;
        const target = Number(element.dataset.counter || 0);
        const suffix = element.dataset.suffix || '';
        const prefix = element.dataset.prefix || '';
        const label = element.dataset.label || '';
        const duration = 1200;
        const start = performance.now();

        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const value = Math.round(target * eased);
          element.textContent = `${prefix}${value}${suffix}`;
          if (progress < 1) {
            requestAnimationFrame(tick);
          } else if (label) {
            element.textContent = label;
          }
        };

        requestAnimationFrame(tick);
        obs.unobserve(element);
      });
    }, { threshold: 0.6 });

    counters.forEach((counter) => observer.observe(counter));
  };

  const initBranchDetails = () => {
    const details = document.getElementById('branchDetails');
    const mapContainer = document.getElementById('map');

    if (!details || !mapContainer) return;

    const content = {
      Bogotá: {
        city: 'Bogotá',
        address: 'Cra. 10 # 82-74, Torre Empresarial',
        hours: 'Lunes a viernes · 8:00 a.m. - 5:30 p.m.',
        phone: '+57 313 241 6739',
        whatsapp: 'https://wa.me/573132416739',
        maps: 'https://www.google.com/maps/search/Bogota+Torre+Empresarial'
      },
      Medellín: {
        city: 'Medellín',
        address: 'Calle 10 # 38-45, Centro Industrial',
        hours: 'Lunes a viernes · 8:00 a.m. - 5:30 p.m.',
        phone: '+57 314 546 9012',
        whatsapp: 'https://wa.me/573132416739',
        maps: 'https://www.google.com/maps/search/Medellin+Centro+Industrial'
      },
      Barranquilla: {
        city: 'Barranquilla',
        address: 'Av. Murillo # 45-12, Zona Industrial',
        hours: 'Lunes a viernes · 8:00 a.m. - 5:30 p.m.',
        phone: '+57 305 443 2201',
        whatsapp: 'https://wa.me/573132416739',
        maps: 'https://www.google.com/maps/search/Barranquilla+Zona+Industrial'
      },
      Neiva: {
        city: 'Neiva',
        address: 'Calle 3 # 7-89, Bodega 2',
        hours: 'Lunes a viernes · 8:00 a.m. - 5:30 p.m.',
        phone: '+57 318 771 0045',
        whatsapp: 'https://wa.me/573132416739',
        maps: 'https://www.google.com/maps/search/Neiva+Bodega+2'
      },
      Meta: {
        city: 'Meta',
        address: 'Vía Puerto López km 12',
        hours: 'Lunes a viernes · 8:00 a.m. - 5:30 p.m.',
        phone: '+57 316 721 8810',
        whatsapp: 'https://wa.me/573132416739',
        maps: 'https://www.google.com/maps/search/Meta+Puerto+Lopez'
      },
      Yopal: {
        city: 'Yopal',
        address: 'Carretera Central # 12-58',
        hours: 'Lunes a viernes · 8:00 a.m. - 5:30 p.m.',
        phone: '+57 311 334 0198',
        whatsapp: 'https://wa.me/573132416739',
        maps: 'https://www.google.com/maps/search/Yopal+Carretera+Central'
      }
    };

    const updateCard = (city) => {
      const item = content[city];
      if (!item) return;
      details.innerHTML = `
        <div class="branch-card__icon"><i class="fa-solid fa-location-dot"></i></div>
        <p class="branch-card__label">Sucursal destacada</p>
        <h3>${item.city}</h3>
        <p><strong>Dirección:</strong> ${item.address}</p>
        <p><strong>Horario:</strong> ${item.hours}</p>
        <p><strong>Teléfono:</strong> <a href="tel:${item.phone}">${item.phone}</a></p>
        <p><strong>WhatsApp:</strong> <a href="${item.whatsapp}" target="_blank" rel="noopener noreferrer">Contactar</a></p>
        <p><a href="${item.maps}" target="_blank" rel="noopener noreferrer">Abrir en Google Maps</a></p>
      `;
      details.classList.add('is-active');
      if (mapContainer) {
        mapContainer.style.boxShadow = '0 24px 44px rgba(11, 31, 58, 0.16)';
      }
    };

    window.addEventListener('city-selected', (event) => {
      updateCard(event.detail.city);
    });
  };

  const initHeroParallax = () => {
    const hero = document.querySelector('.hero');
    if (!hero || prefersReducedMotion) return;

    hero.addEventListener('pointermove', (event) => {
      const rect = hero.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      hero.style.setProperty('--hero-glow-x', `${x * 60}px`);
      hero.style.setProperty('--hero-glow-y', `${y * 60}px`);
    });
  };

  const initHeroVideo = () => {
    if (!heroVideo) return;

    if (prefersReducedMotion) {
      heroVideo.pause();
      return;
    }

    heroVideo.playbackRate = 1.5;
    heroVideo.addEventListener('loadedmetadata', () => {
      heroVideo.playbackRate = 1.5;
    }, { once: true });
  };

  const initLoading = () => {
    const revealPage = () => {
      if (loading) {
        loading.classList.add('is-hidden');
      }
      if (heroContent) {
        heroContent.classList.add('is-ready');
      }
    };

    requestAnimationFrame(revealPage);
  };

  setHeaderState();
  updateProgress();
  animateCounters();
  initBranchDetails();
  initHeroParallax();
  initHeroVideo();
  initLoading();

  let ticking = false;
  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        setHeaderState();
        updateProgress();
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', updateProgress);
});
