module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#4A7BA7",
          dark: "#3A5F87",
        },
        accent: "#B8CD7A",
        neutral: {
          900: "#0B1220",
          800: "#1A2636",
          600: "#4B5563",
          200: "#E6EEF9",
          100: "#F7FAFF",
        },
        success: "#16A34A",
        warning: "#F59E0B",
        danger: "#EF4444",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        display: ["Poppins", "Inter"],
      },
    },
  },
  plugins: [],
}