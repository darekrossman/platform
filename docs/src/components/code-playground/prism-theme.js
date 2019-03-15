import { css } from '@emotion/core'

export default theme => css`
  .react-live-preview {
    font-family: ${theme.fontFamilies[0]};
    white-space: normal;
  }

  .prism-code:focus {
    outline: none;
    box-shadow: 0px 0px 0px 3px ${theme.colors.code.borders};
  }

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
    background: ${theme.colors.code.bg};
    color: ${theme.colors.code.text};
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
    color: ${theme.colors.code.comment};
  }

  .token.punctuation {
    color: ${theme.colors.code.punctuation};
  }

  .token.namespace {
    opacity: 0.7;
  }

  .token.tag,
  .token.number {
    color: ${theme.colors.code.tag};
  }

  .token.tag.punctuation,
  .token.tag.script-punctuation,
  .token.operator {
    color: ${theme.colors.code.punctuation};
  }

  .token.property {
    color: ${theme.colors.code.text};
  }

  .token.function {
    color: ${theme.colors.code.function};
  }

  .token.tag-id,
  .token.selector,
  .token.string,
  .token.attr-value,
  .token.atrule-id {
    color: ${theme.colors.code.selector};
  }

  code.language-javascript,
  .token.attr-name {
    color: ${theme.colors.code.keyword};
  }

  code.language-css,
  code.language-scss,
  .token.boolean,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .language-scss .token.string,
  .style .token.string,
  .token.keyword,
  .token.control,
  .token.directive,
  .token.unit,
  .token.statement,
  .token.regex,
  .token.atrule {
    color: ${theme.colors.code.keyword};
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
