import React from 'react'
import PropTypes from 'prop-types'
import { Global } from '@emotion/react'
import { useErrorBoundary } from 'use-error-boundary'
import { Box, Flex } from 'theme-ui'

import { fonts } from 'fonts'
import { isUnsupported, hasWindow } from 'util/dom'
import UnsupportedBrowser from './UnsupportedBrowser'
import Header from './Header'
import Footer from './Footer'
import PageError from './PageError'

const Layout = ({ children }) => {
  const { ErrorBoundary, didCatch } = useErrorBoundary({
    onDidCatch: (err, errInfo) => {
      // eslint-disable-next-line no-console
      console.error('Error boundary caught', err, errInfo)

      if (hasWindow && window.Sentry) {
        const { Sentry } = window
        Sentry.withScope((scope) => {
          scope.setExtras(errInfo)
          Sentry.captureException(err)
        })
      }
    },
  })

  return (
    <>
      <Global styles={fonts} />
      <Flex
        sx={{
          height: '100%',
          flexDirection: 'column',
          zIndex: 0,
          position: 'relative',
        }}
      >
        <Header />

        <Box
          sx={{
            flex: '1 1 auto',
            overflowY: 'auto',
            overflowX: 'hidden',
            height: '100%',
          }}
        >
          {isUnsupported ? (
            <UnsupportedBrowser />
          ) : (
            <Box
              sx={{
                flex: '1 1 auto',
                overflowY: 'auto',
                overflowX: 'hidden',
                height: '100%',
              }}
            >
              {didCatch ? (
                <PageError />
              ) : (
                <ErrorBoundary>
                  {children}
                  <Footer />
                </ErrorBoundary>
              )}
            </Box>
          )}
        </Box>
      </Flex>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
