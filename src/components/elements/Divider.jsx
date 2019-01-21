import styled, { themeGet } from 'util/style'

const Divider = styled.div`
  height: 3px;
  width: 100%;
  background-color: ${themeGet('colors.primary.300')};
  margin: 3rem 0;
`

export default Divider
