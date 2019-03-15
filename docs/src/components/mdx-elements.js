import React from 'react'
import { Box, Text } from '@64labs/ui'
import CodePlayground from './code-playground/playground'

const withProps = (Component, props) => baseProps => (
  <Component {...props} {...baseProps} />
)

export default {
  code: CodePlayground,
  h1: withProps(Text, { as: 'h1', variant: 'h1', mb: 4, mt: 5 }),
  h2: withProps(Text, { as: 'h2', variant: 'h2', mb: 3, mt: 5 }),
  h3: withProps(Text, { as: 'h3', variant: 'h3', mb: 3, mt: 4 }),
  h4: withProps(Text, { as: 'h4', variant: 'h4', mb: 3 }),
  h5: withProps(Text, { as: 'h5', variant: 'h5' }),
  h6: withProps(Text, { as: 'h6', variant: 'h6' }),
  p: withProps(Text, { mb: '24px' }),
  a: withProps(Text, {
    as: 'a',
    bg: 'palette.lightBlue.50',
    ess: {
      borderBottom: '1px solid',
      borderColor: 'palette.lightBlue.200',
    },
  }),
  ol: withProps(Box, { as: 'ol', pl: '20px' }),
  ul: withProps(Box, { as: 'ul', pl: '20px' }),
  li: withProps(Text, { as: 'li' }),
  inlineCode: withProps(Text, {
    as: 'code',
    p: '2px 5px',
    bg: 'code.bgInline',
    color: 'palette.grey.900',
    lineheight: 0,
  }),
}
