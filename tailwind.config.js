/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#131325",
        glassColor: "#1B1B31",
        primaryText: "#6564DB",
        contentTest: "#BFBFEA",
      },
    },
  },
  plugins: [],
};
