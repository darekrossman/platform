import React from 'react'
import { jsx, css } from '@emotion/core'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import Highlight, { defaultProps } from 'prism-react-renderer'
import { MDXProvider } from '@mdx-js/tag'
import { Box, Flex, Grid, Text, Button, Image } from '@64labs/ui'
import Sidebar from './sidebar'
import { syntaxTheme } from '../theme'

const liveScope = {
  Box,
  Flex,
  Grid,
  Text,
  Button,
  Image,
  jsx,
  css,
}

const MyCodeComponent = ({ children, ...props }) => {
  const language = props.className.replace('language-', '')

  return (
    <Box css={syntaxTheme} mb={4}>
      {language !== 'jsx' ? (
        <Highlight
          {...defaultProps}
          code={children}
          language={language === 'js' ? 'jsx' : language}
          theme={undefined}
        >
          {({ className, tokens, getLineProps, getTokenProps }) => (
            <Box ess={{ border: '1px solid', borderColor: 'code.borders' }}>
              <pre className={className}>
                {tokens.map((line, i) => (
                  <div {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </pre>
            </Box>
          )}
        </Highlight>
      ) : (
        <Box
          ess={{
            position: 'relative',
            border: '1px solid',
            borderColor: 'code.borders',
          }}
        >
          <LiveProvider
            code={children}
            scope={liveScope}
            mountStylesheet={false}
          >
            {/* <Box
              ess={{
                position: 'absolute',
                left: 0,
                right: 0,
                width: '100%',
                opacity: 0.9,
                bg: 'code.borders',
              }}
            >
              <LiveError />
            </Box> */}

            <Box p={4}>
              <LivePreview />
            </Box>

            <LiveEditor className={props.className} />
          </LiveProvider>
        </Box>
      )}
    </Box>
  )
}

const components = {
  h1: p => <Text variant="h1" mb={4} as="h1" {...p} />,
  h2: p => <Text variant="h2" mb={3} mt={5} as="h2" {...p} />,
  h3: p => <Text variant="h3" mb={2} mt={4} as="h3" {...p} />,
  h4: p => <Text variant="h4" as="h4" {...p} />,
  h5: p => <Text variant="h5" as="h5" {...p} />,
  h6: p => <Text variant="h6" as="h6" {...p} />,
  p: p => <Text variant="p" mb="24px" {...p} />,
  a: p => <Text variant="p" as="a" color="primary" {...p} />,
  ol: p => <Box as="ol" pl="20px" {...p} />,
  ul: p => <Box as="ul" pl="20px" {...p} />,
  li: p => <Text variant="p" as="li" {...p} />,
  inlineCode: p => (
    <Text
      as="code"
      ess={{
        borderRadius: '3px',
        p: '2px 5px',
        bg: 'code.bgInline',
        color: 'gray.0',
      }}
      {...p}
    />
  ),
}

const Layout = ({ children }) => {
  return (
    <Box>
      <Box
        height={64}
        ess={{
          bg: 'white',
          borderBottom: '1px solid',
          borderColor: 'palette.grey.200',
        }}
      />
      <Grid ess={{ gridTemplateColumns: '250px 1fr' }}>
        <Sidebar />
        <MDXProvider components={{ code: MyCodeComponent, ...components }}>
          <Box py={5} px={3} ess={{ width: '100%', maxWidth: 680, mx: 'auto' }}>
            {children}
          </Box>
        </MDXProvider>
      </Grid>
    </Box>
  )
}

export default Layout
