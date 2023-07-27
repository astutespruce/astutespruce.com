import React from 'react'
import PropTypes from 'prop-types'
import { Box, Flex, Paragraph, Text } from 'theme-ui'
import { ArrowRight } from '@emotion-icons/fa-solid'
import { GatsbyImage } from 'gatsby-plugin-image'

import { Link } from 'components/Link'

const ProjectListItem = ({
  fields: { slug },
  frontmatter: {
    title,
    client,
    startDate,
    endDate,
    banner: {
      src: {
        childImageSharp: { gatsbyImageData: image },
      },
    },
    description,
    categories,
  },
}) => (
  <Box
    sx={{
      '&:not(:first-of-type)': {
        mt: '2rem',
        pt: '2rem',
        borderTop: '1px solid',
        borderTopColor: 'grey.1',
      },
    }}
  >
    <Link to={slug} sx={{ color: 'text' }}>
      <Text sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{title}</Text>
    </Link>

    <Box sx={{ my: '0.5rem', position: 'relative', zIndex: 1 }}>
      <Box>
        <GatsbyImage
          image={image}
          style={{ height: '14rem', minHeight: '14rem' }}
          alt=""
        />
      </Box>
      <Flex
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          opacity: 0,
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          transition: 'opacity 200ms ease-in',
          '&:hover': {
            opacity: 1,
          },
        }}
      >
        <Link
          to={slug}
          sx={{
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'none',
            },
          }}
        >
          <Flex
            sx={{
              alignItems: 'center',
              color: '#FFF',
              border: '1px solid #FFF',
              borderRadius: '0.5rem',
              p: '1rem',
              gap: '0.5rem',
            }}
          >
            <Text>Read more</Text>
            <ArrowRight size="1.25rem" />
          </Flex>
        </Link>
      </Flex>
    </Box>

    <Box>
      <b>Client:</b> {client}
    </Box>
    <Box sx={{ fontSize: 'smaller', color: 'grey.8' }}>
      {startDate} — {endDate || 'present'}
    </Box>

    <Box
      sx={{
        my: '1rem',
        textTransform: 'uppercase',
        fontSize: 'smaller',
        color: 'green.7',
      }}
    >
      {categories.join(' | ')}
    </Box>

    <Paragraph>{description}</Paragraph>

    <Flex>
      <Link to={slug}>
        <Flex sx={{ alignItems: 'center', gap: '0.5rem' }}>
          <Text sx={{ flex: '0 0 auto' }}>Read more</Text>
          <Box sx={{ flex: '0 0 auto' }}>
            <ArrowRight size="1.25rem" />
          </Box>
        </Flex>
      </Link>
    </Flex>
  </Box>
)

ProjectListItem.propTypes = {
  frontmatter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    banner: PropTypes.object.isRequired,
    description: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string,
    client: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  fields: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }).isRequired,
}

export default ProjectListItem
