import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'components/Link'
import { Flex } from 'components/Grid'
import styled, { themeGet } from 'style'
import Navigation from './Navigation'

const Wrapper = styled(Flex)`
  background: ${themeGet('colors.background')};
  padding: 0.5rem 1rem;
  border-bottom: 3px solid ${themeGet('colors.primary.300')};

  a:hover {
    text-decoration: none;
  }
`

const Title = styled.h1`
  margin: 0 1em 0 0;
  font-size: 2rem;

  @media screen and (max-width: 480px) {
    font-size: 1.25rem;
  }

  & * {
    color: ${themeGet('colors.grey.500')};
    text-decoration: none;
  }
`

const Header = ({ siteTitle }) => (
  <Wrapper as="header" alignItems="center" justifyContent="space-between">
    <Title>
      <Link to="/">{siteTitle}</Link>
    </Title>
    <Navigation />
  </Wrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
}

export default Header
