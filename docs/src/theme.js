import React from 'react'
import { Global, css } from '@emotion/core'
import 'typeface-work-sans'

const defaultFont = 'Work Sans'

const baseHeight = 8

const breakpoints = ['40em', '52em', '64em', '100em']

const defaultFontList = `${defaultFont}, -apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Helvetica Neue, sans-serif`

const colors = {
  primary: '#9a0dd1',
  secondary: '#88c93a',
  gray: ['#333', '#666', '#999', '#ccc', '#eee', '#f6f6f6'],
}

const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]

const fontSizes = [13, 15, 16, 18, 24, 32, 48, 64]

const lineHeights = [1, 1.125, 1.25, 1.5]

const fontWeights = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
}

const fontFamilies = [defaultFontList]

const TextVariants = {
  h1: {
    fontSize: [4, 5],
    fontWeight: 'bold',
    lineHeight: 0,
  },
  h2: {
    fontSize: [3, 4],
    lineHeight: [1.3334, 0],
    fontWeight: 'bold',
  },
  h3: {
    fontSize: [2, 3],
    lineHeight: [1.5, 1.3334],
    fontWeight: 'bold',
  },
  h4: {
    fontSize: 0,
    lineHeight: 1.231,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 3,
    lineHeight: 1.3334,
    color: 'gray.1',
  },
  p: {
    fontSize: 1,
    lineHeight: 1.6,
  },
  label: {
    fontSize: 1,
    lineHeight: 1,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 0,
    lineHeight: 2,
    color: 'gray.1',
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
  textTransform: 'uppercase',
}
const ButtonVariants = {
  secondary: {
    bg: 'secondary',
    color: 'white',
  },
  plain: {
    bg: 'gray.4',
    color: 'gray.0',
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
  constrain: {
    maxWidth: 960,
    px: 3,
    width: '100%',
    mx: 'auto',
  },
  section: {
    p: 3,
    width: '100%',
    mx: 'auto',
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
        color: ${colors.primary};
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
