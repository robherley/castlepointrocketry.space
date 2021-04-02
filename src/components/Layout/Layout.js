import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'

import theme from './theme'
import Header from '../Header'
import Footer from '../Footer'
import GlobalStyle from './GlobalStyle'

const LayoutContainer = styled.div`
  max-width: ${({ theme }) => theme.size.maxWidth};
  padding: 2rem;
  margin: 0 auto;
`

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <LayoutContainer>
        <Header />
        <main>{children}</main>
        <Footer />
      </LayoutContainer>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
