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
    const { slug, title, banner, date, description, keywords } = frontmatter

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

    createNodeField({
      name: 'date',
      node,
      value: date ? date.split(' ')[0] : '',
    })

    createNodeField({
      name: 'title',
      node,
      value: title,
    })

    createNodeField({
      name: 'description',
      node,
      value: description,
    })

    createNodeField({
      name: 'banner',
      node,
      value: banner,
    })

    createNodeField({
      name: 'keywords',
      node,
      value: keywords || [],
    })

    // add project specific fields
    if (contentType === 'projects') {
      const { client } = frontmatter
      createNodeField({
        name: 'client',
        node,
        value: client,
      })
    }
  }
}

const createBlogPosts = (posts, createPage) => {
  posts.forEach(({ id, fields: { slug: pagePath } }, i) => {
    const prev = i === 0 ? null : posts[i - 1]
    const next = i === posts.length - 1 ? null : posts[i + 1].node

    createPage({
      path: pagePath,
      component: path.resolve(`./src/templates/BlogPost.jsx`),
      context: {
        id,
        prev,
        next,
      },
    })
  })
}

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
      fields {
        title
        slug
        description
        date
      }
    }
    query {
      blog: allMdx(
        filter: {
          frontmatter: { date: { ne: null } }
          fileAbsolutePath: { regex: "//content/blog//" }
        }
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            ...MDXDetails
          }
        }
      }
      projects: allMdx(
        filter: { fileAbsolutePath: { regex: "//content/projects//" } }
        sort: { order: DESC, fields: [frontmatter___date] }
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
    // return Promise.reject(errors)
    reporter.panicOnBuild('ERROR: Loading "createPages" query')
    return
  }

  const { blog, projects } = data

  createBlogPosts(extractNodes(blog), createPage)
  createProjectPages(extractNodes(projects), createPage)
}
