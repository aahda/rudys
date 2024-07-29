/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        agrandarPrecio: {
          "0%": { fontSize: "150%" },
          "50%": { fontSize: "180%" },
          "100%": { fontSize: "150%" },
        },

        scrollGallery: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        agrandarPrecio: "agrandarPrecio 3s infinite ease-in-out",

        scrollGallery: "scrollGallery 20s linear infinite",
      },
    },

    screens: {
      sm: { max: "450px" },
    },
  },
  plugins: [],
};
