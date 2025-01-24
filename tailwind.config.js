/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        background: "var(--primary-background)",
        hightlight: "var(--highlight-color)",
      },
    },
  },
  plugins: [],
};
