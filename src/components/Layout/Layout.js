import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

import theme from './theme'
import Header from '../Header'
import Footer from '../Footer'
import GlobalStyle from './GlobalStyle'

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
