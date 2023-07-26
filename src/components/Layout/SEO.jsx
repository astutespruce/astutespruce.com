import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, withPrefix } from 'gatsby'

// preload fonts so there is no flash of unstyled fonts
const fonts = [
  'Cinzel-Bold',
  'Lato-Regular.woff2',
  'Lato-Bold.woff2',
  'Lato-Italic.woff2',
]

const SEO = ({ title: rawTitle }) => {
  const {
    site: {
      siteMetadata: { title: siteTitle, description, author },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  const title = rawTitle ? `${rawTitle} | ${siteTitle}` : siteTitle

  return (
    <>
      <title>{title}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="lang" content="en" />
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:type" content="website" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={author} />

      {/* Have to set HTML height manually for mobile browsers */}
      <style>{`html {height: 100%; width: 100%; margin: 0;}`}</style>

      {/* preload fonts so there is no flash of unstyled fonts */}
      {fonts.map((font) => {
        const url = withPrefix(`/fonts/${font}`)
        return (
          <link
            key={font}
            as="font"
            href={url}
            rel="preload"
            crossOrigin="anonymous"
          />
        )
      })}
    </>
  )
}

SEO.propTypes = {
  title: PropTypes.string,
}

SEO.defaultProps = {
  title: null,
}

export default SEO
