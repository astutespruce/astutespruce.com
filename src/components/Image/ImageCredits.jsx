import styled, { themeGet } from 'style'

const ImageCredits = styled.div`
  font-size: smaller;
  text-align: right;
  margin-right: 1rem;
  color: ${themeGet('colors.grey.600')};

  a {
    color: ${themeGet('colors.grey.600')};
    text-decoration: underline;
  }
`

export default ImageCredits
