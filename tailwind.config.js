module.exports = {
  // purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '13/12': '1.08333333333%',
      },
      height: {
        '128': '32rem',
        'slider': 'calc(100vh - 112px)',
        '13/12': '1.08333333333%',
      },
      minHeight: {
        '60': '15rem',
        '120': '30rem',
      },
      textColor: {
        'primary': '#FED831',
      },
      backgroundColor: {
        'primary': '#FED831',
      },
      paddingLeft: {
        '15': '3.75rem',
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