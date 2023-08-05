/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-white': 'hsl(0, 0%, 100%)',
        'brand-black': 'hsl(0, 0%, 0%)',
        'brand-dark-blue': 'hsl(220, 13%, 13%)',
        'brand-light-grayish-blue': 'hsl(223, 64%, 98%)',
        'brand-dark-grayish-blue': 'hsl(219, 9%, 45%)',
        'brand-grayish-blue': 'hsl(220, 14%, 75%)',
        'brand-orange': 'hsl(26, 100%, 55%)',
        'brand-pale-orange': 'hsl(25, 100%, 94%)',
      },
    },
  },
  plugins: [],
}
