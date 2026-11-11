/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // Core surfaces — deep indigo-navy instead of the old near-black/brown.
        primary: "#060818",
        tertiary: "#111533",
        "black-100": "#0c1028",
        "black-200": "#0a0d22",
        "white-100": "#eef1fb",

        // Body / muted text — cool slate instead of the old teal.
        secondary: "#9AA4C7",
        "secondary-light": "#C2CAE5",

        // Single, deliberate accent pairing used across buttons, borders & glows.
        accent: "#6C63FF",
        "accent-light": "#8F88FF",
        "accent-2": "#38BDF8",
      },
      fontFamily: {
        heading: ["Sora", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        card: "0px 30px 90px -20px rgba(6, 8, 24, 0.65)",
        glow: "0 0 45px -8px rgba(108, 99, 255, 0.45)",
        "glow-sm": "0 0 22px -6px rgba(108, 99, 255, 0.4)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.jpg')",
      },
    },
  },
  plugins: [
    require('@fortawesome/fontawesome-free'),
  ],
};
