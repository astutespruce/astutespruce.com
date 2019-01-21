import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Link } from 'components/Link'
import { Box, Container } from 'components/Grid'
import Layout from 'components/Layout'
import SEO from 'components/SEO'
import styled from 'util/style'

const AbsBox = styled(Box)`
  padding: 1rem 2rem;
  position: absolute;
  top: 6rem;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
  text-align: center;

  h1 {
    color: #fff;
    font-size: 4rem;
  }

  h2 {
    color: #fff;

    a {
      color: #fff;
    }
  }
`

const Credits = styled.div`
  font-size: smaller;
  text-align: right;
  margin-right: 1rem;
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <StaticQuery
      query={graphql`
        query {
          img: file(
            relativePath: { eq: "deanna-ritchie-227649-unsplash.jpg" }
          ) {
            childImageSharp {
              fluid(maxWidth: 960) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => <Img fluid={data.img.childImageSharp.fluid} />}
    />

    <Credits>
      Photo:&nbsp;
      <a
        href="https://unsplash.com/photos/wORTURlz7jg"
        target="_blank"
        rel="noopener noreferrer"
      >
        Deanna Ritchie
      </a>
    </Credits>

    <AbsBox>
      <h1>PAGE NOT FOUND</h1>
      <h2>You appear to be lost...</h2>
      <h2>
        Luckily, we&apos;re <Link to="/">here</Link> to help.
      </h2>
    </AbsBox>
  </Layout>
)

export default NotFoundPage
