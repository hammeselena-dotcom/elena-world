/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "pastel",
      "winter",
      "cupcake",
      "dark",
      {
        elena: {
          "primary": "#7c3aed",     // violet-600
          "secondary": "#f472b6",   // pink-400
          "accent": "#22d3ee",      // cyan-400
          "neutral": "#111827",
          "base-100": "#fafafa",
          "info": "#60a5fa",
          "success": "#22c55e",
          "warning": "#f59e0b",
          "error": "#ef4444"
        }
      }
    ],
    darkTheme: "dark"
  }
};
