import { css } from '@emotion/react'
import { withPrefix } from 'gatsby'

// adapted from https://github.com/KyleAMathews/typefaces/blob/master/packages/lato/index.css

const prefix = withPrefix('/fonts')

export const fonts = css`
  @font-face {
    font-family: 'Cinzel';
    font-style: normal;
    font-display: block;
    font-weight: 700;
    src:
      local('Cinzel Bold'),
      local('Cinzel-Bold'),
      url('${prefix}/Cinzel-Bold.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-display: block;
    font-weight: 400;
    src:
      local('Lato Regular'),
      local('Lato-Regular'),
      url('${prefix}/Lato-Regular.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Lato';
    font-style: italic;
    font-display: block;
    font-weight: 400;
    src:
      local('Lato Italic'),
      local('Lato-Italic'),
      url('${prefix}/Lato-Italic.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-display: block;
    font-weight: 700;
    src:
      local('Lato Bold'),
      local('Lato-Bold'),
      url('${prefix}/Lato-Bold.woff2') format('woff2');
  }
`
