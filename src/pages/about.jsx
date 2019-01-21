import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from 'components/Layout'
import { Container } from 'components/Grid'
import SEO from 'components/SEO'
import { FluidImage } from 'components/Image'

const AboutPage = ({ data: { headerImage } }) => (
  <Layout>
    <SEO title="About" />
    <FluidImage
      image={headerImage.childImageSharp.fluid}
      credits={{
        url: 'https://unsplash.com/photos/7efP-a8ZK54',
        author: 'Elias Arnar',
      }}
    />
    <Container>
      <h1>Astute Spruce, LLC</h1>
      <p>
        <a href="mailto:bcward@astutespruce.com">Brendan C. Ward</a> founded
        Astute Spruce in 2009 to work with science-based organizations to shape
        a healthier world.
        <br />
        <br />
        Brendan combines an MS in Landscape Ecology with over a decade of
        applied experience developing software solutions that bridge science
        with real-world applications.
      </p>
    </Container>
    {/* <Container>
      <h2>CV</h2>
    </Container> */}
  </Layout>
)

AboutPage.propTypes = {
  data: PropTypes.any.isRequired,
}

// from: https://unsplash.com/photos/7efP-a8ZK54
export const pageQuery = graphql`
  query AboutPageQuery {
    headerImage: file(
      relativePath: { eq: "elias-arnar-1309173-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 3200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default AboutPage
