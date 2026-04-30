/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F5A623',
        'primary-dark': '#E09400',
        'sidebar-bg': '#ffffff',
        'active-nav': '#F5A623',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
