import React from 'react'
import { Link } from 'gatsby'
import { useESS } from '@64labs/ess'
import { Box, Flex, Text } from '@64labs/ui'

const Sidebar = () => {
  return (
    <Box
      ess={{
        pt: 2,
        minHeight: '100vh',
        bg: 'palette.grey.50',
        borderRight: `1px solid`,
        borderColor: 'palette.grey.200',
        ul: {
          listStyle: 'none',
        },
        '& > ul > li': {
          mt: 4,
        },
        '.ess_Text': {
          color: 'palette.pink.700',
          px: 4,
          pb: 3,
          borderBottom: '1px solid',
          borderColor: 'palette.grey.200',
        },
        a: {
          display: 'block',
          fontSize: 1,
          lineHeight: '16px',
          color: 'palette.grey.700',
          borderBottom: '1px solid',
          borderColor: 'palette.grey.200',
          px: 4,
          py: 3,
        },
      }}
    >
      <ul>
        <li>
          <Text variant="h6">Documentation</Text>
          <ul>
            <li>
              <Link to="/introduction">Introduction</Link>
            </li>
            <li>
              <Link to="/getting-started">Getting Started</Link>
            </li>
            <li>
              <Link to="/how-it-works">How It Works</Link>
            </li>
          </ul>
        </li>

        <li>
          <Text variant="h6">Guides</Text>
          <ul>
            <li>
              <Link to="/introduction">UI Primitives</Link>
            </li>
            <li>
              <Link to="/getting-started">Creating Components</Link>
            </li>
            <li>
              <Link to="/how-it-works">Theme System</Link>
            </li>
            <li>
              <Link to="/how-it-works">Tokens & Variants</Link>
            </li>
          </ul>
        </li>

        <li>
          <Text variant="h6">Components</Text>
          <ul>
            <li>
              <Link to="/docs/box-flex-grid">Box, Flex, & Grid</Link>
            </li>
            <li>
              <Link to="/docs/text">Text</Link>
            </li>
            <li>
              <Link to="/docs/button">Button</Link>
            </li>
          </ul>
        </li>
      </ul>
    </Box>
  )
}

export default Sidebar
