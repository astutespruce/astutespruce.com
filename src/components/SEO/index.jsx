import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function SEO({ description, meta, keywords, title, image, extra }) {
  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
            title
            description
            author {
              name
            }
            organization {
              name
              url
              # logo
            }
            language
          }
        }
      }
    `
  )

  const metaTitle = title || siteMetadata.title
  const metaDescription = description || siteMetadata.description

  const { slug } = extra
  const url = slug ? `${siteMetadata.siteUrl}/${slug}` : siteMetadata.siteUrl
  const imageURL = image ? `${siteMetadata.siteUrl}${image}` : null

  const schemaOrg = [
    {
      '@context': `http://schema.org`,
      '@type': `WebSite`,
      url: siteMetadata.siteUrl,
      name: metaTitle,
      description: metaDescription,
      author: {
        '@type': `Person`,
        name: siteMetadata.author.name,
      },
      publisher: {
        '@type': 'Organization',
        url: siteMetadata.organization.url,
        // logo: siteMetadata.organization.logo,
        name: siteMetadata.organization.name,
      },
    },
  ]

  if (image) {
    meta.push({
      property: `og:image`,
      content: imageURL,
    })
  }

  return (
    <Helmet
      htmlAttributes={{
        lang: siteMetadata.language,
      }}
      title={metaTitle}
      titleTemplate={`%s | ${siteMetadata.title}`}
      image={imageURL}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: url,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: siteMetadata.author.name,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          keywords && keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    >
      <script type="application/ld+json">{JSON.stringify(schemaOrg)}</script>
    </Helmet>
  )
}

SEO.propTypes = {
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  extra: PropTypes.shape({
    slug: PropTypes.string,
  }),
}

SEO.defaultProps = {
  meta: [],
  keywords: [],
  description: ``,
  image: null,
  extra: {},
}

export default SEO
