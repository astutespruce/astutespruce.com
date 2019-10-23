import { graphql } from 'gatsby'

export const BannerImage = graphql`
  fragment fluidImage3200 on File {
    childImageSharp {
      fluid(maxWidth: 3200) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }

  fragment fluidImage960 on File {
    childImageSharp {
      fluid(maxWidth: 960) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`
