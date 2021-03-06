import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import get from 'lodash/get'

import { Title as BaseTitle, Text } from 'components/Text'
import { Box, Container, Flex } from 'components/Grid'
import Layout from 'components/Layout'
import SEO from 'components/SEO'
import { BannerImage } from 'components/Image'
import styled, { themeGet } from 'style'

const Title = styled(BaseTitle)`
    font-size: 2rem;
    margin-top: 2rem;
    margin-bottom: 0.5rem;
`

const Info = styled(Box)``

const Client = styled(Text).attrs({ fontSize: '1.25rem' })``

const Dates = styled(Text).attrs({ fontSize: 'smaller' })`
    color: ${themeGet('colors.grey.700')};
`

const Categories = styled(Text).attrs({ my: '1rem' })`
    text-transform: uppercase;
    font-size: smaller;
    color: ${themeGet('colors.primary.600')};
`

const MDXContent = styled(Box).attrs({ pt: '1rem', mt: '1rem' })`
    border-top: 1px solid ${themeGet('colors.grey.100')};

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

    ul {
        margin-left: 2rem !important;
    }

    ul li {
        margin-bottom: 0.5rem;
    }

    p + ul {
        margin-top: -1rem;
    }

    p + h3 {
        margin-top: 2rem;
    }
`

const List = styled.ul`
    li {
        margin-bottom: 0.25rem;
    }
`

const Tech = styled(Box).attrs({ pt: '1rem', mt: '1rem' })`
    border-top: 1px solid ${themeGet('colors.grey.100')};
`

const ProjectTemplate = ({
    data: {
        project: {
            body,
            frontmatter: { title, client, startDate, endDate, categories, banner, description, keywords, tech },
            fields: { slug },
        },
    },
}) => {
    return (
        <Layout>
            <SEO
                title={title}
                description={description}
                keywords={keywords || categories}
                image={get(banner, 'src.childImageSharp.fluid.src')}
                extra={{ slug }}
            />

            {banner ? <BannerImage {...banner} /> : null}

            <Container>
                <Title>{title}</Title>

                <Info>
                    <Client>
                        <b>Client:</b> {client}
                    </Client>
                    <Dates>
                        {startDate} — {endDate || 'present'}
                    </Dates>

                    <Categories>{categories.join(' | ')}</Categories>
                </Info>

                <MDXContent>
                    <MDXRenderer>{body}</MDXRenderer>
                </MDXContent>

                {tech && tech.length ? (
                    <Tech>
                        <b>Technologies used:</b>
                        <br />
                        <List>
                            {tech.map(labels => (
                                <li key={labels.join('_')}>{labels.join(', ')}</li>
                            ))}
                        </List>
                    </Tech>
                ) : null}
            </Container>
        </Layout>
    )
}

export const pageQuery = graphql`
    query($id: String!) {
        project: mdx(fields: { id: { eq: $id } }) {
            frontmatter {
                title
                client
                startDate(formatString: "MMM D, YYYY")
                endDate(formatString: "MMM D, YYYY")
                categories
                banner {
                    ...Banner
                }
                description
                tech
                keywords
            }
            fields {
                slug
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
                title: PropTypes.string.isRequired,
                client: PropTypes.string.isRequired,
                startDate: PropTypes.string.isRequired,
                endDate: PropTypes.string,
                categories: PropTypes.arrayOf(PropTypes.string).isRequired,
                banner: PropTypes.shape(BannerImage.propTypes),
                description: PropTypes.string.isRequired,
                tech: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
                keywords: PropTypes.arrayOf(PropTypes.string),
            }),
            fields: PropTypes.shape({
                slug: PropTypes.string.isRequired,
            }),
        }).isRequired,
    }).isRequired,
}

export default ProjectTemplate
