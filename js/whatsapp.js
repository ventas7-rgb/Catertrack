document.addEventListener('DOMContentLoaded', () => {
  const whatsappLink = document.querySelector('.whatsapp-float');
  whatsappLink?.addEventListener('click', () => {
    window.open('https://wa.me/573132416739?text=Hola,%20vengo%20de%20la%20p%C3%A1gina%20web%20de%20CaterTrack.%20Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n.', '_blank', 'noopener,noreferrer');
  });
});
