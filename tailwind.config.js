/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg-mob-1x": "./app/images/hero/mobile/hero-mob@1x.jpg",
        "hero-bg-mob-2x": "./app/images/hero/mobile/hero-mob@2x.jpg",
      },
    },
    screens: {
      sm: "320px",

      md: "768px",

      lg: "1440px",
    },

    container: {
      center: true,
      padding: {
        sm: "20px",
        md: "20px",
        lg: "80px",
      },
    },
  },
  plugins: [],
};
