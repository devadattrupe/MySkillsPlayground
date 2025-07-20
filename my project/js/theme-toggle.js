// js/theme-toggle.js

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('themeToggle');
  const currentTheme = localStorage.getItem('theme');

  // Set saved theme on load
  if (currentTheme === 'dark') {
    document.documentElement.classList.add('dark');
  }

  // Toggle theme on click
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      const theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
      localStorage.setItem('theme', theme);
    });
  }
});
