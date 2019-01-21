import React from 'react'

import { Container, Flex } from 'components/Grid'
import { Link, OutboundLink } from 'components/Link'
import styled, { themeGet } from 'util/style'

import { nav } from '../../../config/nav'

const Wrapper = styled(Container)`
  margin-top: 2rem;
  border-top: 3px solid ${themeGet('colors.primary.300')};
  padding: 2rem 1rem;
  h3 {
    margin-bottom: 0.25em;
  }

  p {
    margin-bottom: 0;
  }

  ul {
    list-style: none;
    margin: 0;
    li {
      margin-bottom: 0.25em;
    }

    &:nth-child(2) {
      padding: 1rem 4rem;
      text-align: center;
      border-left: 1px solid ${themeGet('colors.grey.300')};
      border-right: 1px solid ${themeGet('colors.grey.300')};
      height: 7rem;
    }
  }
`

const Footer = () => (
  <Wrapper as="footer">
    <Flex justifyContent="space-between" alignItems="flex-end" flexWrap="wrap">
      <div>
        <h3>Get in touch:</h3>
        <p>
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
        </p>
      </div>

      <ul>
        {nav.map(({ path, label }) => (
          <li>
            <Link key={path} to={path}>
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <ul>
        <li>
          <OutboundLink
            to="https://www.linkedin.com/in/brendan-c-ward/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </OutboundLink>
        </li>
        <li>
          <OutboundLink
            to="https://github.com/astutespruce"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub - Astute Spruce
          </OutboundLink>
        </li>
        <li>
          <OutboundLink
            to="https://github.com/brendan-ward"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub - Brendan Ward
          </OutboundLink>
        </li>
        <li>
          <OutboundLink
            to="https://medium.com/@brendan_ward"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </OutboundLink>
        </li>
      </ul>
    </Flex>
  </Wrapper>
)

export default Footer
