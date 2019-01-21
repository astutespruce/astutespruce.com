import Typography from 'typography'

import { theme } from 'util/style/theme'

const typography = new Typography({
  title: 'Mediterranean',
  baseFontSize: '20px',
  baseLineHeight: 1.45,
  googleFonts: [
    {
      name: 'Cinzel',
      styles: ['700'],
    },
    {
      name: 'Exo+2',
      styles: ['400', '400i', '700', '700i'],
    },
  ],
  headerFontFamily: ['Cinzel'],
  bodyFontFamily: ['Exo 2'],
  scaleRatio: 2.441,
  headerWeight: 700,
  overrideStyles: () => ({
    html: {
      height: '100%',
      overflowY: 'auto',
    },
    body: {
      height: '100%',
      backgroundColor: theme.colors.background,
    },
    a: {
      color: theme.colors.accent[700],
      textDecoration: 'none',
    },
    'a:hover': {
      textDecoration: 'underline',
    },
  }),
})

export default typography
