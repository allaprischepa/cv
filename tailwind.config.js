/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      width: {
        'aside': '38%',
      },
      borderWidth: {
        '36': '36px',
      },
      listStyleType: {
        'circle': 'circle',
      },
    },
  },
  plugins: [],
}
