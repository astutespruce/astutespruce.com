import Typography from 'typography'

import { theme } from 'style/theme'

const typography = new Typography({
  title: 'Mediterranean',
  baseFontSize: '20px',
  baseLineHeight: 1.45,
  headerFontFamily: ['Cinzel'],
  bodyFontFamily: ['Lato'],
  scaleRatio: 2.441,
  headerWeight: 700,
  headerColor: theme.colors.grey[900],
  bodyColor: theme.colors.grey[900],
  overrideStyles: () => ({
    html: {
      height: '100%',
      overflowY: 'auto',
      minWidth: '440px',
    },
    body: {
      height: '100%',
    },
    a: {
      color: theme.colors.accent[700],
      textDecoration: 'none',
    },
    'a:hover': {
      textDecoration: 'underline',
    },
    blockquote: {
      color: theme.colors.grey[900],
      background: theme.colors.grey[100],
      padding: '1rem',
      fontStyle: 'italic',
      borderRadius: '0.5rem',
    },
  }),
})

export default typography
