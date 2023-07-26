import React from 'react'
import { Flex, Heading } from 'theme-ui'

import { Link } from 'components/Link'
import Navigation from './Navigation'

const Header = () => (
  <Flex
    as="header"
    sx={{
      alignItems: 'center',
      justifyContent: 'space-between',
      pt: '0.25rem',
      pb: '0.5rem',
      px: '1rem',
      lineHeight: 1,
      borderBottom: '3px solid',
      borderBottomColor: 'green.3',
      '& a, & a:hover': {
        textDecoration: 'none',
      },
    }}
  >
    <Link to="/" sx={{ color: 'grey.9' }}>
      <Heading as="h1" sx={{ m: '0 1em 0 0', fontSize: ['1.5rem', '2rem'] }}>
        Astute Spruce
      </Heading>
    </Link>

    <Navigation />
  </Flex>
)

Header.propTypes = {}

export default Header
