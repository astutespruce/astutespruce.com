import { graphql } from 'gatsby'

export const BannerImage = graphql`
  fragment Banner on Banner {
    src {
      ...fluidImage3200
    }
    credit
    url
    caption
  }

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
