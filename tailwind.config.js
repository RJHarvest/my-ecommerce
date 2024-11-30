/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        black: "var(--color-black)",
        white: "var(--color-white)",
        border: "var(--color-border)",
        shadow: "var(--color-shadow)",
        background: "var(--color-background)",
        text: "var(--color-text)",
      }
    },
  },
  plugins: [],
}
