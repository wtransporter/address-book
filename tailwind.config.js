module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    extend: {
      textColor: ['active']
    }
  },
  plugins: []
}
