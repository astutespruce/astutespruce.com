const path = require('path-browserify')
const fs = require('fs')
const slugify = require('@sindresorhus/slugify')

exports.onCreateWebpackConfig = ({ actions, stage, loaders, plugins }) => {
  const config = {
    resolve: {
      alias: {
        assert: require.resolve('assert'),
        os: require.resolve('os-browserify/browser'),
        path: require.resolve('path-browserify'),
        stream: require.resolve('stream-browserify'),
        util: require.resolve('util'),
        zlib: require.resolve('browserify-zlib'),
      },
      fallback: {
        fs: false,
        crypto: false,
      },

      // Enable absolute imports with `/src` as root.
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
    plugins: [
      plugins.provide({
        process: 'process/browser',
        Buffer: ['buffer', 'Buffer'],
      }),
    ],
  }

  // when building HTML, window is not defined, so maplibre-gl causes the build to blow up
  if (stage === 'build-html') {
    config.module = {
      rules: [
        {
          test: /maplibre-gl/,
          use: loaders.null(),
        },
      ],
    }
  }

  actions.setWebpackConfig(config)
}

// TODO: re-enable
// exports.createSchemaCustomization = ({ actions: { createTypes } }) => {
//   createTypes(`
//     type Mdx implements Node {
//       frontmatter: Frontmatter
//     }
//     type Frontmatter {
//       title: String!
//       banner: Banner
//       date: Date @dateformat
//       startDate: Date @dateformat
//       endDate: Date @dateformat
//       description: String
//       url: String
//       client: String
//       categories: [String!]!
//       tech: [[String!]!]
//       keywords: [String!]
//     }
//     type Banner {
//       src: File! @fileByRelativePath
//       url: String
//       credits: String
//       caption: String
//     }
//   `)
// }

// // MDX config for multiple paths
// // adapted from: https://github.com/kentcdodds/kentcdodds.com/blob/master/gatsby-node.js
// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
//   const {
//     id,
//     internal: { type: nodeType },
//     parent,
//   } = node

//   if (nodeType === `Mdx`) {
//     const {
//       name: filename,
//       relativeDirectory,
//       sourceInstanceName: contentType,
//     } = getNode(parent)

//     const { frontmatter } = node
//     const { slug } = frontmatter

//     createNodeField({
//       name: 'id',
//       node,
//       value: id,
//     })

//     createNodeField({
//       name: 'contentType',
//       node,
//       value: contentType,
//     })

//     createNodeField({
//       name: 'slug',
//       node,
//       value: `/${contentType}/${
//         slug || slugify(filename === 'index' ? relativeDirectory : filename)
//       }`,
//     })
//   }
// }

// const createProjectPages = (projects, createPage) => {
//   projects.forEach(({ id, fields: { slug: pagePath } }) => {
//     createPage({
//       path: pagePath,
//       component: path.resolve(`./src/templates/Project.jsx`),
//       context: {
//         id,
//       },
//     })
//   })
// }

// exports.createPages = async ({ actions, reporter, graphql }) => {
//   const { createPage } = actions

//   const { data, errors } = await graphql(`
//     fragment MDXDetails on Mdx {
//       fileAbsolutePath
//       id
//       parent {
//         ... on File {
//           name
//           sourceInstanceName
//         }
//       }
//       excerpt(pruneLength: 250)
//       frontmatter {
//         title
//         description
//         date
//       }
//       fields {
//         slug
//       }
//     }
//     query {
//       projects: allMdx(
//         filter: { fileAbsolutePath: { regex: "//content/projects//" } }
//         sort: { order: DESC, fields: [frontmatter___endDate] }
//       ) {
//         edges {
//           node {
//             ...MDXDetails
//           }
//         }
//       }
//     }
//   `)

//   if (errors) {
//     reporter.panicOnBuild('ERROR: Loading "createPages" query')
//     return
//   }

//   const { projects } = data

//   createProjectPages(extractNodes(projects), createPage)
// }
