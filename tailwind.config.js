module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Custom background color (adjust as needed)
        "custom-background": "#ffffff", // Or any other color
      },
    },
  },
  plugins: [require("daisyui")],
};
