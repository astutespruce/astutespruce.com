import React from 'react'
import PropTypes from 'prop-types'

import { Flex } from 'components/Grid'
import styled, { themeGet } from 'util/style'

const Wrapper = styled.div`
  &:not(:first-child) {
    margin-top: 3rem;
  }
  p {
    margin-bottom: 0.5em;
  }
`

const Header = styled(Flex).attrs({
  justifyContent: 'space-between',
  flexWrap: 'wrap',
})`
  h4 {
    margin-bottom: 0;
  }
`

const GrayText = styled.div`
  color: ${themeGet('colors.grey.300')};
`

const CVItem = ({
  dates: [start, end],
  title,
  location,
  children,
}) => (
  <Wrapper>
    <Header>
      <h4>
        {start}&mdash;{end}: {title}
      </h4>
      <GrayText>{location}</GrayText>
    </Header>
    {children !== null ? <div>{children}</div> : null }
  </Wrapper>
)

CVItem.propTypes = {
  dates: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  children: PropTypes.node,
}

CVItem.defaultProps = {
  children: null
}

export default CVItem
