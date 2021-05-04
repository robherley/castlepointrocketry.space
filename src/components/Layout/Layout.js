import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

import theme from './theme'
import Header from '../Header'
import Footer from '../Footer'
import GlobalStyle from './GlobalStyle'
import SEO from './SEO'

const Layout = ({ seo, children }) => {
  return (
    <>
      {/* eslint-disable react/jsx-pascal-case */}
      <SEO {...seo} />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
  seo: PropTypes.object,
}

export default Layout
