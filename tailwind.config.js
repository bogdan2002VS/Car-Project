/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Mazda "Soul Red Crystal" derived accent scale
        mazda: {
          50: '#FCEAEC',
          100: '#F8CDD2',
          200: '#F09AA4',
          300: '#E66576',
          400: '#D83A4F',
          500: '#C71530', // vivid accent (buttons / dark-mode accent)
          600: '#A30015', // brand Soul Red
          700: '#850012',
          800: '#66000E',
          900: '#470009',
        },
        // Jet Black Mica neutrals
        ink: {
          50: '#F6F6F7',
          100: '#E4E4E7',
          200: '#C9CACE',
          300: '#9A9CA3',
          400: '#6B6E76',
          500: '#494C54',
          600: '#33363C',
          700: '#26282D',
          800: '#1F2124',
          900: '#141517',
          950: '#0B0B0C',
        },
        // Machine Gray Metallic
        machine: {
          DEFAULT: '#5A5E63',
          dark: '#41454B',
        },
      },
      fontFamily: {
        display: ['Montserrat', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(11,11,12,0.04), 0 4px 16px rgba(11,11,12,0.06)',
      },
      keyframes: {
        'slide-up': {
          '0%': { transform: 'translateY(8px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'slide-up': 'slide-up 0.18s ease-out',
      },
    },
  },
  plugins: [],
}
