document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('quote-form');
  const message = form?.querySelector('.form-message');
  const submitButton = form?.querySelector('button[type="submit"]');

  const showMessage = (text, type = 'success') => {
    if (!message) return;
    message.textContent = text;
    message.style.color = type === 'error' ? '#b42318' : '#154A8A';
  };

  form?.addEventListener('submit', (event) => {
    event.preventDefault();

    const fields = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;

    fields.forEach((field) => {
      const value = field.value.trim();
      if (!value) {
        isValid = false;
        field.classList.add('is-invalid');
      } else {
        field.classList.remove('is-invalid');
      }
    });

    const emailField = form.querySelector('#email');
    const phoneField = form.querySelector('#phone');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\+?\d{7,15}$/;

    if (emailField && emailField.value && !emailPattern.test(emailField.value)) {
      isValid = false;
      emailField.classList.add('is-invalid');
      showMessage('Por favor ingrese un correo válido.', 'error');
      return;
    }

    if (phoneField && phoneField.value && !phonePattern.test(phoneField.value.replace(/\s|\-|\+/g, ''))) {
      isValid = false;
      phoneField.classList.add('is-invalid');
      showMessage('Por favor ingrese un teléfono válido.', 'error');
      return;
    }

    const privacy = form.querySelector('#privacy');
    if (privacy && !privacy.checked) {
      isValid = false;
      showMessage('Debe aceptar la política de privacidad.', 'error');
      return;
    }

    if (!isValid) {
      showMessage('Complete todos los campos obligatorios.', 'error');
      return;
    }

    submitButton?.classList.add('is-loading');
    submitButton?.setAttribute('disabled', 'true');

    window.setTimeout(() => {
      submitButton?.classList.remove('is-loading');
      submitButton?.removeAttribute('disabled');
      form.reset();
      showMessage('Gracias. Su solicitud fue enviada correctamente.');
    }, 1200);
  });
});
