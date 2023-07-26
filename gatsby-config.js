require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: 'https://astutespruce.com',
    title: 'Astute Spruce',
    description: 'Astute Spruce, LLC website',
    author: 'Brendan C. Ward',
    organization: 'Astute Spruce, LLC',
    contactEmail: `bcward@astutespruce.com`,

    // Social component
    twitterHandle: 'astutespruce',
    github: 'https://github.com/brendan-ward',
    linkedin: 'https://www.linkedin.com/in/brendan-c-ward/',

    googleAnalyticsId: process.env.GATSBY_GOOGLE_ANALYTICS_ID,
    sentryDSN: process.env.GATSBY_SENTRY_DSN,
  },
  flags: {
    FAST_DEV: true,
    DEV_SSR: true,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: process.env.GATSBY_GOOGLE_ANALYTICS_ID
          ? [process.env.GATSBY_GOOGLE_ANALYTICS_ID]
          : [],
        gtagConfig: {
          anonymize_ip: true,
        },
        pluginConfig: {
          head: true,
          respectDNT: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-theme-ui`,
      options: {
        injectColorFlashScript: false,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/content/projects/`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-mdx`,
    //   options: {
    //     extensions: ['.mdx', '.md'],
    //     gatsbyRemarkPlugins: [
    //       { resolve: 'gatsby-remark-copy-linked-files' },
    //       {
    //         resolve: 'gatsby-remark-images',
    //         options: {
    //           backgroundColor: '#fafafa',
    //           linkImagesToOriginal: false,
    //           showCaptions: true,
    //           markdownCaptions: true,
    //           maxWidth: 960,
    //           withWebp: true,
    //         },
    //       },
    //     ],
    //   },
    // },
    // {
    //   resolve: 'gatsby-remark-images',
    //   options: {
    //     backgroundColor: '#fafafa',
    //     linkImagesToOriginal: false,
    //     showCaptions: true,
    //     markdownCaptions: true,
    //     maxWidth: 960,
    //     withWebp: true,
    //   },
    // },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: process.env.GATSBY_SITE_URL || `http://localhost:8000`,
      },
    },
  ],
}
