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
  black: '#0c0c0c', // same as grey.900
  grey: {
    100: '#e9e9e9', // grey + 16
    200: '#9c9c9c', // grey + 7
    300: '#8b8b8b', // grey + 5
    400: '#7a7a7a', // grey + 3
    500: '#616161', // Palette grey: http://www.0to255.com/616161
    600: '#484848', // grey - 3
    700: '#373737',
    800: '#262626',
    900: '#0c0c0c', // grey - 10
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
  red: {
    100: 'hsl(360, 77%, 95%)',
    200: 'hsl(360, 79%, 81%)',
    300: 'hsl(360, 71%, 73%)',
    400: 'hsl(360, 70%, 64%)',
    500: 'hsl(360, 71%, 53%)',
    600: 'hsl(360, 65%, 45%)',
    700: 'hsl(360, 61%, 38%)',
    800: 'hsl(360, 63%, 31%)',
    900: 'hsl(360, 60%, 24%)',
  },
  yellow: {
    100: 'hsl(44, 100%, 98%)',
    200: 'hsl(44, 90%, 92%)',
    300: 'hsl(45, 86%, 86%)',
    400: 'hsl(44, 90%, 80%)',
    500: 'hsl(43, 87%, 67%)',
    600: 'hsl(44, 57%, 52%)',
    700: 'hsl(43, 59%, 42%)',
    800: 'hsl(43, 64%, 34%)',
    900: 'hsl(44, 66%, 22%)',
  },
  green: {
    100: 'hsl(142, 81%, 94%)',
    200: 'hsl(141, 67%, 80%)',
    300: 'hsl(145, 65%, 68%)',
    400: 'hsl(146, 57%, 65%)',
    500: 'hsl(145, 55%, 49%)',
    600: 'hsl(145, 55%, 41%)',
    700: 'hsl(145, 59%, 33%)',
    800: 'hsl(155, 63%, 26%)',
    900: 'hsl(156, 61%, 20%)',
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
