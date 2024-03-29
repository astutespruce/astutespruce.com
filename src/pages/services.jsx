import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Box, Container, Heading, Flex, Divider, Paragraph } from 'theme-ui'
// import {
//   FaGlobeAmericas,
//   FaChartBar,
//   FaPeopleCarry,
//   FaCogs,
// } from 'react-icons/fa'
import {
  GlobeAmericas,
  ChartBar,
  PeopleCarry,
  Cogs,
} from '@emotion-icons/fa-solid'

import { Layout, SEO } from 'components/Layout'

import { HeaderImage } from 'components/Image'
import { OutboundLink } from 'components/Link'

// const iconColor = theme.colors.grey[600]

const ServicesPage = ({
  data: {
    headerImage: {
      childImageSharp: { gatsbyImageData: headerImage },
    },
  },
}) => (
  <Layout>
    <HeaderImage
      image={headerImage}
      credits={{
        url: 'https://unsplash.com/photos/y6X3oiDQQtY',
        author: 'Thomas Millot',
      }}
    />
    <Container>
      <Heading as="h1" sx={{ mb: '1.5rem' }}>
        How I can help you
      </Heading>

      <Box>
        <Flex sx={{ alignItems: 'center', gap: '1rem', mb: '0.5rem' }}>
          <Box sx={{ color: 'grey.6' }}>
            <GlobeAmericas size="2rem" />
          </Box>
          <Heading as="h3">Map & Data Visualization</Heading>
        </Flex>
        <Paragraph>
          I specialize in leveraging and creating cutting-edge web mapping and
          data visualization technologies to make scientific data more
          accessible and informative. I create custom solutions to meet domain
          specific needs because generic solutions simply do not work well for
          complex scientific data.
          <br />
          <br />I can help you understand and leverage these cutting-edge
          technologies and approaches to empower your stakeholders and amplify
          your impact.
        </Paragraph>
        <Box as="ul" sx={{ mt: '0.5rem' }}>
          <li>
            I am an expert in{' '}
            <OutboundLink to="https://leafletjs.com/">Leaflet</OutboundLink>, a
            web-mapping library perfect for simpler projects. I created several{' '}
            <OutboundLink to="https://github.com/search?utf8=%E2%9C%93&q=topic%3Aleaflet+org%3Aconsbio+&type=">
              open-source plugins
            </OutboundLink>{' '}
            for common components across projects.
          </li>
          <li>
            I am an expert in{' '}
            <OutboundLink to="https://github.com/mapbox/mapbox-gl-js">
              Mapbox GL
            </OutboundLink>
            , an advanced web-mapping library with high performance for complex
            data. I created a{' '}
            <OutboundLink to="https://github.com/consbio/mbgl-renderer">
              library for making map images
            </OutboundLink>{' '}
            for offline documents, such as downloadable reports.
          </li>
          <li>
            I created a lightweight{' '}
            <OutboundLink to="https://github.com/consbio/mbtileserver">
              image and vector map tile server
            </OutboundLink>{' '}
            used across several projects to save costs and maintenance
            headaches.
          </li>
          <li>
            I developed a novel approach to{' '}
            <OutboundLink to="https://github.com/brendan-ward/datatiles">
              encoding raster data
            </OutboundLink>{' '}
            to power real-time data exploration in the browser without requiring
            complex map-server technology.
          </li>
        </Box>
      </Box>

      <Divider variant="styles.hr.light" />

      <Box>
        <Flex sx={{ alignItems: 'center', gap: '1rem', mb: '0.5rem' }}>
          <Box sx={{ color: 'grey.6' }}>
            <ChartBar size="2rem" />
          </Box>
          <Heading as="h3">Data Processing & Analysis</Heading>
        </Flex>
        <Paragraph>
          I am passionate about using my software development skills to help
          scientists and science-based organizations better use and interpret
          their data. I turn painfully slow and error-prone manual data
          processing into automated data pipelines, so that scientists can focus
          their scientific expertise on advancing scientific understanding.
          <br />
          <br />I can help you identify and develop novel solutions for your
          data processing needs. Once we have created these, you will be more
          efficient and able to focus your expertise on advancing your science.
        </Paragraph>
        <Box as="ul" sx={{ mt: '0.5rem' }}>
          <li>
            I developed a rule-based classification tool to help vegetation
            ecologists classify information from many thousands of field plots
            into ecologically-meaningful classes.
          </li>
          <li>
            I created an intuitive{' '}
            <OutboundLink to="https://github.com/brendan-ward/echoclean">
              rule-based classification tool
            </OutboundLink>{' '}
            to help bat ecologists leverage expert knowledge to overcome
            shortcomings in automatic classification tools. This allows them to
            focus their limited time on manual inspection of fewer, more
            problematic records. This approach allows ecologists to define rules
            independent of the underlying software.
          </li>
          <li>
            When existing tools could not scale to larger volumes of data,
            seriously jeopardizing my clients&apos; ability to meet their
            deadlines, I created a new data processing pipeline to efficiently
            process the most detailed data on rivers and streams in the U.S.
            This allowed us to leverage higher quality data and still meet
            critical deadlines.
          </li>
        </Box>
      </Box>

      <Divider variant="styles.hr.light" />

      <Box>
        <Flex sx={{ alignItems: 'center', gap: '1rem', mb: '0.5rem' }}>
          <Box sx={{ color: 'grey.6' }}>
            <PeopleCarry size="2rem" />
          </Box>
          <Heading as="h3">Data Sharing</Heading>
        </Flex>
        <Paragraph>
          My professional career has been focused on making data more
          accessible. I help define and develop data sharing approaches to turn
          scientific data into broader impacts for a wide range of stakeholders.
          <br />
          <br />I can help you compare between existing data sharing platforms,
          evaluate tradeoffs in data sharing and integration approaches, and
          identify solutions that will allow your organization to amplify the
          broader impact of your data.
        </Paragraph>
        <Box as="ul" sx={{ mt: '0.5rem' }}>
          <li>
            I led the development team at the{' '}
            <OutboundLink to="https://consbio.org">
              Conservation Biology Institute
            </OutboundLink>{' '}
            that created the largest and most functional conservation data
            sharing platform in the world:{' '}
            <OutboundLink to="https://databasin.org">Data Basin</OutboundLink>.
          </li>
          <li>
            I have successfully led multi-organization teams to define, pilot,
            and implement cross-organization data integration. These leverage
            the collective strengths, domain expertise, and data ownership of
            each organization to amplify the impacts of the data created and
            managed by each partner.
          </li>
          <li>
            I led the data management and delivery of two region-wide ecological
            assessment projects, which involved several hundred individual
            deliverables. I developed data pipelines to standardize data format,
            structure, and documentation - which resulted in some of the highest
            quality deliverables for our clients compared to other contractors
            responsible for other regions.
          </li>
        </Box>
      </Box>

      <Divider variant="styles.hr.light" />

      <Box>
        <Flex sx={{ alignItems: 'center', gap: '1rem', mb: '0.5rem' }}>
          <Box sx={{ color: 'grey.6' }}>
            <Cogs size="2rem" />
          </Box>
          <Heading as="h3">Consulting</Heading>
        </Flex>
        <Paragraph>
          Just need advice on how to approach a data visualization, processing,
          or sharing project? Need assistance leveraging the state of the art
          technologies to increase the impact of your organization? I am here to
          help.
        </Paragraph>
      </Box>
    </Container>
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
        gatsbyImageData(
          layout: FULL_WIDTH
          formats: [AUTO, WEBP]
          placeholder: BLURRED
        )
      }
    }
  }
`

export default ServicesPage

export const Head = () => <SEO title="Services" />
