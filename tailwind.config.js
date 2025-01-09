// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',  // Busca en todos los archivos dentro de la carpeta app
    './app/components/**/*.{js,jsx,ts,tsx}',  // Busca en todos los archivos dentro de components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
