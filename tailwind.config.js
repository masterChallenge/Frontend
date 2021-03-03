module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#8EB540',
        'secondary-lighter': '#7D7AB8',
        'secondary-light': '#524F92',
        secondary: '#35335E',
        'secondary-darker': '#0C0A2D',
        dark: '#191919',
        light: '#F5F6FA',
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
