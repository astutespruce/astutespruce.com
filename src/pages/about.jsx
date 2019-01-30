import React from 'react'
import PropTypes from 'prop-types'
import { graphql, withPrefix } from 'gatsby'

import Layout from 'components/Layout'
import { Container, Flex } from 'components/Grid'
import { OutboundLink } from 'components/Link'
import SEO from 'components/SEO'
import { FluidImage } from 'components/Image'
import CVItem from 'components/CVItem'
import Divider from 'components/elements/Divider'

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

      <Divider />

      <Flex justifyContent="space-between" flexWrap="wrap">
        <h2>Curriculum vitae</h2>
        <div>
          <a
            href={withPrefix('Brendan_C_Ward__CV.pdf')}
            download="Brendan_C_Ward__CV.pdf"
          >
            Download PDF
          </a>
        </div>
      </Flex>

      <div>
        <CVItem
          dates={[2019, 'present']}
          title="Owner & Lead Software Engineer"
          organization="Astute Spruce, LLC"
          location="Corvallis, OR"
        >
          <p>
            I work collaboratively with science-based organizations to develop
            highly-customized software solutions for real-world problems.
          </p>
        </CVItem>

        <CVItem
          dates={[2007, 'present']}
          title="Chief Software Engineer"
          organization="Conservation Biology Insitute"
          location="Corvallis, OR"
        >
          <p>
            I lead CBI’s software development team to create tools and platforms
            that empower the conservation community to share, visualize,
            interpret, and apply geospatial data. I leverage my unique talents
            and background at the fusion point between science and software
            engineering.
          </p>
          <ul>
            <li>
              Full stack software engineering across broad range of
              applications, using Python, modern Javascript, and Go
            </li>
            <li>
              Work closely with scientists and clients to co-design highly
              effective, intuitive, and innovative data visualization and
              communication applications that allow them to deliver high value
              information
            </li>
            <li>
              Contribute to CBI strategic direction and business development
            </li>
            <li>
              Lead Data Basin, a multi-million dollar, groundbreaking geospatial
              data sharing and collaboration platform used by over 20k
              registered users
            </li>
            <li>
              Write successful proposals and manage multi-disciplinary projects
              (won projects totalling over $500K; led projects totalling over
              $1.5M)
            </li>
            <li>
              Recruit and supervise staff, manage team operations, and oversee
              staff development
            </li>
          </ul>
        </CVItem>

        <CVItem
          dates={[2004, 2007]}
          title="Biological Scientist / GIS Specialist"
          organization="U.S. Forest Service"
          location="Missoula, MT"
        >
          <p>
            I led the team responsible for mapping and modeling historical fire
            regimes across U.S. as part of the{' '}
            <OutboundLink
              from="/about"
              to="https://www.landfire.gov/"
              target="_blank"
            >
              LANDFIRE project
            </OutboundLink>
            .
          </p>
          <ul>
            <li>
              Added value across the entire project by contributing major
              improvements to data acquisition, processing, and products; these
              improvements saved thousands of dollars in computing and labor
              costs and expanded the diversity and value of project products
            </li>
            <li>
              Directly applied software engineering skills to improve simulation
              model internals resulting in major decreases in processing time,
              and engineer new tools to leverage machine learning for
              classifying and mapping vegetation types using remotely sensed
              imagery at landscape scales
            </li>
          </ul>
        </CVItem>

        <CVItem
          dates={[2004]}
          title="Master's of Science - Forest Ecology"
          organization="University of Wisconsin - Madison"
          location="Madison, WI"
        />

        <CVItem
          dates={[2002]}
          title="Bachelor's of Science - Environmental Science"
          organization="Western Washington University"
          location="Bellingham, WA"
        />
      </div>
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
