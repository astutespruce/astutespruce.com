import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from 'components/Layout'
import SEO from 'components/SEO'
import { Container } from 'components/Grid'
import { FluidImage, InsetFluidImage } from 'components/Image'

import styled, { themeGet } from 'style'

const Hero = styled(Container)`
  margin-top: 3rem;
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
  clear: both;
  padding: 3rem 1rem;
  border-top: 1px solid ${themeGet('colors.grey.100')};

  h3,
  h4 {
    margin-bottom: 0.5rem;
  }

  ul {
    margin-bottom: 0;
  }

  p + ul {
    margin-top: -1rem;
  }

  .clear {
    clear: both;
  }
`

const IndexPage = ({
  data: {
    fluidImage1,
    imageShane,
    image43698185622,
    imageHelloquence,
    imageAgathe,
  },
}) => (
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
      image={fluidImage1.childImageSharp.fluid}
      credits={{
        url: 'https://unsplash.com/photos/_lofCeUHMOo',
        author: 'Patrick Hendry',
      }}
    />

    <Section style={{ borderTop: 'none' }}>
      <h2>What makes me different?</h2>

      <h3>I bridge science and software.</h3>

      <p>
        With an advanced degree in landscape ecology and over 13 years
        professional experience in software engineering and geospatial
        technologies, I am highly effective at{' '}
        <b>bridging science and software</b> domains to capture the deep science
        domain experience of clients with cutting edge tools make that science
        accessible and engaging to their audience.
        <br />
        <br />
        What this means for you:
      </p>
      <ul>
        <li>
          I am passionately curious about understanding what you do and WHY, so
          that I can understand your data and leverage that to increase your
          impact.
        </li>
        <li>
          I take a rigorous experimental approach when developing a new
          application inspired by my science background. Often at the outset,
          the character of a new application is a bit unclear, and we discover
          it through the process of experimenting with different approaches and
          ways of presenting information to find the best fit.
        </li>
      </ul>
    </Section>

    <Section>
      <InsetFluidImage
        image={imageShane.childImageSharp}
        // credits={{
        //   url: 'https://unsplash.com/photos/DNkoNXQti3c',
        //   author: 'Shane Rounce',
        // }}
        width="320px"
        float="left"
      />

      <h3>I focus on impact.</h3>

      <p>
        The internet is filled with half-hearted applications that allow users
        to see data, but no clear actionable outcome. You know what? Those
        applications don’t lead to insights or engagement, and they don’t lead
        to greater impact.
        <br />
        <br />
        In contrast, I focus on impact from the start: how the application or
        tool effectively meets a real need and can measurably increase real
        impact. Is your goal to change user behavior and lead to real
        on-the-ground activities? Then whatever I build collaboratively with you
        needs to be strongly aligned around reaching that goal.
        <br />
        <br />
        What this means for you:
      </p>
      <ul>
        <li>
          I will work closely with you from the very beginning of a project to
          identify the real needs we are trying to solve. At each step in the
          development process, we measure ourselves against the impact we are
          ultimately trying to achieve.
        </li>
      </ul>
    </Section>

    <Section>
      <InsetFluidImage
        image={imageHelloquence.childImageSharp}
        // credits={{
        //   url: 'https://unsplash.com/photos/5fNmWej4tAA',
        //   author: 'Helloquence',
        // }}
        width="320px"
        float="right"
      />

      <h3>I am highly collaborative.</h3>

      <p>
        I firmly believe that we are going to achieve higher impact, together.
        While I am very self-driven and highly successful at working
        independently, a highly successful project is the result of us working
        closely together to clearly identify needs and context, running
        experiments to explore possible solutions, and clearly targeting the
        impact you want to achieve through every stage of the project.
        <br />
        <br />
        What this means for you:
      </p>
      <ul>
        <li>
          I will actively involve you in the design and overall approach used
          for a project, and help you to understand the tradeoffs in design,
          implementation, and hosting options.
        </li>
      </ul>
    </Section>

    <Section>
      <InsetFluidImage
        image={imageAgathe.childImageSharp}
        // credits={{
        //   url: 'https://unsplash.com/photos/0Izsy1Uy308',
        //   author: 'Agathe Marty',
        // }}
        width="320px"
        float="left"
      />

      <h3>I am pragmatic and focused on simplicity.</h3>

      <p>
        It is easy to get caught up in hype and shiny tools. The tools are only
        a means to an end: if those tools are too complex, we spend all our time
        on them instead of what we should really be focused on: <i>impact</i>.
        Often, when trying to visualize information, teams get carried away with
        adding power tools for advanced users - only to find in the process that
        they’ve alienated their core audience and missed their opportunity to
        have real impact.
      </p>

      <p>
        Instead, I focus on distilling things down as much as possible, to
        create a simple, intuitive experience. In practice, this is very
        difficult: simplicity is significantly more valuable over the long term
        than complexity, and also significantly harder to achieve.
        <br />
        <br />
        What this means for you:
      </p>

      <ul>
        <li>
          While I actively keep up on the latest trends and tools, I only
          leverage tools and approaches that best meet the need at hand with the
          lowest effort over the long term. Sometimes, a far simpler but less
          hyped solution is far superior over the long term.
        </li>
      </ul>
    </Section>

    <Section>
      <InsetFluidImage
        image={image43698185622.childImageSharp}
        // credits={{
        //   url: 'https://www.flickr.com/photos/evergladesnps/43698185622/',
        //   author: 'NPS',
        // }}
        width="320px"
        float="right"
      />

      <h3>I am open source by default</h3>

      <p>
        I believe that our tools get better when they are shared with and used
        by more people, and that by openly sharing something of value, we get
        something in return. I’m not an open-source zealot though, so I will
        work with you to find the right balance for your project. In practice,
        many of the libraries I create are open source, and some of the
        applications I create for clients are not.
        <br />
        <br />
        What this means for you:
      </p>
      <ul>
        <li>
          I will leverage a range of open source solutions to deliver your
          project, including open source applications and libraries I’ve
          created. Depending on the project, I will actively seek out ways to
          generalize our work into new libraries, because I firmly believe that
          is a better value to you over the long term.
        </li>
      </ul>
    </Section>
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
        fluid(maxWidth: 3200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    imageShane: file(relativePath: { eq: "shane-rounce-682783-unsplash.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 480) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    imageHelloquence: file(
      relativePath: { eq: "helloquence-61189-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 480) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image43698185622: file(
      relativePath: { eq: "43698185622_500965906c_k.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 480) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    imageAgathe: file(
      relativePath: { eq: "agathe-marty-651137-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 480) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default IndexPage
