import React from 'react'

import styled, { themeGet } from 'util/style'

const Wrapper = styled.footer`
  margin-top: 2rem;
  border-top: 3px solid ${themeGet('colors.primary.300')};
  padding: 2rem 1rem;
  h3 {
    color: ${themeGet('colors.grey.300')};
    margin-bottom: 0.25em;
  }
`

const Footer = () => (
  <Wrapper>
    <h3>Get in touch:</h3>
    <p>
      Brendan C. Ward
      <br />
      Owner | Lead software engineer
      <br />
      <a href="mailto:bcward@astutespruce.com">bcward@astutespruce.com</a>
      <br />
      541-250-9544
      <br />
      Oregon, USA
      <br />
    </p>
  </Wrapper>
)

export default Footer
