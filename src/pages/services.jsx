import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from 'components/Layout'
import { Container } from 'components/Grid'
import SEO from 'components/SEO'
import { FluidImage } from 'components/Image'

const ServicesPage = ({ data: { headerImage } }) => (
  <Layout>
    <SEO title="Services" />
    <FluidImage
      image={headerImage.childImageSharp.fluid}
      credits={{
        url: 'https://unsplash.com/photos/y6X3oiDQQtY',
        author: 'Thomas Millot',
      }}
    />
    <Container>TODO</Container>
  </Layout>
)

ServicesPage.propTypes = {
  data: PropTypes.any.isRequired,
}

// from: https://unsplash.com/photos/y6X3oiDQQtY
export const pageQuery = graphql`
  query ServicesPageQuery {
    headerImage: file(
      relativePath: { eq: "thomas-millot-1297305-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 3200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default ServicesPage
