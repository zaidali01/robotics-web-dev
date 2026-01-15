// 1. Highlight Active Link logic removed in favor of hardcoded HTML classes for stability

// 2. Mobile Menu Logic
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');

if (btn && menu) {
  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
  });
}