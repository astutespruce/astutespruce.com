import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { Link } from 'components/Link'
import { Flex } from 'components/Grid'
import styled, { themeGet } from 'style'
import Navigation from './Navigation'

const Wrapper = styled(Flex)`
  background: ${themeGet('colors.primary.100')};
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
    color: ${themeGet('colors.grey.900')};
    text-decoration: none;
  }
`

const Header = () => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <Wrapper as="header" alignItems="center" justifyContent="space-between">
      <Title>
        <Link to="/">{title}</Link>
      </Title>
      <Navigation />
    </Wrapper>
  )
}

Header.propTypes = {}

export default Header
