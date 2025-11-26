/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        'nexpro-dark': '#0a1628',
        'nexpro-darker': '#051121',
        'nexpro-card': '#1a2942',
        'nexpro-border': '#2a3f5f',
        'nexpro-orange': '#ff8c42',
      },
    },
  },
  plugins: [],
};
