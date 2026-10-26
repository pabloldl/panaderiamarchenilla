'use strict';

const copyButton = document.querySelector('#copy-phone');
const copyStatus = document.querySelector('#copy-status');
const manualCopy = document.querySelector('#manual-copy');
const phoneInput = document.querySelector('#phone-copy');
copyButton.hidden = false;
copyButton.addEventListener('click', async () => {
  try {
    if (!navigator.clipboard || !window.isSecureContext) throw new Error('Manual copy required');
    await navigator.clipboard.writeText('956 716 395');
    manualCopy.hidden = true;
    copyStatus.textContent = 'Teléfono copiado: 956 716 395.';
  } catch {
    manualCopy.hidden = false;
    phoneInput.focus();
    phoneInput.select();
    copyStatus.textContent = 'Selecciona el número y usa la opción Copiar de tu dispositivo.';
  }
});

document.querySelector('#year').textContent = new Date().getFullYear();

const navigationLinks = [...document.querySelectorAll('.route-nav a[href^="#"]:not(.route-brand)')];
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      for (const link of navigationLinks) {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      }
    }
  }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
  for (const link of navigationLinks) {
    const target = document.querySelector(link.hash);
    if (target) observer.observe(target);
  }
}
