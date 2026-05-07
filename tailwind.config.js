/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          black: "#0a0e27",
          dark: "#1a1f3a",
          darker: "#141829",
          silver: "#c0c0c0",
          platinum: "#e8e8e8",
          accent: "#00d4ff",
          accent2: "#00ff88",
          gold: "#ffd700",
          neon: "#00d4ff",
        },
      },
      fontFamily: {
        luxury: ["'Syne Mono'", "monospace"],
        display: ["'Space Grotesk'", "sans-serif"],
      },
      backgroundImage: {
        "gradient-luxury": "linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)",
        "gradient-accent": "linear-gradient(135deg, #00d4ff 0%, #00ff88 100%)",
        "glass-effect": "rgba(255, 255, 255, 0.1)",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        "glow-blue": "0 0 20px rgba(0, 212, 255, 0.5)",
        "glow-green": "0 0 20px rgba(0, 255, 136, 0.5)",
        "glow-gold": "0 0 20px rgba(255, 215, 0, 0.5)",
        "luxury": "0 20px 40px rgba(0, 212, 255, 0.2)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "shimmer": "shimmer 8s linear infinite",
        "slide-in": "slide-in 0.5s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 20px rgba(0, 212, 255, 0.5)" },
          "50%": { opacity: "0.7", boxShadow: "0 0 40px rgba(0, 212, 255, 0.8)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        "slide-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
}
