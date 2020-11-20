module.exports = {
  purge: [],
  theme: {
    extend: {},
    backgroundColor: theme => ({
      ...theme('colors'),
      'dark': '#3a3a3c',
      'secondary': '#fdac16',
      'secondarylighter': '#ffc10a',
      'lighter': '#7f7f7f',
    }),
    textColor: theme => ({ ...theme('colors'),
      'dark': '#3a3a3c',
      'secondary': '#fdac16',
      'secondarylighter': '#ffc10a',
      'lighter': '#7f7f7f',
     })
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')],
}
