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
    },
  },
  plugins: [],
}

