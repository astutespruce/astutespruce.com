import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Box, Container, Heading } from 'theme-ui'
import { Layout, SEO } from 'components/Layout'
import { ListItem } from 'components/Project'

const Projects = ({
  data: {
    allMdx: { edges: projectNodes },
  },
}) => {
  const projects = projectNodes.map(({ node }) => node)

  return (
    <Layout>
      <Container>
        <Heading as="h1" sx={{ mb: '2rem' }}>
          Recent Projects
        </Heading>

        <Box>
          {projects.map((project) => (
            <ListItem key={project.id} {...project} />
          ))}
        </Box>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMdx(
      filter: { internal: { contentFilePath: { regex: "/projects/" } } }
      sort: { frontmatter: { endDate: DESC } }
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
              src {
                childImageSharp {
                  gatsbyImageData(
                    layout: FULL_WIDTH
                    formats: [AUTO, WEBP]
                    placeholder: BLURRED
                  )
                }
              }
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

export const Head = () => <SEO title="Projects" />
