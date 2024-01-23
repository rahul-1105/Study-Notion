/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'richblack': 'rgb(0, 8, 20)',
      },
    },
  },
  plugins: [],
}

