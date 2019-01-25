import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from 'components/Layout'
import SEO from 'components/SEO'
import { Container } from 'components/Grid'
import { FluidImage } from 'components/Image'

import styled from 'util/style'

const Hero = styled(Container)`
  margin-top: 3rem;
  margin-bottom: 3rem;
  h1 {
    font-size: 6rem;
    @media screen and (max-width: 768px) {
      font-size: 4rem;
    }
    @media screen and (max-width: 480px) {
      font-size: 2rem;
    }
  }
  h2 {
    font-size: 2.5rem;
    margin-bottom: 4rem;

    @media screen and (max-width: 768px) {
      font-size: 2.25rem;
    }
    @media screen and (max-width: 480px) {
      font-size: 1.75rem;
    }
  }
  p {
    font-size: larger;
  }
`

const Section = styled(Container)`
  margin-top: 1rem;
  margin-bottom: 1rem;
`

const IndexPage = ({ data: { image } }) => (
  <Layout>
    <SEO title="Home" />
    <Hero>
      <h1>A complex world</h1>
      <h2>needs simpler solutions.</h2>

      <p>
        Too often, we get caught up in the cleverness of our tools and lose
        sight of meeting real-world needs.
        <br />
        <br />
        It is not the tool itself that matters, it is what you can do with it
        that matters.
        <br />
        <br />
        I partner with science-based organizations to amplify the impact of
        their work for a healthier world. Healthier ecosystems. Healthier
        societies.
        <br />
        <br />I develop highly customized web applications and other software
        solutions to real-world problems.
        <br />
        <br />
        Each step of the way, I collaborate closely with partners to maximize
        impact.
      </p>
    </Hero>

    <FluidImage
      image={image.childImageSharp.fluid}
      credits={{
        url: 'https://unsplash.com/photos/_lofCeUHMOo',
        author: 'Patrick Hendry',
      }}
    />

    {/* <Section>
      <h2>My approach:</h2>
      <p />
    </Section> */}
  </Layout>
)

IndexPage.propTypes = {
  data: PropTypes.any.isRequired,
}

export const pageQuery = graphql`
  query HomePageQuery {
    image: file(relativePath: { eq: "patrick-hendry-431197-unsplash.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default IndexPage
