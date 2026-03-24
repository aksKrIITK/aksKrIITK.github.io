/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#07091a',
        bg2: '#0c1024',
        bg3: '#111627',
        bg4: '#18203a',
        accent: '#00d4ff',
        violet: '#7b61ff',
        amber: '#f59e0b',
        textLight: '#e2e8f0',
        muted: '#8892a4',
        dim: '#4a5568',
        borderC: 'rgba(0, 212, 255, 0.12)',
        borderW: 'rgba(255, 255, 255, 0.07)',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
