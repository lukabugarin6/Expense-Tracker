module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
       fontFamily: {
        'primary' : ['']
      },
      colors: {
        'primary' : '#4D6E9A',
        'secondary' : '#729DBF',
        'tertiary' : '#5F6366',
        'quaternary' : '#99CED3',
        'quinary' : '#EDB5BF',
      },
      borderWidth: {
        '1' : '1px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
