import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import ArticleList from "../components/items/article-list"

export default ({ data }) => {
   // const post = data.allMarkdownRemark.edges.node
  return (
    <Layout>
      {data.allMarkdownRemark.edges.map(({ node }) =>(
      <div key={node.id}>
          
         <ArticleList 
          slug={node.fields.slug}
          title={node.frontmatter.title}
          date={node.frontmatter.date}
          excerpt={node.excerpt}
         />

          <p/>
      </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query($type: String!) {
    allMarkdownRemark(sort: {fields:[frontmatter___sort],order:ASC},filter:{frontmatter:{types:{glob: $type},country:{ne:null}}}){ 
        edges{
          node{
            id
            frontmatter{
              country
              title
              date
            }
            fields {
                slug
              }
            excerpt(pruneLength: 480)
            timeToRead
            html
          }
        }
      }
  }
`