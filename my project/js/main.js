// theme toggle
document.getElementById('themeToggle').addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
});

// modal
document.querySelector('[data-open-modal]').addEventListener('click', () => {
  document.getElementById('modalOverlay').hidden = false;
});
document.querySelector('.close').addEventListener('click', () => {
  document.getElementById('modalOverlay').hidden = true;
});
