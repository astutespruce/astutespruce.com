import React from 'react'
import PropTypes from 'prop-types'
import { Box, Heading, Text } from 'theme-ui'

import { OutboundLink } from 'components/Link'

const Employment = ({
  dates: [start, end],
  title,
  organization,
  location,
  url,
  children,
  ...props
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
    {...props}
  >
    <Box sx={{ mb: '0.5rem' }}>
      <>
        <Heading as="h3" sx={{ mb: 0 }}>
          {title}
        </Heading>
        <Text sx={{ color: 'green.6' }}>
          {url ? (
            <OutboundLink to={url}>{organization}</OutboundLink>
          ) : (
            organization
          )}
          &nbsp;&nbsp;|&nbsp;&nbsp;{start}
          {end ? `—${end}` : null}
        </Text>
        <Text sx={{ fontStyle: 'italic', color: 'grey.8' }}>{location}</Text>
      </>
    </Box>
    {children !== null ? (
      <Box
        sx={{
          '& p': {
            mb: '0.5rem',
          },
        }}
      >
        {children}
      </Box>
    ) : null}
  </Box>
)

Employment.propTypes = {
  dates: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
  title: PropTypes.string.isRequired,
  organization: PropTypes.string.isRequired,
  url: PropTypes.string,
  location: PropTypes.string.isRequired,
  children: PropTypes.node,
}

Employment.defaultProps = {
  url: null,
  children: null,
}

export default Employment
