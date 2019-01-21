import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider, theme } from 'util/style'

import Header from './Header'
import Footer from './Footer'

import config from '../../../config/meta'

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <Header siteTitle={config.siteTitle} />
      {children}
      <Footer />
    </>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
