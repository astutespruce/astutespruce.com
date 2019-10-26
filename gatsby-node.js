const path = require('path')
const slugify = require('@sindresorhus/slugify')

const extractNodes = ({ edges }) => edges.map(({ node }) => node)

/**
 * Enable absolute imports with `/src` as root.
 *
 * See: https://github.com/alampros/gatsby-plugin-resolve-src/issues/4
 */
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}

exports.createSchemaCustomization = ({ actions: { createTypes } }) => {
  createTypes(`
    type Mdx implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      title: String!
      banner: Banner
      date: Date @dateformat
      startDate: Date @dateformat
      endDate: Date @dateformat
      description: String
      url: String
      client: String
      categories: [String!]!
      tech: [[String!]!]
      keywords: [String!]
    }
    type Banner {
      src: File! @fileByRelativePath
      url: String
      credits: String
      caption: String
    }
  `)
}

// MDX config for multiple paths
// adapted from: https://github.com/kentcdodds/kentcdodds.com/blob/master/gatsby-node.js
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  const {
    id,
    internal: { type: nodeType },
    parent,
  } = node

  if (nodeType === `Mdx`) {
    const {
      name: filename,
      relativeDirectory,
      sourceInstanceName: contentType,
    } = getNode(parent)

    const { frontmatter } = node
    const { slug } = frontmatter

    createNodeField({
      name: 'id',
      node,
      value: id,
    })

    createNodeField({
      name: 'contentType',
      node,
      value: contentType,
    })

    createNodeField({
      name: 'slug',
      node,
      value: `/${contentType}/${slug ||
        slugify(filename === 'index' ? relativeDirectory : filename)}`,
    })
  }
}

// const createBlogPosts = (posts, createPage) => {
//   posts.forEach(({ id, fields: { slug: pagePath } }, i) => {
//     const prev = i === 0 ? null : posts[i - 1]
//     const next = i === posts.length - 1 ? null : posts[i + 1].node

//     createPage({
//       path: pagePath,
//       component: path.resolve(`./src/templates/BlogPost.jsx`),
//       context: {
//         id,
//         prev,
//         next,
//       },
//     })
//   })
// }

const createProjectPages = (projects, createPage) => {
  projects.forEach(({ id, fields: { slug: pagePath } }) => {
    createPage({
      path: pagePath,
      component: path.resolve(`./src/templates/Project.jsx`),
      context: {
        id,
      },
    })
  })
}

// blog: allMdx(
//   filter: {
//     frontmatter: { date: { ne: null } }
//     fileAbsolutePath: { regex: "//content/blog//" }
//   }
//   sort: { order: DESC, fields: [frontmatter___date] }
// ) {
//   edges {
//     node {
//       ...MDXDetails
//     }
//   }
// }

exports.createPages = async ({ actions, reporter, graphql }) => {
  const { createPage } = actions

  const { data, errors } = await graphql(`
    fragment MDXDetails on Mdx {
      fileAbsolutePath
      id
      parent {
        ... on File {
          name
          sourceInstanceName
        }
      }
      excerpt(pruneLength: 250)
      frontmatter {
        title
        description
        date
      }
      fields {
        slug
      }
    }
    query {
      projects: allMdx(
        filter: { fileAbsolutePath: { regex: "//content/projects//" } }
        sort: { order: DESC, fields: [frontmatter___startDate] }
      ) {
        edges {
          node {
            ...MDXDetails
          }
        }
      }
    }
  `)

  if (errors) {
    reporter.panicOnBuild('ERROR: Loading "createPages" query')
    return
  }

  const { projects } = data

  // createBlogPosts(extractNodes(blog), createPage)
  createProjectPages(extractNodes(projects), createPage)
}
