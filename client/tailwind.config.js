/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        layout: `
          linear-gradient(
            to bottom,
            rgba(255, 255, 220, 0.7),
            rgba(240, 200, 100, 0.7)
          ),
          url('./src/assets/bg1.jpg')
        `,
      },
    },
  },
  plugins: [],
}

