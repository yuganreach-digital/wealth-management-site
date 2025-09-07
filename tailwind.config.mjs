/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'navy': {
          50: '#f0f4f8',
          900: '#1a2332',
        },
        'gold': {
          400: '#f5d769',
          500: '#d4af37',
          600: '#b8941f',
        },
        'slate': {
          50: '#f8f9fa',
          100: '#f1f3f4',
          200: '#e8eaed',
          300: '#dadce0',
          400: '#bdc1c6',
          500: '#9aa0a6',
          600: '#80868b',
          700: '#5f6368',
          800: '#3c4043',
          900: '#202124',
        }
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-up-delay': 'fadeUp 0.8s ease-out 0.2s forwards',
        'fade-up-delay-2': 'fadeUp 0.8s ease-out 0.4s forwards',
        'slide-up': 'slideUp 1s ease-out forwards',
        'parallax': 'parallax 20s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(30px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          },
        },
        slideUp: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(60px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          },
        },
        parallax: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      typography: {
        DEFAULT: {
          css: {
            lineHeight: '1.7',
            letterSpacing: '0.025em',
          }
        }
      }
    },
  },
  plugins: [],
}
