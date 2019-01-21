import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { ThemeProvider, theme } from 'util/style'
import { scrollIntoView } from 'util/dom'

import Header from './Header'
import Footer from './Footer'

import config from '../../../config/meta'

const Layout = ({ children }) => {
  // Always scroll to top after nav
  useEffect(() => {
    scrollIntoView('Header')
  })

  return (
    <ThemeProvider theme={theme}>
      <>
        <Header id="Header" siteTitle={config.siteTitle} />
        {children}
        <Footer />
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
