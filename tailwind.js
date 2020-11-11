module.exports = {
  future: {},
  purge: [],
  theme: {
      screens: {
        mobile: '375px',
        desktop: '1366px',
      },
      fontFamily: {
        body: ['Barlow Semi Condensed', 'sans-serif']
      },
      colors: {
        scissorsGradient: {
          start: 'hsl(39, 89%, 49%)',
          end: 'hsl(40, 84%, 53%)'
        },
        paperGradient: {
          start: 'hsl(230, 89%, 62%)',
          end: 'hsl(230, 89%, 65%)'
        },
        darkText: 'hsl(229, 25%, 31%)' ,
        scoreText: 'hsl(229, 64%, 46%)',
        headerOutline: 'hsl(217, 16%, 45%)',
        backgroundGradient: {
          start: 'hsl(214, 47%, 23%)',
          end: 'hsl(237, 49%, 15%)'
        }
      },
    extend: {},
  },
  variants: {},
  plugins: [],
}