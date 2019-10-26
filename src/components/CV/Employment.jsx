import React from 'react'
import PropTypes from 'prop-types'

import { OutboundLink } from 'components/Link'
import styled, { themeGet } from 'style'

const Wrapper = styled.div`
  &:not(:first-child) {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid ${themeGet('colors.grey.100')};
  }
`

const Header = styled.div`
  margin-bottom: 0.5rem;
`

const Title = styled.h3`
  margin-bottom: 0;
`

const Organization = styled.div`
  color: ${themeGet('colors.primary.600')};
`

const Location = styled.div`
  font-style: italic;
  color: ${themeGet('colors.grey.600')};
`

const Content = styled.div`
  p {
    margin-bottom: 0.5em;
  }
`

const Employment = ({
  dates: [start, end],
  title,
  organization,
  location,
  url,
  children,
  ...props
}) => (
  <Wrapper {...props}>
    <Header>
      <>
        <Title>{title}</Title>
        <Organization>
          {url ? (
            <OutboundLink from="/about" to={url}>
              {organization}
            </OutboundLink>
          ) : (
            organization
          )}
          &nbsp;&nbsp;|&nbsp;&nbsp;{start}
          {end ? `—${end}` : null}
        </Organization>
        <Location>{location}</Location>
      </>
    </Header>
    {children !== null ? <Content>{children}</Content> : null}
  </Wrapper>
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
