import React from 'react'
import { Global, css } from '@emotion/core'
import palette from 'material-colors'

const baseHeight = 8

const breakpoints = ['40em', '60em', '64em', '100em']

const fontFamilies = [
  `-apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Helvetica Neue, sans-serif`,
]

const colors = {
  primary: palette.pink[500],
  secondary: palette.brown[200],

  code: {
    bgInline: `#fbf2e9`,
    bg: palette.blueGrey[900],
    punctuation: palette.grey[300],
    selector: palette.lightGreen[400],
    tag: palette.red[400],
    comment: palette.blueGrey[500],
    keyword: palette.purple[200],
    operator: palette.orange[400],
    number: palette.amber[400],
    function: palette.blue[300],
    border: palette.blueGrey[900],
    borders: palette.blueGrey[100],
    text: palette.grey[200],
    jstext: palette.blueGrey[100],
    remove: `#e45c5c`,
    add: `#4a9c59`,
    regex: `#d88489`,
    cssString: `#a2466c`,
    invisibles: `#e0d7d1`,
    scrollbarThumb: `#f4d1c6`,
    lineHighlightBorder: `#f1beb6`,
  },

  palette: palette,
}

const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]

const fontSizes = [12, 14, 16, 18, 24, 32, 48, 64]

const lineHeights = [1, 1.125, 1.25, 1.5]

const fontWeights = {
  light: 100,
  thin: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
}

const TextVariants = {
  h1: {
    fontSize: [5, 6],
    fontWeight: 'semibold',
    lineHeight: 0,
  },
  h2: {
    fontSize: [3, 4],
    lineHeight: [1.3334, 0],
    fontWeight: 'medium',
  },
  h3: {
    fontSize: [2, 3],
    lineHeight: [1.5, 1.3334],
    fontWeight: 'bold',
  },
  h4: {
    fontSize: 2,
    lineHeight: 1.5,
    fontWeight: 'bold',
  },
  h5: {
    fontSize: 1,
    lineHeight: 1.3334,
    fontWeight: 'bold',
  },
  h6: {
    fontSize: 0,
    lineHeight: 1.3334,
    fontWeight: 'medium',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  subhead1: {
    fontSize: 3,
    lineHeight: 1.3334,
    color: colors.palette.grey[600],
  },
  caption: {
    fontSize: 0,
    lineHeight: 1.3334,
  },
  p: {
    fontSize: 2,
    lineHeight: 1.5,
  },
}

const Button = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: baseHeight * 4,
  px: 3,
  bg: 'primary',
  color: 'white',
  border: 0,
  fontSize: 1,
  lineHeight: 0,
  fontWeight: 'bold',
}
const ButtonVariants = {
  secondary: {
    bg: 'secondary',
    color: 'white',
  },
  plain: {
    bg: 'palette.grey.200',
    color: 'palette.grey.900',
  },
  large: {
    height: 48,
    px: 4,
  },
  small: {
    fontSize: 0,
    fontWeight: 'semibold',
    textTransform: 'none',
    height: 24,
    px: 2,
  },
  icon: {
    width: 35,
    px: 0,
    bg: 'transparent',
    color: 'gray.0',
  },
  transparent: {
    bg: 'transparent',
    color: '#181818',
    fontWeight: 'semibold',
  },
}

const Link = {}
const LinkVariants = {}

const Box = {}
const BoxVariants = {
  container: {
    maxWidth: ['100%', 680],
    px: 3,
    width: '100%',
    mx: 'auto',
  },
  section: {
    p: 3,
    width: '100%',
    mx: 'auto',
  },
  cover: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
}

export default {
  breakpoints,
  colors,
  space,
  fontSizes,
  lineHeights,
  fontWeights,
  fontFamilies,
  TextVariants,
  Box,
  BoxVariants,
  Button,
  ButtonVariants,
  Link,
  LinkVariants,
}

export const GlobalStyle = () => (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      html {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-size-adjust: 100%;
        text-rendering: optimizeLegibility;
      }
      html,
      body {
        font-family: ${fontFamilies[0]};
        font-size: ${fontSizes[1]}px;
        line-height: ${lineHeights[3]};
        position: relative;
        min-height: 100vh;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        font-family: inherit;
      }
      p a {
        color: ${colors.code.primary};
      }
      a {
        color: inherit;
        text-decoration: none;
      }
      input.text,
      textarea,
      input[type='text'],
      input[type='tel'],
      input[type='email'],
      input[type='search'],
      input[type='button'],
      input[type='submit'],
      select {
        -webkit-appearance: none;
        border-radius: 0;
        :active,
        :focus {
          outline: none;
        }
      }
      button {
        :active,
        :focus {
          outline: none;
        }
      }
    `}
  />
)
