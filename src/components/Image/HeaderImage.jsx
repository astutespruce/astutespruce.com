import React from 'react'
import PropTypes from 'prop-types'
import { Box, Flex, Container, Heading, Text } from 'theme-ui'
import { GatsbyImage } from 'gatsby-plugin-image'

import Credits from './Credits'

const HeaderImage = ({
  image,
  height,
  minHeight,
  maxHeight,
  title,
  subtitle,
  credits,
  caption,
}) => (
  <>
    <Box
      sx={{
        position: 'relative',
        height,
        minHeight,
        maxHeight: maxHeight || height,
      }}
    >
      <GatsbyImage
        image={image}
        style={{
          position: 'relative',
          top: 0,
          zIndex: 0,
          borderTop: '4px solid #FFF',
          height,
          minHeight,
          maxHeight: maxHeight || height,
        }}
        alt=""
      />
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          zIndex: 1,
          height,
          minHeight,
          maxHeight: maxHeight || height,
        }}
      >
        <Flex
          sx={{
            mt: 0,
            overflow: 'hidden',
            width: '100%',
            position: 'absolute',
            zIndex: 2,
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          {title && (
            <Box
              sx={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(transparent 0%, #00000080 40%)',
                py: '2rem',
              }}
            >
              <Container
                sx={{
                  mb: '1rem',
                  textShadow: '1px 1px 3px #000',
                  color: '#FFF',
                  lineHeight: 1.1,
                }}
              >
                <Heading
                  as="h1"
                  sx={{
                    m: 0,
                    fontSize: ['2.5rem', '3rem'],
                    color: '#FFFFFF',
                  }}
                >
                  {title}
                </Heading>

                {subtitle && (
                  <Text
                    sx={{
                      margin: '0.5rem 0 0 0',
                      fontWeight: 'normal',
                      fontSize: ['1.5rem', '1.75rem'],
                      fontFamily: 'body',
                      color: '#FFFFFF',
                    }}
                  >
                    {subtitle}
                  </Text>
                )}
              </Container>
            </Box>
          )}
        </Flex>
      </Box>
    </Box>
    {credits ? <Credits caption={caption} {...credits} /> : null}
  </>
)

HeaderImage.propTypes = {
  image: PropTypes.any.isRequired,
  height: PropTypes.string,
  minHeight: PropTypes.string,
  maxHeight: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  subtitle: PropTypes.string,
  credits: PropTypes.shape({
    url: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }),
  caption: PropTypes.string,
}

HeaderImage.defaultProps = {
  height: '60vh',
  minHeight: '20rem',
  maxHeight: null,
  title: null,
  subtitle: null,
  credits: null,
  caption: null,
}

export default HeaderImage
