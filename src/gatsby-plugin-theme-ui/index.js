export default {
  useColorSchemeMediaQuery: false,
  useLocalStorage: false,
  breakpoints: ['40em', '52em', '64em'],
  colors: {
    background: '#f8faf9',
    white: '#FFF',
    link: '#d34848',
    text: '#333',
    primary: '#8aae92',
    highlight: '#d34848',
    green: {
      1: '#f8faf9', // + 11
      2: '#c6d8ca', // + 6
      3: '#b2cab7', // + 4
      4: '#9ebca5', // + 2
      5: '#8aae92', // palette main green
      6: '#6c9976', // + 3
      7: '#567c5e', // + 6
      8: '#415e48', // + 9
      9: '#2c4031', // + 12
    },
    grey: {
      0: '#f9f9f9',
      1: '#ededed',
      2: '#e0e0e0',
      3: '#d2d2d2',
      4: '#c3c3c3',
      5: '#b2b2b2',
      6: '#9f9f9f',
      7: '#888888',
      8: '#6c6c6c',
      9: '#3f3f3f',
    },
  },
  fonts: {
    body: 'Lato,sans-serif',
    heading: 'Cinzel,sans-serif',
  },
  fontSizes: [12, 14, 18, 20, 24, 32, 48, 64, 72, 112],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.4,
    heading: 1.2,
  },
  layout: {
    container: {
      px: ['1rem', '1rem', '0px'],
      mt: '2rem',
      mb: '4rem',
    },
  },
  sizes: {
    container: '960px',
  },
  text: {
    default: {
      display: 'block', // fix for theme-ui v6 (div => span)
    },
    paragraph: {
      fontSize: 3,
      lineHeight: 1.6,
      pb: '0.5rem',
    },
  },
  styles: {
    root: {
      height: '100vh',
      overflowX: 'hidden',
      overflowY: 'hidden',
      minWidth: '440px',
      margin: 0,
      body: {
        margin: 0,
        height: '100%',
        width: '100%',
        position: 'relative',
        zIndex: 0,
        bg: 'background',
      },
      '#___gatsby': {
        height: '100%',
      },
      '#___gatsby > *': {
        height: '100%',
      },
      fontFamily: 'body',
      fontWeight: 'body',
      fontSize: 3,
      lineHeight: 'body',
      h1: {
        variant: 'text.heading',
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontSize: [5, 6],
        mb: '1rem',
      },
      h2: {
        variant: 'text.heading',
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontSize: [5, 6],
      },
      h3: {
        variant: 'text.heading',
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontSize: [4, 5],
        my: 0,
      },
      h4: {
        variant: 'text.heading',
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontSize: [2, 3],
      },
      a: {
        color: 'link',
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline',
        },
      },
      p: {
        fontSize: 3,
        lineHeight: 'body',
        pb: '0.5rem',
      },
      ul: {
        fontSize: 3,
        my: 0,
        'li + li': {
          mt: '0.5em',
        },
      },
      code: {
        bg: 'grey.1',
        py: '0.1em',
        px: '0.25em',
        borderRadius: '0.25em',
      },
      blockquote: {
        bg: 'grey.1',
        p: '1em',
        borderRadius: '0.5em',
        fontStyle: 'italic',
        mb: '2rem',
        '& p': {
          m: 0,
          pb: 0,
        },
      },
      figure: {
        margin: 0,
      },
    },
    hr: {
      borderBottom: '3px solid',
      borderBottomColor: 'green.3',
      my: '3rem',
      light: {
        borderBottom: '1px solid',
        borderBottomColor: 'grey.1',
        my: '3rem',
      },
    },
  },
}
