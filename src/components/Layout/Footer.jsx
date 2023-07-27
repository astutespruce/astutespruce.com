import React from 'react'
import { Box, Container, Flex, Heading, Paragraph } from 'theme-ui'

import { Link, OutboundLink } from 'components/Link'
import { nav } from '../../../config/nav'

const Footer = () => (
  <Container
    as="footer"
    sx={{
      my: '2rem',
      borderTop: '3px solid',
      borderTopColor: 'green.3',
      pt: '2rem',
      px: '1rem',

      '& ul': {
        listStyle: 'none',
        m: 0,
      },
      '& ul li': {
        mb: '0.25rem',
      },
    }}
  >
    <Flex
      sx={{
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexWrap: 'wrap',
      }}
    >
      <Box>
        <Heading as="h3" sx={{ mb: '0.25rem' }}>
          Get in touch:
        </Heading>
        <Paragraph sx={{ mb: '0rem' }}>
          Astute Spruce, LLC
          <br />
          Brendan C. Ward
          <br />
          Owner | Lead software engineer
          <br />
          Email:{' '}
          <a href="mailto:bcward@astutespruce.com">bcward@astutespruce.com</a>
          <br />
          Phone: 541-250-9544
          <br />
          Oregon, USA
          <br />
        </Paragraph>
      </Box>

      <Box as="ul">
        {nav.map(({ path, label }) => (
          <li key={path}>
            <Link key={path} to={path}>
              {label}
            </Link>
          </li>
        ))}
      </Box>

      <ul>
        <li>
          <OutboundLink to="https://www.linkedin.com/in/brendan-c-ward/">
            LinkedIn
          </OutboundLink>
        </li>
        <li>
          <OutboundLink to="https://github.com/astutespruce">
            GitHub - Astute Spruce
          </OutboundLink>
        </li>
        <li>
          <OutboundLink to="https://github.com/brendan-ward">
            GitHub - Brendan Ward
          </OutboundLink>
        </li>
        <li>
          <OutboundLink to="https://medium.com/@brendan_ward">
            Blog
          </OutboundLink>
        </li>
      </ul>
    </Flex>
  </Container>
)

export default Footer
