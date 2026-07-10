document.addEventListener('DOMContentLoaded', () => {
  if (window.AOS) {
    window.AOS.init({
      duration: 700,
      once: true,
      easing: 'ease-out-cubic'
    });
  }
});
