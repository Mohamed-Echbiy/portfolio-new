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
        primary: "#A9A9A1",
        secondary: "#121212",
        accent: "#82B74B",
        link: "#B8E3DE",
      },
      backgroundColor: {
        primary: "#0A192F",
        secondary: "#F7F7F7",
        "btn-primary": "#008080",
      },
    },
  },
  plugins: [],
};
