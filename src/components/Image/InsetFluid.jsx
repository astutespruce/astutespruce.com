import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import styled, { theme } from 'util/style'
import ImageCredits from './ImageCredits'

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 2em;

  @media screen and (min-width: ${theme.breakpoints[0]}) {
    width: ${({ width }) => width};
    float: ${({ float }) => float};
    margin: ${({ float }) => {
      switch (float) {
        case 'left': {
          return '0 2em 1em 0'
        }
        case 'right': {
          return '0 0 2em 1em'
        }
        default: {
          return '0'
        }
      }
    }};
  }

  .gatsby-resp-image-wrapper {
    max-width: inherit !important;
  }
`

const InsetFluid = ({ image, width, float, credits }) => (
  <>
    <Wrapper width={width} float={float}>
      <Img fluid={image.fluid} />
    </Wrapper>
    {credits ? (
      <ImageCredits>
        Photo:&nbsp;
        <a href={credits.url} target="_blank" rel="noopener noreferrer">
          {credits.author}
        </a>
      </ImageCredits>
    ) : null}
  </>
)

InsetFluid.propTypes = {
  image: PropTypes.any.isRequired,
  width: PropTypes.string,
  float: PropTypes.string,
  credits: PropTypes.shape({
    url: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }),
}

InsetFluid.defaultProps = {
  width: '100%',
  float: 'none',

  credits: null,
}

export default InsetFluid
