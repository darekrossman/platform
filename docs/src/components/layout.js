import React, { useState } from 'react'
import { Box, Flex, Grid, Button } from '@64labs/ui'
import MDXRenderer from './mdx-renderer'
import Sidebar from './sidebar'

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <Box>
      <Flex
        height={64}
        width="100%"
        bg="white"
        ess={{
          zIndex: 10,
          position: 'fixed',
          justifyContent: 'flex-end',
          borderBottom: '1px solid',
          borderColor: 'palette.grey.200',
        }}
      >
        <Button onClick={() => setMenuOpen(!menuOpen)}>Menu</Button>
      </Flex>
      <Grid ess={{ gridTemplateColumns: ['100%', '100%', '1fr'] }}>
        <Box
          ess={{
            zIndex: 11,
            top: [0, 0, 64],
            height: ['100vh', '100vh', 'calc(100vh - 64px)'],
            overflow: 'auto',
            width: 250,
            position: 'fixed',
            boxShadow: ['0px 0px 16px rgba(0,0,0,0.15)', null, 'none'],
            borderRight: [0, 0, `1px solid`],
            borderColor: [0, 0, 'palette.grey.200'],
            transition: 'all .1s ease-out',
            transform: [
              menuOpen ? 'translateX(0)' : 'translateX(-250px)',
              null,
              'none',
            ],
          }}
        >
          <Sidebar />
        </Box>
        <Box pl={[0, 0, 250]} pt={[4, 4, 5]}>
          <Box variant="container">
            <MDXRenderer>{children}</MDXRenderer>
          </Box>
        </Box>
      </Grid>
    </Box>
  )
}

export default Layout
