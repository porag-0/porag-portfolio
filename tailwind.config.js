/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0D0D0D',
          secondary: '#171717',
          card: '#1C1C1C',
          border: '#303030',
          text: '#F5F5F5',
          muted: '#A1A1AA',
        },
        light: {
          bg: '#FAFAFA',
          secondary: '#F4F4F5',
          card: '#FFFFFF',
          border: '#E4E4E7',
          text: '#09090B',
          muted: '#71717A',
        },
        accent: {
          DEFAULT: '#FF6B35',
          hover: '#FF8254',
          subtle: 'rgba(255, 107, 53, 0.12)',
          border: 'rgba(255, 107, 53, 0.3)',
        },
        success: '#22C55E',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}
