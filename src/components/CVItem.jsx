import React from 'react'
import PropTypes from 'prop-types'

import styled, { themeGet } from 'util/style'

const Wrapper = styled.div`
  &:not(:first-child) {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid ${themeGet('colors.grey.100')};
  }
`

const Header = styled.div`
  margin-bottom: 0.5rem;
  h4 {
    margin-bottom: 0;
  }
`

const Organization = styled.div`
  color: ${themeGet('colors.primary.600')};
`

const Location = styled.div`
  color: ${themeGet('colors.grey.200')};
`

const Content = styled.div`
  p {
    margin-bottom: 0.5em;
  }
`

const CVItem = ({
  dates: [start, end],
  title,
  organization,
  location,
  children,
}) => (
  <Wrapper>
    <Header>
      <div>
        <h4>{title}</h4>
        <Organization>
          {organization}&nbsp;&nbsp;|&nbsp;&nbsp;{start}
          {end ? `—${end}` : null}
        </Organization>
        <Location>{location}</Location>
      </div>
    </Header>
    {children !== null ? <Content>{children}</Content> : null}
  </Wrapper>
)

CVItem.propTypes = {
  dates: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
  title: PropTypes.string.isRequired,
  organization: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  children: PropTypes.node,
}

CVItem.defaultProps = {
  children: null,
}

export default CVItem
