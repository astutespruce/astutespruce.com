import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Link } from 'components/Link'
import { Container } from 'components/Grid'
import Layout from 'components/Layout'
import SEO from 'components/SEO'
import { FluidImage } from 'components/Image'

const NotFoundPage = ({ data: { headerImage } }) => (
  <Layout>
    <SEO title="404: Not found" />

    <FluidImage
      image={headerImage.childImageSharp.fluid}
      height="80vh"
      credits={{
        url: 'https://unsplash.com/photos/wORTURlz7jg',
        author: 'Deanna Ritchie',
      }}
    />

    <Container>
      <h1>PAGE NOT FOUND</h1>
      <h2>You appear to be lost...</h2>
      <h2>
        Luckily, we&apos;re <Link to="/">here</Link> to help.
      </h2>
    </Container>
  </Layout>
)

NotFoundPage.propTypes = {
  data: PropTypes.shape({
    headerImage: PropTypes.object.isRequired,
  }).isRequired,
}

export const pageQuery = graphql`
  query NotFoundPageQuery {
    headerImage: file(
      relativePath: { eq: "deanna-ritchie-227649-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 3200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default NotFoundPage
