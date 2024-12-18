/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
  			xxs: '0.725rem'
  		},
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gradient1: "#00B4BEBF",
        gradient2: "#253DA1BF",
        bgWhite: "#FBFBFF",
        greyBorder: "#4C4C4C33",
        bgButton: "#02055A",
        lineColor: "#AFAFAF33",
        borderButton: "#74747433",
      },
    },
  },
  plugins: [],
};
