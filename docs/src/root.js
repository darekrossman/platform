import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import theme, { GlobalStyle } from './theme'

export default ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle />
        {element}
      </React.Fragment>
    </ThemeProvider>
  )
}
