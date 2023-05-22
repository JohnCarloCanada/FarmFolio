/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        SegoeUI: ["SegoeUI", "sans-serif"],
        SegeoUIBold: ["SegeoUIBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
