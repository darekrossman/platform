import React from 'react'
import { Box, Grid } from '@64labs/ui'
import MDXRenderer from './mdx-renderer'
import Sidebar from './sidebar'

const Layout = ({ children }) => {
  return (
    <Box>
      <Box
        height={64}
        ess={{
          borderBottom: '1px solid',
          borderColor: 'palette.grey.200',
        }}
      />
      <Grid ess={{ gridTemplateColumns: '250px 1fr' }}>
        <Sidebar />
        <Box variant="container">
          <MDXRenderer>{children}</MDXRenderer>
        </Box>
      </Grid>
    </Box>
  )
}

export default Layout
