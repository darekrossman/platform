import React from 'react'
import { withTheme } from 'emotion-theming'
import Layout from '../components/layout'
import { Text } from '@64labs/ui'

const IndexPage = props =>
  console.log(props) || (
    <Layout>
      <Text variant="h1">hello!</Text>
    </Layout>
  )

export default withTheme(IndexPage)
