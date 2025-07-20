const modalOverlay = document.querySelector('.modal-overlay');
const openBtn = document.querySelector('[data-open-modal]');
const closeBtn = document.querySelector('[data-close-modal]');

openBtn.addEventListener('click', () => {
  modalOverlay.classList.add('active');
  modalOverlay.removeAttribute('hidden');
});

closeBtn.addEventListener('click', () => {
  modalOverlay.classList.remove('active');
  modalOverlay.setAttribute('hidden', true);
});
