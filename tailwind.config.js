/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        /* Primary */
          Lime: `lime-400`,
          Red: `red-500`,
          main: "hsl(202, 86%, 94%)",
          button: "#D8DB2F", // Changed to a color 5% lighter
          /* Neutral */
          White: `white`,
          Slate :{
            100: `gray-100`,
            300: `gray-300`,
            500: `gray-500`,
            700: `gray-700`,
            900: `gray-900`,
          },
      },

      fontFamily:{
        sans: ["Plus Jakarta Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}

