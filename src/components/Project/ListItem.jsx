import React from 'react'
import PropTypes from 'prop-types'
import { FaArrowRight } from 'react-icons/fa'

import { Link } from 'components/Link'
import { BannerImage } from 'components/Image'
import { Box, Flex } from 'components/Grid'
import { Text } from 'components/Text'
import styled, { themeGet } from 'style'

const Wrapper = styled(Box)`
  &:not(:first-child) {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid ${themeGet('colors.grey.100')};
  }
`

const Title = styled(Text).attrs({ fontSize: '1.5rem' })`
  a {
    text-decoration: none !important;
    color: ${themeGet('colors.grey.900')};
  }
`

const Info = styled(Flex).attrs({
  justifyContent: 'space-between',
  mb: '1rem',
})``

const Client = styled(Text)``

const Dates = styled(Text).attrs({ fontSize: 'smaller' })`
  color: ${themeGet('colors.primary.600')};
`

const BannerContainer = styled(Box)`
  position: relative;
  z-index: 1;
`

const BannerOverlay = styled(Flex).attrs({
  alignItems: 'center',
  justifyContent: 'center',
})`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 200ms ease-in;

  ${BannerContainer}:hover & {
    opacity: 1;
  }
`

const BannerLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 0.5rem;
  padding: 1rem;
  text-decoration: none !important;
`

const Categories = styled(Text).attrs({ my: '1rem' })`
  text-transform: uppercase;
  font-size: smaller;
  color: ${themeGet('colors.primary.600')};
`

const Description = styled(Text)``

const MoreLink = styled(Link).attrs({})`
  display: flex;
  align-items: center;
`

const Arrow = styled(FaArrowRight)`
  height: 1em;
  width: 1em;
  margin-left: 0.25em;
  transition: margin-left 100ms ease-in;

  ${MoreLink}:hover & {
    margin-left: 0.75em;
  }
`

const ProjectListItem = ({
  fields: { slug },
  frontmatter: {
    title,
    client,
    startDate,
    endDate,
    banner: { src },
    description,
    categories,
  },
}) => {
  return (
    <Wrapper>
      <Title>
        <Link to={slug}>{title}</Link>
      </Title>

      <Info>
        <Client>
          <b>Client:</b> {client}
        </Client>
        <Dates>
          {startDate} — {endDate || 'present'}
        </Dates>
      </Info>

      <BannerContainer>
        <BannerImage src={src} height="14rem" minHeight="14rem" />
        <BannerOverlay>
          <BannerLink to={slug}>
            <div>Read more</div>
            <Arrow />
          </BannerLink>
        </BannerOverlay>
      </BannerContainer>

      <Categories>{categories.join(' | ')}</Categories>

      <Description>{description}</Description>

      <MoreLink to={slug}>
        <div>Read more</div>
        <Arrow />
      </MoreLink>
    </Wrapper>
  )
}

ProjectListItem.propTypes = {
  frontmatter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    banner: PropTypes.shape(BannerImage.propTypes),
    description: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string,
    client: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    // tech: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
    // keywords: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  fields: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }).isRequired,
}

export default ProjectListItem
