import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'components/Link'
import { Flex } from 'components/Grid'
import styled, { themeGet, themePx } from 'util/style'
import Navigation from './Navigation'

const Title = styled.h1`
  margin: 0 1em 0 0;

  & * {
    color: ${themeGet('colors.grey.500')};
    text-decoration: none;
  }
`

const Wrapper = styled(Flex)`
  background: ${themeGet('colors.background')};
  padding: 0.5rem 1rem;
  border-bottom: 3px solid ${themeGet('colors.primary.300')};

  a:hover {
    text-decoration: none;
  }
  /* padding: ${themePx('space.3')} ${themePx('space.3')};
  margin-bottom: ${themePx('space.4')}; */
`

const Header = ({ siteTitle }) => (
  <Wrapper as="header" alignItems="center" justifyContent="space-between">
    {/* <Container> */}
    <Title>
      <Link to="/">{siteTitle}</Link>
    </Title>
    <Navigation />
    {/* </Container> */}
  </Wrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
}

export default Header
