import React from 'react'
import PropTypes from 'prop-types'
import { graphql, withPrefix } from 'gatsby'
import {
  Box,
  Container,
  Flex,
  Heading,
  Divider,
  Paragraph,
  Text,
} from 'theme-ui'
import { FileDownload } from '@emotion-icons/fa-solid'

import { Layout, SEO } from 'components/Layout'
import { OutboundLink } from 'components/Link'
import { HeaderImage } from 'components/Image'
import { Employment } from 'components/CV'

const AboutPage = ({
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
        url: 'https://unsplash.com/photos/7efP-a8ZK54',
        author: 'Elias Arnar',
      }}
    />
    <Container>
      <Paragraph>
        <a href="mailto:bcward@astutespruce.com">Brendan C. Ward</a> founded
        Astute Spruce in 2019 to work with science-based organizations to shape
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
        Every step of the way, Brendan combines a passion for expanding the
        impact of organizations and individuals with better tools and data. He
        brings a strong attention to detail and a creative spark to meld
        innovation with high-quality results. He is a strong collaborator and
        actively engages partners throughout all stages of his work. Through his
        careful focus on maximizing impact, his projects are more effective and
        intuitive than many out-of-the-box solutions.
      </Paragraph>

      <Divider />

      <Flex
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          mb: '2rem',
        }}
      >
        <Heading as="h1">Curriculum vitae</Heading>

        <a
          href={withPrefix('Brendan_C_Ward__Resume.pdf')}
          download="Brendan_C_Ward__Resume.pdf"
        >
          <Flex
            sx={{
              gap: '0.25rem',
              alignItems: 'center',
              fontSize: 3,
              lineHeight: 1,
            }}
          >
            <FileDownload size="1em" />
            <Text>Download Resume</Text>
          </Flex>
        </a>
      </Flex>

      <Box>
        <Employment
          dates={[2019, 'present']}
          title="Owner & Lead Software Engineer"
          organization="Astute Spruce, LLC"
          location="Corvallis, OR"
          url="https://astutespruce.com"
        >
          <Paragraph>
            I work collaboratively with science-based organizations to develop
            highly-customized software solutions for real-world problems. I
            leverage my unique talents and background at the fusion point
            between science and software engineering to amplify the impact of
            these organizations, empower their stakeholders with higher-quality
            data through intuitive and compelling applications, and increase
            engagement within the science and conservation communities.
          </Paragraph>
          <Box as="ul">
            <li>
              Develop highly-intuitive, highly-performant user-oriented
              applications using full-stack software engineering including - but
              not limited to - Python, modern Javascript, and Go.
            </li>
            <li>Provide consulting and software architecture guidance.</li>
          </Box>

          <Box sx={{ mt: '2rem', ml: '0.4rem' }}>
            <Heading as="h4" sx={{ mb: '0.5rem' }}>
              Highlighted Projects
            </Heading>
            <Box as="ul">
              <li>
                2019-2021: Enhanced User Engagement with Conservation Blueprints
                in the Southeastern U.S. (funder: U.S. Fish and Wildlife
                Service). Role: project manager and sole software engineer.
              </li>
              <li>
                2019-2020:{' '}
                <OutboundLink to="http://estuaries.pacificfishhabitat.org/">
                  West Coast Estuaries Explorer
                </OutboundLink>{' '}
                - Tidal Wetland Loss and Eelgrass (Pacific States Marine
                Fisheries Commission). Role: project manager and sole software
                engineer.
              </li>
              <li>
                2019:{' '}
                <OutboundLink to="https://aquaticbarriers.org/">
                  Southeast Aquatic Barrier Prioritization Tool
                </OutboundLink>{' '}
                - Phase II (funder: Southeast Aquatic Resources Partnership).
                Role: project manager and sole software engineer.
              </li>

              <li>
                2019: New Zealand Department of Conservation - Budget Allocation
                Pilot Application (New Zealand Department of Conservation).
                Role: project manager and sole software engineer.
              </li>
            </Box>
          </Box>
        </Employment>

        <Employment
          dates={[2007, 2019]}
          title="Chief Software Engineer"
          organization="Conservation Biology Institute"
          location="Corvallis, OR"
          url="https://consbio.org"
        >
          <Paragraph>
            I led CBI&apos;s software development team to create tools and
            platforms that empower the conservation community to share,
            visualize, interpret, and apply geospatial data.
          </Paragraph>
          <Box as="ul">
            <li>
              Worked closely with scientists and clients to co-design highly
              effective, intuitive, and innovative data visualization and
              communication applications that allowed them to deliver high value
              information. Used full-stack software engineering across a broad
              range of applications and technologies to make these applications
              a reality.
            </li>
            <li>
              Led{' '}
              <OutboundLink to="https://databasin.org">Data Basin</OutboundLink>
              , a multi-million dollar, groundbreaking geospatial data sharing
              and collaboration platform used by over 28k registered users.
            </li>
            <li>
              Wrote successful proposals and managed multi-disciplinary projects
              (won projects totalling over $500K; led projects totalling over
              $1.5M).
            </li>
            <li>
              Recruited and supervised staff, managed team operations, and
              oversaw staff development. Contributed to CBI strategic direction
              and business development.
            </li>
          </Box>

          <Box sx={{ mt: '2rem', ml: '0.4rem' }}>
            <Heading as="h4" sx={{ mb: '0.5rem' }}>
              Highlighted Projects:
            </Heading>
            <Box as="ul">
              <li>
                2018-2019:{' '}
                <OutboundLink to="https://climateadaptationexplorer.org/">
                  Florida Climate Adaptation Explorer{' '}
                </OutboundLink>
                (funders: U.S. Fish and Wildlife Service, Florida Fish and
                Wildlife Conservation Commission). Role: project manager and
                sole software engineer.
              </li>
              <li>
                2019:{' '}
                <OutboundLink to="https://batamp.org/">
                  Bat Acoustic Monitoring Visualization Tool
                </OutboundLink>{' '}
                (funder: U.S. Forest Service). Role: project manager and lead
                software engineer.
              </li>
              <li>
                2018-2019:{' '}
                <OutboundLink to="https://aquaticbarriers.org/">
                  Southeast Aquatic Barrier Prioritization Tool
                </OutboundLink>{' '}
                (funder: Southeast Aquatic Resources Partnership). Role: project
                manager and sole software engineer.
              </li>
              <li>
                2017-2019: Environmental Risk Screening Tool for Chinese
                Ministry of Ecology and the Environment - Foreign Economic
                Cooperation Office (funder: Paulson Institute). Role: project
                manager and lead software engineer.
              </li>
              <li>
                2017-2019:{' '}
                <OutboundLink to="http://estuaries.pacificfishhabitat.org/">
                  West Coast Estuaries Explorer
                </OutboundLink>{' '}
                (funder: U.S. Fish and Wildlife, Pacific States Marine Fisheries
                Commission). Role: project manager and sole software engineer.
              </li>
              <li>
                2014-2018:{' '}
                <OutboundLink to="https://blueprint.geoplatform.gov/">
                  South Atlantic Landscape Conservation Cooperative Conservation
                  Blueprint Simple Viewer
                </OutboundLink>{' '}
                (funder: U.S. Fish and Wildlife Service). Role: project manager
                and lead software engineer.
              </li>
              <li>
                2016: California Water Planning and Information Exchange - Data
                Basin Pilot (funder: California Department of Water Resources).
                Role: project manager, lead software engineer, and co-wrote
                final report.
              </li>
              <li>
                2012-2014: Landscape Conservation Cooperative Network -
                Integrated Data Management Network (funders: U.S. Fish and
                Wildlife Service, U.S. Geological Survey). Role: co-led the
                &quot;Toolshed&quot; working group and co-wrote the
                &quot;Toolshed&quot; final report.{' '}
              </li>
              <li>
                2011-2012: Rapid Ecoregional Assessments for the Sonoran Desert
                and Colorado Plateau (funder: Bureau of Land Management). Role:
                data management lead responsible for preparation,
                standardization, and delivery of several hundred geospatial
                datasets; created fire and invasive species predictive models;
                co-wrote final reports.
              </li>
            </Box>
          </Box>
        </Employment>

        <Employment
          dates={[2004, 2007]}
          title="Biological Scientist / GIS Specialist"
          organization="U.S. Forest Service"
          location="Missoula, MT"
          url="https://www.fs.fed.us/"
        >
          <Paragraph>
            I led the historical fire regime mapping and modeling team within
            the{' '}
            <OutboundLink to="https://www.landfire.gov/">
              LANDFIRE project
            </OutboundLink>
            , a highly-ambitious project to quantify current vegetation cover,
            potential vegetation, fire risk and behavior, and departure from
            historical conditions across the U.S.
          </Paragraph>
          <Box as="ul">
            <li>
              Added value across the entire project by contributing major
              improvements to data acquisition, processing, and products; these
              improvements saved thousands of dollars in computing and labor
              costs and expanded the diversity and value of project products.
            </li>
            <li>
              Directly applied software engineering skills to improve simulation
              model internals resulting in major decreases in processing time,
              and engineer new tools to leverage machine learning for
              classifying and mapping vegetation types using remotely sensed
              imagery at landscape scales.
            </li>
            <li>
              Developed new methods for mapping invasive vegetation and
              potential fire impacts.
            </li>
          </Box>
        </Employment>
      </Box>

      <Divider />

      <Box>
        <Employment
          dates={[2004]}
          title="Master's of Science - Forest Ecology"
          organization="University of Wisconsin - Madison"
          location="Madison, WI"
        >
          <Paragraph>
            Thesis:{' '}
            <i>
              Landscape-level effects of the interaction between residential
              development and public forest management in northern Wisconsin,
              USA.
            </i>
          </Paragraph>
        </Employment>

        <Employment
          dates={[2002]}
          title="Bachelor's of Science - Environmental Science"
          organization="Western Washington University"
          location="Bellingham, WA"
        >
          <Paragraph>
            Thesis:{' '}
            <i>
              A simple rule-based simulation approach to modeling windthrow in
              forests of the western Cascade Mountains of Oregon.
            </i>
          </Paragraph>
        </Employment>
      </Box>

      <Divider />

      <Heading as="h3" sx={{ mb: '1rem' }}>
        Publications:
      </Heading>
      <Box>
        <Paragraph>
          Weller, T.J. and <b>B.C. Ward</b>. 2020. AMPlifying Bat Monitoring
          Across North America: an online portal shares acoustic data to advance
          bat conservation across the continent. The Wildlife Professional
          May/June 2020: 44-48.
          <br />
          <br />
          Scheller, R.M., W.D. Spencer, H. Rustigian-Romsos, A.D. Syphard,{' '}
          <b>B.C. Ward</b>, and J.R. Strittholt. 2011. Using stochastic
          simulation to evaluate competing risks of wildfires and fuels
          management on an isolated forest carnivore. Landscape Ecology 26:
          1491-1504.
          <br />
          <br />
          Syphard, A.D., R.M. Scheller, <b>B.C. Ward</b>, W.D. Spencer, and J.R.
          Strittholt. 2011. Simulating landscape-scale effects of fuels
          treatments in the Sierra Nevada, California, USA. International
          Journal of Wildland Fire 20:364-383.
          <br />
          <br />
          Scheller, R.M., E.J. Gustafson, B.R. Sturtevant, <b>B.C. Ward</b>, and
          D.J. Mladenoff. 2010. Increasing the research and management value of
          ecological models using modern software techniques. Frontiers in
          Ecology and the Environment 8(5): 253-260.
          <br />
          <br />
          <b>Ward, B.C.</b>, D.J. Mladenoff, and R.M. Scheller. 2005. Simulating
          landscape-level effects of constraints to public forest regeneration
          harvests due to adjacent residential development in northern
          Wisconsin. Forest Science 51(6): 616-632.
        </Paragraph>
      </Box>

      <Divider />

      <Heading as="h3" sx={{ mb: '1rem' }}>
        Technical Reports:
      </Heading>
      <Paragraph>
        <b>Ward, B.C.</b>, M. Lundin, D. Harvey, J. Strittholt, G. Joseph, T.
        Comendant. 2016. California Water Planning Information Exchange (Water
        PIE) - Data Basin Pilot. Prepared for the California Department of Water
        Resources.
        <br />
        <br />
        Multiple authors. 2014. Landscape Conservation Cooperative - Integrated
        Data Management Network - Toolshed. Prepared for the U.S. Fish and
        Wildlife Service.{' '}
        <OutboundLink to="https://lccnetwork.org/project/integrated-data-management-network-lccs-and-partners-framework-coordinated-data-discovery-0">
          More information.
        </OutboundLink>
        <br />
        <br />
        Strittholt, J.R., S.A. Bryce, <b>B.C. Ward</b>, and D.M. Bachelet. 2012.
        Sonoran Desert Rapid Ecoregional Assessment Report. Prepared for the
        U.S. Department of the Interior, Bureau of Land Management, Denver,
        Colorado.{' '}
        <OutboundLink to="https://landscape.blm.gov/REA_General_Docs/SOD_Final_Report_Body.pdf">
          Access report.
        </OutboundLink>
        <br />
        <br />
        Bryce, S.A., J.R. Strittholt, <b>B.C. Ward</b>, and D.M. Bachelet. 2012.
        Colorado Plateau Rapid Ecoregional Assessment Report. Prepared for the
        U.S. Department of the Interior, Bureau of Land Management, Denver,
        Colorado.{' '}
        <OutboundLink to="https://landscape.blm.gov/REA_General_Docs/COP_Final_Report_Body.pdf">
          Access report.
        </OutboundLink>
      </Paragraph>
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
        gatsbyImageData(
          layout: FULL_WIDTH
          formats: [AUTO, WEBP]
          placeholder: BLURRED
        )
      }
    }
  }
`

export default AboutPage

export const Head = () => <SEO title="About" />
