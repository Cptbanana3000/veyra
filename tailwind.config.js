/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#E11D48", // Single purposeful spot color: muted rose
          hover: "#BE123C",
          subtle: "rgba(225, 29, 72, 0.08)",
          border: "rgba(225, 29, 72, 0.2)"
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        'sm': '4px',
        'DEFAULT': '6px',
        'md': '8px',
        'lg': '10px',
        'xl': '12px',
      }
    },
  },
  plugins: [],
}
