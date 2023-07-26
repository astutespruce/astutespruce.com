import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Box, Container, Heading } from 'theme-ui'
import { Layout, SEO } from 'components/Layout'
// import { ListItem } from 'components/Project'
import { extractNodes } from 'util/graphql'

const Projects = () =>
  // { data: { allMdx } }
  {
    // const projects = extractNodes(allMdx)

    return (
      <Layout>
        <Container>
          <Heading as="h1">Recent Projects</Heading>

          <Box>
            TODO:
            {/* {projects.map((project) => (
            <ListItem key={project.id} {...project} />
          ))} */}
          </Box>
        </Container>
      </Layout>
    )
  }

// export const pageQuery = graphql`
//   query {
//     allMdx(
//       filter: { fileAbsolutePath: { regex: "//content/projects//" } }
//       sort: { order: DESC, fields: [frontmatter___endDate] }
//     ) {
//       edges {
//         node {
//           id
//           frontmatter {
//             client
//             title
//             description
//             categories
//             startDate(formatString: "MMM D, YYYY")
//             endDate(formatString: "MMM D, YYYY")
//             banner {
//               ...Banner
//             }
//           }
//           fields {
//             slug
//           }
//         }
//       }
//     }
//   }
// `

// Projects.propTypes = {
//   data: PropTypes.shape({
//     allMdx: PropTypes.shape({
//       edges: PropTypes.arrayOf(
//         PropTypes.shape({
//           node: PropTypes.shape(ListItem.propTypes),
//         })
//       ),
//     }),
//   }).isRequired,
// }

export default Projects

export const Head = () => <SEO title="Projects" />
