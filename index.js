const currentPath = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  const linkPath = link.getAttribute('href');
  if(linkPath === currentPath) {
    link.classList.add('text-blue-400', 'scale-125');
  } else {
    link.classList.add('text-white');
  }
});