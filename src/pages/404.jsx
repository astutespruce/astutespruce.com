import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Container, Heading } from 'theme-ui'

import { Link } from 'components/Link'
import { Layout, SEO } from 'components/Layout'
import { HeaderImage } from 'components/Image'

const NotFoundPage = ({
  data: {
    headerImage: {
      childImageSharp: { gatsbyImageData: image },
    },
  },
}) => (
  <Layout>
    <HeaderImage
      image={image}
      height="80vh"
      credits={{
        url: 'https://unsplash.com/photos/wORTURlz7jg',
        author: 'Deanna Ritchie',
      }}
      alt=""
    />

    <Container>
      <Heading as="h1">PAGE NOT FOUND</Heading>
      <Heading as="h2">
        You appear to be lost...
        <br />
        <br />
        Luckily, we&apos;re <Link to="/">here</Link> to help.
      </Heading>
    </Container>
  </Layout>
)

NotFoundPage.propTypes = {
  data: PropTypes.shape({
    headerImage: PropTypes.object.isRequired,
  }).isRequired,
}

export const pageQuery = graphql`
  query {
    headerImage: file(
      relativePath: { eq: "deanna-ritchie-227649-unsplash.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          formats: [AUTO, WEBP]
          placeholder: BLURRED
        )
      }
    }
  }
`

export default NotFoundPage

export const Head = () => <SEO title="Not Found" />
