/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/images/hero_bg.svg')",
        "service-arrow-bg": "url('/src/assets/images/service-bg.svg')",
        "globe-bg": "url('/src/assets/images/globe.png')",
        "our-service-bg": "url('/src/assets/images/our-service-bg.svg')",
      },
      colors: {
        shark: "#191A1C",
        oslo_gray: "#8F9092",
        anzac: "#E1A83F",
        ebony_clay: "#25283A",
      },
    },
  },
  plugins: [],
};
``