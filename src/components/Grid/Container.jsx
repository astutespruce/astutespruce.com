import PropTypes from 'prop-types'
import styled, { theme } from 'style'
import { Box } from 'reflexbox'

const Container = styled(Box)`
  max-width: ${props => props.maxWidth};
  padding: 1rem;
`

Container.propTypes = {
  maxWidth: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array,
  ]),
}

Container.defaultProps = {
  mx: 'auto',
  maxWidth: theme.containerWidth,
}

export default Container
