import GoogleAnalytics from 'react-ga'
import * as Sentry from '@sentry/browser'

// load the fonts
import 'typeface-cinzel'
import 'typeface-lato'

import { siteMetadata } from './gatsby-config'

/**
 * Initialize Google Analytics and Sentry
 */
export const onClientEntry = () => {
  const { googleAnalyticsId, sentryDSN } = siteMetadata

  if (googleAnalyticsId) {
    GoogleAnalytics.initialize(googleAnalyticsId)
  }

  if (sentryDSN) {
    Sentry.init({
      dsn: sentryDSN,
    })
    window.Sentry = Sentry
  }
}
