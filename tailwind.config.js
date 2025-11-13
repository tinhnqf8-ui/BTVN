/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // quan trọng: để Tailwind quét toàn bộ file React
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
