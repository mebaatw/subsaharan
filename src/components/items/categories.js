import React from "react"
//import Layout from "../components/layout"
import { graphql } from 'gatsby'

export default ({ data }) => {
   // const post = data.allMarkdownRemark.edges.node
  return (
    <>
      {data.allMarkdownRemark.group.map((g,i) =>(
      <div key={i}>
          cat
          {g.fieldValue}


          <p/>
      </div>
      ))}
    </>
  )
}

/**export const query = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {type: {ne: ""}}}) {
        group(field: frontmatter___type) {
          fieldValue
          totalCount
        }
      }
  }
` */