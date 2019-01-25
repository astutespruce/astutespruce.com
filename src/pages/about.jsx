import React from 'react'
import PropTypes from 'prop-types'
import { graphql, withPrefix } from 'gatsby'

import Layout from 'components/Layout'
import { Container, Flex } from 'components/Grid'
import { Link } from 'components/Link'
import SEO from 'components/SEO'
import { FluidImage } from 'components/Image'
// import CV from 'static/Brendan_C_Ward__CV.pdf'

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
        Brendan is passionate about bridging science with real-world
        applications. He combines a Master&apos;s of Science in Landscape
        Ecology with over a decade of experience developing software solutions.
        <br />
        <br />
        He has led software teams to create groundbreaking solutions to data
        sharing and visualization needs. Brendan has helped empower decision
        makers and stakeholders by building software that leverages the best
        available scientific data with cutting-edge technology to increase
        positive impact. He has partnered with scientists to streamline their
        data processing to derive more value from less manual labor. He has
        collaborated with government agencies, conservation non-profits, and
        others to amplify the impact of their work.
        <br />
        <br />
        Every step of the way, Brendan combines a passion for empowering
        organizations and individuals with better tools and data. He brings a
        strong attention to detail and a creative spark to meld innovation with
        high-quality results. He is a strong collaborator and actively engages
        partners throughout all stages of his work. Through his careful focus on
        maximizing impact, his projects are more effective and intuitive than
        many out-of-the-box solutions.
      </p>
    </Container>
    <Container>
      <Flex justifyContent="space-between">
        <h2>CV</h2>
        <div>
          <a
            href={withPrefix('Brendan_C_Ward__CV.pdf')}
            download="Brendan_C_Ward__CV.pdf"
          >
            Download PDF
          </a>
        </div>
      </Flex>
    </Container>
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
