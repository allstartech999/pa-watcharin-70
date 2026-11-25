/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Prompt', 'Sarabun', 'sans-serif'],
        heading: ['Kanit', 'Prompt', 'sans-serif'],
      },
      colors: {
        pastel: {
          blue: '#e0f2fe',
          indigo: '#e0e7ff',
          sky: '#bae6fd',
          rose: '#ffe4e6',
          amber: '#fef3c7',
          emerald: '#d1fae5',
          violet: '#ede9fe',
          teal: '#ccfbf1',
        },
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc7fb',
          400: '#38a9f6',
          500: '#0e8ce6',
          600: '#026fc5',
          700: '#03589f',
          800: '#074b83',
          900: '#0c3f6d',
          950: '#082848',
        }
      },
      boxShadow: {
        'soft': '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 25px -5px rgba(14, 140, 230, 0.25)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
}
