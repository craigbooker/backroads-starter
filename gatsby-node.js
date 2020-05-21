exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    {
      allMdx {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  const posts2 = data.allMdx.edges

  posts2.forEach(({ node }) => {
    const { slug } = node.frontmatter
    createPage({
      path: `blog/${slug}`,
      component: require.resolve("./src/templates/post-template.js"),
      context: {
        slug: slug,
      },
    })
  })
}
