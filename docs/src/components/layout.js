import React from 'react'
import { jsx, css } from '@emotion/core'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { MDXProvider } from '@mdx-js/tag'
import { Box, Text, Flex, Grid, Image, Button } from '@64labs/ui'

const scope = {
  Box,
  Text,
  Button,
  Flex,
  Grid,
  Image,
  jsx,
  css,
}

const MyCodeComponent = ({ children }) => (
  <LiveProvider
    code={children}
    scope={scope}
    css={{
      '.prism-code': {
        padding: 16,
        lineHeight: '20px',
      },
    }}
  >
    <LiveEditor />
    <LiveError />
    <LivePreview
      css={theme => ({
        fontFamily: theme.fontFamilies[0],
      })}
    />
  </LiveProvider>
)

const Layout = ({ children }) => (
  <MDXProvider components={{ code: MyCodeComponent }}>
    <Box>{children}</Box>
  </MDXProvider>
)

export default Layout
