import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { GatsbyImage as Image } from 'gatsby-plugin-image'
import { Container, Heading, Box, Grid, Paragraph, Divider } from 'theme-ui'

import { Layout, SEO } from 'components/Layout'
import { HeaderImage } from 'components/Image'

const IndexPage = ({
  data: {
    fluidImage1: {
      childImageSharp: { gatsbyImageData: fluidImage1 },
    },
    imageShane: {
      childImageSharp: { gatsbyImageData: imageShane },
    },
    image43698185622: {
      childImageSharp: { gatsbyImageData: image43698185622 },
    },
    imageHelloquence: {
      childImageSharp: { gatsbyImageData: imageHelloquence },
    },
    imageAgathe: {
      childImageSharp: { gatsbyImageData: imageAgathe },
    },
  },
}) => (
  <Layout>
    <Container
      sx={{
        mt: '3rem',
      }}
    >
      <Heading
        as="h1"
        sx={{ fontSize: ['4rem', '6rem'], lineHeight: 1, mb: '1rem' }}
      >
        A complex world
      </Heading>
      <Heading as="h2" sx={{ mb: '4rem' }}>
        needs simpler solutions.
      </Heading>

      <Paragraph sx={{ fontSize: [3, 4] }}>
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
      </Paragraph>
    </Container>

    <HeaderImage
      image={fluidImage1}
      credits={{
        url: 'https://unsplash.com/photos/_lofCeUHMOo',
        author: 'Patrick Hendry',
      }}
    />

    <Container
      sx={{
        pt: '3rem',
        px: '1rem',
      }}
    >
      <Box sx={{ pb: '2rem' }}>
        <Heading as="h2" sx={{ mb: '1.5rem' }}>
          What makes me different?
        </Heading>

        <Heading as="h3" sx={{ mb: '0.5rem' }}>
          I bridge science and software.
        </Heading>

        <Paragraph>
          With an advanced degree in landscape ecology and over 13 years
          professional experience in software engineering and geospatial
          technologies, I am highly effective at{' '}
          <b>bridging science and software</b> domains to capture the deep
          science domain experience of clients with cutting edge tools make that
          science accessible and engaging to their audience.
          <br />
          <br />
          What this means for you:
        </Paragraph>
        <Box as="ul">
          <li>
            I am passionately curious about understanding what you do and WHY,
            so that I can understand your data and leverage that to increase
            your impact.
          </li>
          <li>
            I take a rigorous experimental approach when developing a new
            application inspired by my science background. Often at the outset,
            the character of a new application is a bit unclear, and we discover
            it through the process of experimenting with different approaches
            and ways of presenting information to find the best fit.
          </li>
        </Box>
      </Box>

      <Divider variant="styles.hr.light" />

      <Grid columns={[0, '1fr 1.5fr']} gap={4} sx={{ py: '2rem' }}>
        <Image image={imageShane} alt="" />

        <Box>
          <Heading as="h3" sx={{ mb: '1rem', mt: '-0.5rem' }}>
            I focus on impact.
          </Heading>

          <Paragraph>
            The internet is filled with half-hearted applications that allow
            users to see data, but no clear actionable outcome. You know what?
            Those applications don&apos;t lead to insights or engagement, and
            they don&apos;t lead to greater impact.
            <br />
            <br />
            In contrast, I focus on impact from the start: how the application
            or tool effectively meets a real need and can measurably increase
            real impact. Is your goal to change user behavior and lead to real
            on-the-ground activities? Then whatever I build collaboratively with
            you needs to be strongly aligned around reaching that goal.
            <br />
            <br />
            What this means for you:
          </Paragraph>
          <Box as="ul">
            <li>
              I will work closely with you from the very beginning of a project
              to identify the real needs we are trying to solve. At each step in
              the development process, we measure ourselves against the impact
              we are ultimately trying to achieve.
            </li>
          </Box>
        </Box>
      </Grid>

      <Divider variant="styles.hr.light" />

      <Grid columns={[0, '1.5fr 1fr']} gap={4} sx={{ py: '2rem' }}>
        <Box>
          <Heading as="h3" sx={{ mb: '1rem', mt: '-0.5rem' }}>
            I am highly collaborative.
          </Heading>

          <Paragraph>
            I firmly believe that we are going to achieve higher impact,
            together. While I am very self-driven and highly successful at
            working independently, a highly successful project is the result of
            us working closely together to clearly identify needs and context,
            running experiments to explore possible solutions, and clearly
            targeting the impact you want to achieve through every stage of the
            project.
            <br />
            <br />
            What this means for you:
          </Paragraph>
          <Box as="ul">
            <li>
              I will actively involve you in the design and overall approach
              used for a project, and help you to understand the tradeoffs in
              design, implementation, and hosting options.
            </li>
          </Box>
        </Box>
        <Image image={imageHelloquence} alt="" />
      </Grid>

      <Divider variant="styles.hr.light" />

      <Grid columns={[0, '1fr 2fr']} gap={4} sx={{ py: '2rem' }}>
        <Image image={imageAgathe} alt="" />

        <Box>
          <Heading as="h3" sx={{ mb: '1rem', mt: '-0.5rem' }}>
            I am pragmatic and focused on simplicity.
          </Heading>

          <Paragraph>
            It is easy to get caught up in hype and shiny tools. The tools are
            only a means to an end: if those tools are too complex, we spend all
            our time on them instead of what we should really be focused on:{' '}
            <i>impact</i>. Often, when trying to visualize information, teams
            get carried away with adding power tools for advanced users - only
            to find in the process that they&apos;ve alienated their core
            audience and missed their opportunity to have real impact.
            <br />
            <br />
            Instead, I focus on distilling things down as much as possible, to
            create a simple, intuitive experience. In practice, this is very
            difficult: simplicity is significantly more valuable over the long
            term than complexity, and also significantly harder to achieve.
          </Paragraph>
        </Box>
      </Grid>

      <Paragraph>What this means for you:</Paragraph>
      <Box as="ul">
        <li>
          While I actively keep up on the latest trends and tools, I only
          leverage tools and approaches that best meet the need at hand with the
          lowest effort over the long term. Sometimes, a far simpler but less
          hyped solution is far superior over the long term.
        </li>
      </Box>

      <Divider variant="styles.hr.light" />

      <Grid columns={[0, '1.5fr 1fr']} gap={4} sx={{ py: '2rem' }}>
        <Box>
          <Heading as="h3" sx={{ mb: '1rem', mt: '-0.5rem' }}>
            I am open source by default
          </Heading>

          <Paragraph>
            I believe that our tools get better when they are shared with and
            used by more people, and that by openly sharing something of value,
            we get something in return. I&apos;m not an open-source zealot
            though, so I will work with you to find the right balance for your
            project. In practice, many of the libraries I create are open
            source, and some of the applications I create for clients are not.
            <br />
            <br />
            What this means for you:
          </Paragraph>
          <Box as="ul">
            <li>
              I will leverage a range of open source solutions to deliver your
              project, including open source applications and libraries
              I&apos;ve created. Depending on the project, I will actively seek
              out ways to generalize our work into new libraries, because I
              firmly believe that is a better value to you over the long term.
            </li>
          </Box>
        </Box>
        <Image image={image43698185622} alt="" />
      </Grid>
    </Container>
  </Layout>
)

IndexPage.propTypes = {
  data: PropTypes.any.isRequired,
}

export const pageQuery = graphql`
  query HomePageQuery {
    fluidImage1: file(
      relativePath: { eq: "patrick-hendry-431197-unsplash.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          formats: [AUTO, WEBP]
          placeholder: BLURRED
        )
      }
    }
    imageShane: file(relativePath: { eq: "shane-rounce-682783-unsplash.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 480
          formats: [AUTO, WEBP]
          placeholder: BLURRED
        )
      }
    }
    imageHelloquence: file(
      relativePath: { eq: "helloquence-61189-unsplash.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 480
          formats: [AUTO, WEBP]
          placeholder: BLURRED
        )
      }
    }
    image43698185622: file(
      relativePath: { eq: "43698185622_500965906c_k.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 480
          formats: [AUTO, WEBP]
          placeholder: BLURRED
        )
      }
    }
    imageAgathe: file(
      relativePath: { eq: "agathe-marty-651137-unsplash.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 480
          formats: [AUTO, WEBP]
          placeholder: BLURRED
        )
      }
    }
  }
`

export default IndexPage

export const Head = () => <SEO />
