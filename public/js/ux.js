document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const heroContent = document.querySelector('.hero__content');
  const progressBar = document.querySelector('.scroll-progress');
  const loading = document.getElementById('page-loading');
  const heroVideo = document.querySelector('.hero__video');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let maxScroll = 0;

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
    const pct = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
    if (progressBar) {
      progressBar.style.width = `${pct}%`;
    }
  };

  const updateScrollBounds = () => {
    maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 0);
    updateProgress();
  };

  const initBranchDetails = () => {
    const details = document.getElementById('branchDetails');
    const mapContainer = document.getElementById('map');

    if (!details || !mapContainer) return;

    details.classList.add('is-active');
    mapContainer.style.boxShadow = '0 24px 44px rgba(11, 31, 58, 0.16)';
  };

  const initHeroParallax = () => {
    const hero = document.querySelector('.hero');
    if (!hero || prefersReducedMotion) return;

    let framePending = false;
    let pointerPosition = null;
    let heroBounds = hero.getBoundingClientRect();

    const updateGlow = () => {
      framePending = false;
      if (!pointerPosition) return;

      const x = (pointerPosition.clientX - heroBounds.left) / heroBounds.width - 0.5;
      const y = (pointerPosition.clientY - heroBounds.top) / heroBounds.height - 0.5;
      hero.style.setProperty('--hero-glow-x', `${x * 60}px`);
      hero.style.setProperty('--hero-glow-y', `${y * 60}px`);
    };

    hero.addEventListener('pointermove', (event) => {
      pointerPosition = event;
      if (!framePending) {
        framePending = true;
        window.requestAnimationFrame(updateGlow);
      }
    });

    window.addEventListener('resize', () => {
      heroBounds = hero.getBoundingClientRect();
    }, { passive: true });
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

    const hero = heroVideo.closest('.hero');
    if (!hero || !window.IntersectionObserver) return;

    const visibilityObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        heroVideo.play().catch(() => {});
      } else {
        heroVideo.pause();
      }
    }, { threshold: 0.01 });

    visibilityObserver.observe(hero);
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
  updateScrollBounds();
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
  window.addEventListener('resize', updateScrollBounds, { passive: true });
});
