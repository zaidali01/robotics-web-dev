tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['Orbitron', 'sans-serif'],
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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

      // Simple Countdown Animation (Visual Effect)
      // This reduces the seconds to give it a "live" feel
      setInterval(() => {
          const secondsElement = document.querySelectorAll('.countdown-box span')[2]; // The 3rd box (Mins/Secs) placeholder
          // In a real app, you would calculate real dates here. 
          // For now, we keep it static or we could animate it if needed.
      }, 1000);