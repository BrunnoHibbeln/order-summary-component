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
        'pale-blue': 'hsl(225, 100%, 94%)',
        'bright-blue': 'hsl(245, 75%, 52%)',
        'very-pale-blue': 'hsl(225, 100%, 98%)',
        'desaturated-blue': 'hsl(224, 23%, 55%)',
        'dark-blue': 'hsl(223, 47%, 23%)',
      },
      fontSize: {
        body: '1rem',
      },
      fontFamily: {
        'red-hat': ['var(--font-red-hat)'],
      },
      backgroundImage: {
        mobile: ['url(./images/pattern-background-mobile.svg)'],
        desktop: ['url(./images/pattern-background-desktop.svg)'],
        hero: ['url(./images/illustration-hero.svg)'],
      },
      screens: {
        xs: '31.25rem',
      },
    },
  },
  plugins: [],
}
