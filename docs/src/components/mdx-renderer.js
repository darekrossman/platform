import React from 'react'
import { MDXProvider } from '@mdx-js/tag'
import mdxElements from './mdx-elements'

export default ({ children }) => (
  <MDXProvider components={mdxElements}>{children}</MDXProvider>
)
