/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  //  console.log(node.internal.type)
  const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`|| node.internal.type ===  `File`) {
       // console.log(`***internal type`,node.internal.type)
       //const fileNode = getNode(node.parent)
       //console.log(`***fileNode\n`, fileNode.relativePath)
       //console.log(`***createFilePath`,createFilePath({ node, getNode, basePath: `pages` }))
       const slug = createFilePath({ node, getNode, basePath: `pages` })
       createNodeField({
        node,
        name: `slug`,
        value: slug.substring(slug.indexOf("/", 3)+1,slug.length-1),
      })
    }
  }

   

  exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    // **Note:** The graphql function call returns a Promise
    // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
    return graphql(`
      {
        allMarkdownRemark(   filter: {
            frontmatter: { country: { ne:null  } }
          })  {
          edges {
            node {
              fields {
                slug
              }
              frontmatter{
                 country
                 countries
                 type
                 
                 types
                }
            }
          }
        }
      }
    `
  ).then(result => {
     // console.log(JSON.stringify(result, null, 4))
     result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.frontmatter.country,
          component: path.resolve(`./src/templates/article-excerpt.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
           // slug: node.fields.slug,
           country: "*"+ node.frontmatter.country+"*",
           countries: node.frontmatter.countries
          },
        }),
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/article-slug.js`),
            context: {
              // Data passed to context is available
              // in page queries as GraphQL variables.
              slug: node.fields.slug,
              imgs: "*"+node.fields.slug+"*",
            },
          }),
          createPage({
            path: node.frontmatter.type,
            component: path.resolve(`./src/templates/article-types.js`),
            context: {
              // Data passed to context is available
              // in page queries as GraphQL variables.
              type: "*"+node.frontmatter.type+"*",
              types: node.frontmatter.types
            },
          })
      })
    })
  }
