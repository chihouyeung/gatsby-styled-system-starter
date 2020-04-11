import { createGlobalStyle } from 'styled-components'

export default {
  breakpoints: ['40em', '52em', '64em'],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: {
    blue: '#697af3',
    lightgray: '#f6f6ff',
    darkgray: '#363636',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'inherit',
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  radii: ['0px', '4px', '8px', '16px', '9999px'],
  shadows: {
    small: 'rgba(0, 0, 0, 0.3) 0px 1px 3px',
    large: '0 0 24px rgba(0, 0, 0, .125)',
  },
  variants: {},
  text: {},
  buttons: {
    primary: {
      color: 'white',
      background: 'linear-gradient(133deg, #697af3 0%, #4b77be 100%)',
    },
  },
}

export const GlobalStyle = createGlobalStyle`
body {
    color: #000;
    background-color: #fff;
    font-family:system-ui, sans-serif;
    -webkit-font-smoothing: antialiased;
    /* font-size: 16px; */
    line-height: 1.5;
    box-sizing: border-box;
}

*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}
`
