const { Montserrat } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'regal-blue': '#243c5a',
        'golden': '#DEC364',
        'pink' : '#F08A8A',
        'gethub' : '#033047',
      },
    },
    fontFamily : {
      poppins: ['Poppins', 'sans-serif'],
      Montserrat: ['Montserrat', 'sans-serif'],
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/line-clamp'),
  ],
};
