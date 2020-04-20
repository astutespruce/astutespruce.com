import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Box, Container } from 'components/Grid'
import Layout from 'components/Layout'
import SEO from 'components/SEO'
import { BannerImage } from 'components/Image'
import { ListItem } from 'components/Project'
import { extractNodes } from 'util/graphql'
import styled from 'style'

const List = styled(Box)``

const Projects = ({ data: { banner, allMdx } }) => {
  const projects = extractNodes(allMdx)

  return (
    <Layout>
      <SEO
        title="Projects"
        description="Astute Spruce projects"
        extra={{ slug: 'projects' }}
      />

      {/* <BannerImage
        src={banner}
        credit="Kimberly Farmer"
        url="https://unsplash.com/photos/lUaaKCUANVI"
      /> */}

      <Container>
        <h1>Recent Projects</h1>

        <List>
          {projects.map(project => (
            <ListItem key={project.id} {...project} />
          ))}
        </List>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    banner: file(
      relativePath: { eq: "kimberly-farmer-lUaaKCUANVI-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 3200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    allMdx(
      filter: { fileAbsolutePath: { regex: "//content/projects//" } }
      sort: { order: DESC, fields: [frontmatter___endDate] }
    ) {
      edges {
        node {
          id
          frontmatter {
            client
            title
            description
            categories
            startDate(formatString: "MMM D, YYYY")
            endDate(formatString: "MMM D, YYYY")
            banner {
              ...Banner
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

Projects.propTypes = {
  data: PropTypes.shape({
    banner: PropTypes.object.isRequired,
    allMdx: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape(ListItem.propTypes),
        })
      ),
    }),
  }).isRequired,
}

export default Projects
