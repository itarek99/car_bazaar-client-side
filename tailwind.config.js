/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        'car-bazar-theme': {
          primary: '#F0151F',
          secondary: '#f6d860',
          accent: '#37cdbe',
          neutral: '#ffffff',
          'base-100': '#ffffff',
          '--rounded-btn': '3px',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
