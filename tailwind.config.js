/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/bg.png')",
        'frame-default': "url('/src/assets/cardframe/default.png')",
        'cebollurl': "url('/src/assets/splasharts/cebollurl.png')",
        'rasputin': "url('/src/assets/splasharts/rasputin.png')",
        'marry': "url('/src/assets/splasharts/marry.png')",
      }
    },
  },
  plugins: [],
}