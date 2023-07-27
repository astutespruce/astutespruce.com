import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'

import { Box, Container, Heading } from 'theme-ui'
import { Layout, SEO } from 'components/Layout'
import { HeaderImage } from 'components/Image'

const ProjectTemplate = ({
  data: {
    project: {
      frontmatter: {
        title,
        client,
        startDate,
        endDate,
        categories,
        banner: {
          src: {
            childImageSharp: { gatsbyImageData: image },
          },
          url: imageURL,
          credits: imageAuthor,
          caption: imageCaption,
        },
        tech,
      },
    },
  },
  children,
}) => (
  <Layout>
    <HeaderImage
      image={image}
      credits={{ url: imageURL, author: imageAuthor }}
      caption={imageCaption}
    />

    <Container>
      <Heading as="h2" sx={{ fontSize: ['1.5rem', '2rem'], mb: '0.5rem' }}>
        {title}
      </Heading>

      <Box>
        <Box sx={{ fontSize: '1.25rem' }}>
          <b>Client:</b> {client}
        </Box>
        <Box sx={{ color: 'grey.8' }}>
          {startDate} — {endDate || 'present'}
        </Box>

        <Box
          sx={{
            my: '1rem',
            textTransform: 'uppercase',
            fontSize: 'smaller',
            color: 'green.6',
          }}
        >
          {categories.join(' | ')}
        </Box>
      </Box>

      <Box
        sx={{
          pt: '1rem',
          mt: '1rem',
          borderTop: '1px solid',
          borderTopColor: 'grey.1',
          figcaption: {
            textAlign: 'center',
            color: 'grey.8',
            fontSize: 'smaller',
            mb: '2rem',
          },
          'p + ul': {
            mt: '-1rem',
          },
          'p + h3': {
            mt: '2rem',
          },
        }}
      >
        <MDXProvider>{children}</MDXProvider>
      </Box>

      {tech && tech.length ? (
        <Box
          sx={{
            pt: '1rem',
            mt: '1rem',
            borderTop: '1px solid',
            borderTopColor: 'grey.1',
          }}
        >
          <b>Technologies used:</b>
          <br />
          <Box as="ul">
            {tech.map((labels) => (
              <li key={labels.join('_')}>{labels.join(', ')}</li>
            ))}
          </Box>
        </Box>
      ) : null}
    </Container>
  </Layout>
)

export const pageQuery = graphql`
  query ($id: String!) {
    project: mdx(fields: { id: { eq: $id } }) {
      frontmatter {
        title
        client
        startDate(formatString: "MMM D, YYYY")
        endDate(formatString: "MMM D, YYYY")
        categories
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
          url
          credits
          caption
        }
        description
        tech
        keywords
      }
      fields {
        slug
      }
      body
    }
  }
`

ProjectTemplate.propTypes = {
  data: PropTypes.shape({
    project: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        client: PropTypes.string.isRequired,
        startDate: PropTypes.string.isRequired,
        endDate: PropTypes.string,
        categories: PropTypes.arrayOf(PropTypes.string).isRequired,
        banner: PropTypes.object.isRequired,
        description: PropTypes.string.isRequired,
        tech: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
        keywords: PropTypes.arrayOf(PropTypes.string),
      }),
      fields: PropTypes.shape({
        slug: PropTypes.string.isRequired,
      }),
    }).isRequired,
  }).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
}

export default ProjectTemplate

/* eslint-disable react/prop-types */
export const Head = ({
  data: {
    project: {
      frontmatter: { title },
    },
  },
}) => <SEO title={title} />
