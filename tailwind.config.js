/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  purge: [
    './src/**/*.html',
    './src/**/*.tsx',
    './src/**/*.jsx',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

