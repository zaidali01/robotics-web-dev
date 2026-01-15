tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Orbitron', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    }
  }
}
// 2. Project Filter Logic
function filterProjects(category) {
  const cards = document.querySelectorAll('.project-card');
  const buttons = document.querySelectorAll('.filter-btn');

  buttons.forEach(button => {
    if (button.textContent.toLowerCase().includes(category) || (category === 'all' && button.textContent === 'All')) {
      button.classList.remove('bg-white/5', 'text-gray-400', 'border-white/10');
      button.classList.add('bg-blue-500', 'text-white', 'border-blue-500');
    } else {
      button.classList.add('bg-white/5', 'text-gray-400', 'border-white/10');
      button.classList.remove('bg-blue-500', 'text-white', 'border-blue-500');
    }
  });

  cards.forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = 'block';
      card.style.opacity = '0';
      setTimeout(() => card.style.opacity = '1', 50);
    } else {
      card.style.display = 'none';
    }
  });
}