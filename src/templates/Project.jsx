import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import get from 'lodash/get'

import { Link } from 'components/Link'
import { Title as BaseTitle } from 'components/Text'
import { Box, Container } from 'components/Grid'
import Layout from 'components/Layout'
import SEO from 'components/SEO'
import { FluidImage } from 'components/Image'
import styled, { themeGet } from 'style'

const Title = styled(BaseTitle)`
  margin-bottom: 0.5rem;
`

const Client = styled(Box).attrs({})``

const Content = styled(Box).attrs({})`
  h1,
  h2,
  h3 {
    margin-bottom: 0.5rem;
  }
  figcaption {
    text-align: center;
    color: ${themeGet('colors.grey.700')};
    font-size: smaller;
  }
`

const List = styled.ul`
  li {
    margin-bottom: 0.25rem;
  }
`

const ProjectTemplate = ({
  data: {
    project: {
      body,
      frontmatter: { client, tech },
      fields: { slug, title, description, date, keywords, banner },
    },
  },
}) => {
  return (
    <Layout>
      <SEO
        title={title}
        description={description}
        keywords={keywords}
        image={get(banner, 'src.childImageSharp.fluid.src')}
        extra={{ slug }}
      />

      {banner ? (
        <FluidImage
          image={banner.src.childImageSharp.fluid}
          height="40vh"
          credits={{
            author: banner.credit,
            url: banner.url,
          }}
        />
      ) : null}

      <Container>
        <Title>{title}</Title>
        <Client>
          <b>Client:</b> {client}
        </Client>

        <Content>
          <MDXRenderer>{body}</MDXRenderer>
        </Content>

        {tech && tech.length ? (
          <>
            <b>Technologies used:</b>
            <br />
            <List>
              {tech.map(labels => (
                <li>{labels.join(', ')}</li>
              ))}
            </List>
          </>
        ) : null}
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    project: mdx(fields: { id: { eq: $id } }) {
      frontmatter {
        tech
        client
      }
      fields {
        slug
        title
        description
        banner {
          src {
            ...fluidImage3200
          }
          credit
          url
        }
        date
        keywords
      }
      body
    }
  }
`

ProjectTemplate.propTypes = {
  data: PropTypes.shape({
    project: PropTypes.shape({
      body: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        client: PropTypes.string.isRequired,
        tech: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
      }),
      fields: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        date: PropTypes.string,
        keywords: PropTypes.arrayOf(PropTypes.string),
        banner: PropTypes.shape({
          src: PropTypes.object,
          credit: PropTypes.string,
          url: PropTypes.string,
        }),
      }),
    }).isRequired,
  }).isRequired,
}

export default ProjectTemplate
