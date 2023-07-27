import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'

import { OutboundLink } from 'components/Link'

const Credits = ({ author, url, caption, sx }) => (
  <Box
    sx={{
      fontSize: 'smaller',
      textAlign: 'right',
      color: 'grey.6',
      pb: '0.25rem',
      px: '0.5rem',
      a: {
        color: 'grey.6',
        textDecoration: 'none',
        '&:hover': {
          color: 'link',
          textDecoration: 'underline',
        },
      },
      ...sx,
    }}
  >
    {caption ? `${caption} | ` : null}
    Photo:&nbsp;
    {url ? <OutboundLink to={url}>{author}</OutboundLink> : author}
  </Box>
)

Credits.propTypes = {
  author: PropTypes.string.isRequired,
  url: PropTypes.string,
  caption: PropTypes.string,
  sx: PropTypes.object,
}

Credits.defaultProps = {
  url: null,
  caption: null,
  sx: {},
}

export default Credits
