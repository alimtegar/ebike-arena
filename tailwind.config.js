module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '13/12': '1.08333333333%',
      },
      height: {
        '128': '32rem',
        '13/12': '1.08333333333%',
      },
      backgroundColor: {
        'primary': '#FED831',
      }
    },
  },
  variants: {
    extend: {
      scale: ['active', 'group-hover'],
    },
  },
  plugins: [],
}