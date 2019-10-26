// const breakpoints = ['40em', '52em', '64em']
const breakpoints = ['768px', '1024px', '1216px']

const containerWidth = '960px'

// palette: https://colorhunt.co/palette/118963
// accent palette: https://colorhunt.co/palette/137720
// shades generated using: http://www.0to255.com

/**
 * Primary: Colors to use for actionable items, such as links, buttons etc.
 * Grey: Colors for items that are not that important
 */
const colors = {
  background: '#f8faf9', // same as main green + 11
  white: 'hsl(0, 0%, 100%)',
  black: '#3f3f3f', // same as grey.900

  // https://palx.jxnblk.com/616161#gray
  grey: {
    0: '#f9f9f9',
    100: '#ededed',
    200: '#e0e0e0',
    300: '#d2d2d2',
    400: '#c3c3c3',
    500: '#b2b2b2',
    600: '#9f9f9f',
    700: '#888888',
    800: '#6c6c6c',
    900: '#3f3f3f',
  },
  accent: {
    700: '#d34848',
  },
  primary: {
    100: '#f8faf9', // + 11
    200: '#c6d8ca', // + 6
    300: '#b2cab7', // + 4
    400: '#9ebca5', // + 2
    500: '#8aae92', // palette main green
    600: '#6c9976', // + 3
    700: '#567c5e', // + 6
    800: '#415e48', // + 9
    900: '#2c4031', // + 12
  },
}

/**
 * Space is used for margin and padding scales.
 * It's recommended to use powers of two to ensure alignment across the entire project
 */
const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]

/**
 * Typographic scale
 */
// base font size is 20
const fontSizes = [
  '0.5rem',
  '0.75rem',
  '0.9rem',
  '1rem',
  '1.25rem',
  '1.5rem',
  '2rem',
  '3rem',
  '4rem',
]
// const fontSizes = [10, 12, 14, 16, 20, 24, 32, 48, 64, 96, 128]

const lineHeights = [1, 1.125, 1.25, 1.5]

const fontWeights = {
  normal: 400,
  semibold: 600,
}

/**
 * Letter-spacing should vary, depending on usage of text
 */
const letterSpacings = {
  normal: 'normal',
  caps: '0.25em',
  labels: '0.05em',
}

/**
 * Border-radius
 */
const radii = [0, 2, 4, 8, 16]

export const theme = {
  name: 'Default',
  breakpoints,
  colors,
  space,
  fontSizes,
  lineHeights,
  fontWeights,
  letterSpacings,
  radii,
  containerWidth,
}
