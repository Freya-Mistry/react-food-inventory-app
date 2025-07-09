/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}",  "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {colors: {
        primary: "#FFFFFF",
        secondary: {
          DEFAULT: "#C3C3C3",
        },
        black: {
          DEFAULT: "#000",
        },
      },
    },
  },
  plugins: [],
}