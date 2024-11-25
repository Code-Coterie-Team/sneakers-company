/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dg-blue": "hsl(219, 9%, 45%)",
      },
      boxShadow: {
        'boxCart': 'rgba(0, 0, 0, 0.15) 0rem 1rem 2rem;',
        'boxBtn': '1px 1rem 1.5rem rgba(0, 0, 0, 0.13)',
      },
    },
  },
  plugins: [],
}

