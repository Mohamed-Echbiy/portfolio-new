/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      maxWidth: {
        "9xl": "1800px",
      },
      colors: {
        primary: "#F7F7F7",
        secondary: "#121212",
        accent: "#7851A9",
        link: "#B8E3DE",
      },
      backgroundColor: {
        primary: "#121212",
        secondary: "#F7F7F7",
        "btn-primary": "#008080",
      },
    },
  },
  plugins: [],
};
