const currentPath = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('nav a');

// 1. Highlight Active Link
navLinks.forEach(link => {
  const linkPath = link.getAttribute('href');
  if(linkPath === currentPath) {
    link.classList.add('text-blue-400', 'scale-125');
    link.classList.remove('text-white');
  } else {
    link.classList.add('text-white');
    link.classList.remove('text-blue-400', 'scale-125');
  }
});

// 2. Mobile Menu Logic
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');

if (btn && menu) {
    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
        menu.classList.toggle('flex');
    });
}