tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            mono: ['Orbitron', 'sans-serif'],
          },
          animation: {
            'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
          },
          keyframes: {
            fadeInUp: {
              '0%': { opacity: '0', transform: 'translateY(20px)' },
              '100%': { opacity: '1', transform: 'translateY(0)' },
            }
          }
        }
      }
    }

      // Mobile Menu Logic
      const btn = document.getElementById('menu-btn');
      const menu = document.getElementById('mobile-menu');

      btn.addEventListener('click', () => {
          menu.classList.toggle('hidden');
          menu.classList.toggle('flex');
      });