/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fraunces: ['Fraunces', 'serif'],
        merriweather: ['Merriweather', 'serif'],
        slabo: ['"Slabo 27px"', 'serif'],
      },
    },
  },
  plugins: [],
}