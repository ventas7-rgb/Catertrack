document.addEventListener('DOMContentLoaded', () => {
  const whatsappLink = document.querySelector('.whatsapp-float');
  whatsappLink?.addEventListener('click', () => {
    window.open('https://wa.me/573001112233', '_blank', 'noopener,noreferrer');
  });
});
