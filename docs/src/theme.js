import React from 'react'
import { Global, css } from '@emotion/core'
import palette from 'material-colors'

const baseHeight = 8

const breakpoints = ['40em', '52em', '64em', '100em']

const fontFamilies = [
  `-apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Helvetica Neue, sans-serif`,
]

const colors = {
  primary: palette.pink[500],
  secondary: palette.brown[200],

  code: {
    bgInline: `#fbf2e9`,
    bg: `#fdfaf6`,
    border: `#faede5`,
    text: `#866c5b`,
    remove: `#e45c5c`,
    add: `#4a9c59`,
    selector: `#b3568b`,
    tag: `#4084a1`,
    keyword: `#538eb6`,
    comment: `#6f8f39`,
    punctuation: `#53450e`,
    regex: `#d88489`,
    cssString: `#a2466c`,
    invisibles: `#e0d7d1`,
    scrollbarThumb: `#f4d1c6`,
    lineHighlightBorder: `#f1beb6`,
    borders: `#fbe7f3`,
  },

  palette: palette,
}

const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]

const fontSizes = [12, 14, 16, 18, 24, 32, 48, 64]

const lineHeights = [1, 1.125, 1.25, 1.5]

const fontWeights = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
}

const TextVariants = {
  h1: {
    fontSize: [4, 5],
    fontWeight: 'normal',
    lineHeight: 0,
  },
  h2: {
    fontSize: [3, 4],
    lineHeight: [1.3334, 0],
    fontWeight: 'semibold',
  },
  h3: {
    fontSize: [2, 3],
    lineHeight: [1.5, 1.3334],
    fontWeight: 'bold',
  },
  h4: {
    fontSize: 0,
    lineHeight: 1.3334,
    fontWeight: 'bold',
  },
  h5: {
    fontSize: 3,
    lineHeight: 1.3334,
  },
  h6: {
    fontSize: 0,
    lineHeight: 1.3334,
    fontWeight: 'medium',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
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

export const syntaxTheme = css`
  .react-live-preview {
    font-family: ${fontFamilies[0]};
  }

  .prism-code:focus {
    outline: none;
    box-shadow: 0px 0px 0px 3px ${colors.code.borders};
  }

  /*
  Name:   Duotone Light
  Author: Simurai, adapted from DuoTone themes for Atom (http://simurai.com/projects/2016/01/01/duotone-themes)

  Conversion: Bram de Haan (http://atelierbram.github.io/Base2Tone-prism/output/prism/prism-base2tone-morning-light.css)
  Generated with Base16 Builder (https://github.com/base16-builder/base16-builder)
  */
  code[class*='language-'],
  pre[class*='language-'] {
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono,
      Courier New, monospace;
    font-size: 14px;
    line-height: 1.375;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    background: ${colors.code.bg};
    color: #222;
  }

  pre[class*='language-']::-moz-selection,
  pre[class*='language-'] ::-moz-selection,
  code[class*='language-']::-moz-selection,
  code[class*='language-'] ::-moz-selection {
    text-shadow: none;
    background: #faf8f5;
  }

  pre[class*='language-']::selection,
  pre[class*='language-'] ::selection,
  code[class*='language-']::selection,
  code[class*='language-'] ::selection {
    text-shadow: none;
    background: #faf8f5;
  }

  /* Code blocks */
  pre[class*='language-'] {
    padding: 16px;
    overflow: auto;
  }

  /* Inline code */
  :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    border-radius: 0.3em;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: ${colors.code.comment};
  }

  .token.punctuation {
    color: ${colors.code.punctuation};
  }

  .token.namespace {
    opacity: 0.7;
  }

  .token.tag,
  .token.number {
    color: ${colors.code.tag};
  }

  .token.tag.punctuation,
  .token.tag.script-punctuation,
  .token.operator {
    color: ${colors.code.punctuation};
  }

  .token.property,
  .token.function {
    color: ${colors.code.selector};
  }

  .token.tag-id,
  .token.selector,
  .token.string,
  .token.atrule-id {
    color: ${colors.code.selector};
  }

  code.language-javascript,
  .token.attr-name {
    color: ${colors.code.selector};
  }

  code.language-css,
  code.language-scss,
  .token.boolean,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .language-scss .token.string,
  .style .token.string,
  .token.attr-value,
  .token.keyword,
  .token.control,
  .token.directive,
  .token.unit,
  .token.statement,
  .token.regex,
  .token.atrule {
    color: ${colors.code.keyword};
  }

  .token.placeholder,
  .token.variable {
    color: #93abdc;
  }

  .token.deleted {
    text-decoration: line-through;
  }

  .token.inserted {
    border-bottom: 1px dotted #2d2006;
    text-decoration: none;
  }

  .token.italic {
    font-style: italic;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.important {
    color: #896724;
  }

  .token.entity {
    cursor: help;
  }

  pre > code.highlight {
    outline: 0.4em solid #896724;
    outline-offset: 0.4em;
  }

  /* overrides color-values for the Line Numbers plugin
 * http://prismjs.com/plugins/line-numbers/
 */
  .line-numbers .line-numbers-rows {
    border-right-color: #ece8de;
  }

  .line-numbers-rows > span:before {
    color: #cdc4b1;
  }

  /* overrides color-values for the Line Highlight plugin
 * http://prismjs.com/plugins/line-highlight/
 */
  .line-highlight {
    background: rgba(45, 32, 6, 0.2);
    background: -webkit-linear-gradient(
      left,
      rgba(45, 32, 6, 0.2) 70%,
      rgba(45, 32, 6, 0)
    );
    background: linear-gradient(
      to right,
      rgba(45, 32, 6, 0.2) 70%,
      rgba(45, 32, 6, 0)
    );
  }

  .token-line:not(:last-child) {
    line-height: 20px;
    :before {
      content: ' ';
      font-size: 0;
      display: inline-block;
      height: 0;
    }
  }
`
