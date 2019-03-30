import React from "react"
import Layout from "../components/layout"
import Card from "../components/items/card"
import { Link, graphql } from 'gatsby'

export default ({ data }) => {
    // const post = data.allMarkdownRemark.edges.node
   return (
     <Layout>
         cat
       {data.allMarkdownRemark.group.map((g,i) =>(
       <div key={i}>
           <Link  to={g.fieldValue}>
                <Card  name= {g.fieldValue}/>
           </Link>
 
           <p/>
       </div>
       ))}
       <br/><br/>
     </Layout>
   )
 }
 
 export const query = graphql`
   query {
     allMarkdownRemark(filter: {frontmatter: {type: {in:["Cities","Kingdoms","Architecture"]}}}) {
         group(field: frontmatter___type) {
           fieldValue
           totalCount
         }
       }
   }
 `