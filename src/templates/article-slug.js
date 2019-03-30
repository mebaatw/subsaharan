import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Article from "../components/items/article"
//import Imgs from "../components/items/images"
import Gallery from "../components/items/gallery"
import SlideShow from "../components/items/manslideshow"
//import Galleryc from "../components/items/gallerycust"
//import Scroll from '../components/items/scroll'
//import Videogallery from "../components/items/videogallery"
//import Img from 'gatsby-image'


export default ({ data }) => {
    const post = data.markdownRemark
  return (
    <Layout>
     <div  style={{ maxWidth: 3050, padding: ` 1rem`, margin: '.0rem' }}>
        <h1 style={{textAlign: `center`,padding: `30px`, margin: '.0rem'}}>{post.frontmatter.title}</h1>
       { post.html===null?"": <div dangerouslySetInnerHTML={{ __html: post.html }} />}
       

        {// data.allFile === null?"":
          // data.allFile.edges.map(({ node })=>(
          //   <span key={node.id} style={{position: `relative`}}>
          //     { 
          //       node.childImageSharp.fluid===null?"": 
          //      <Imgs pic={node.childImageSharp.fluid}
          //           picname ={node.relativePath}
          //      />
          //     }
          //   </span>
          // ))
      }
      <br/><br/>
      
      { 
          data.allFile===null||data.allFile.edges.length===0?"":
          <>
         
            <Gallery imgSharp={ data.allFile.edges} 
              imgs={post.frontmatter.img===undefined?" ll":post.frontmatter.img}
            />
         
          </>
      }  
   

    
      <br/><br/>
      {post.frontmatter.vid===null||post.frontmatter.vid.length===0?"":
        <>
        <br/>
        
        <SlideShow slides ={post.frontmatter.vid} />
        </>
      }
        <br/><br/> <br/> 
      <div style={{ float: ` left`}}>
     {
       post.frontmatter.url ===null?"":
       post.frontmatter.url.map((item,i) =>{
          return ( 
            
                <Article style={{  padding: ` 1rem` , margin:`0rem`}}  key={i}
                      title={item.title}
                      url={item.url}
                      excerpt={item.desc}
                    />
            
          );
       })
     }
     <br/><br/>
      
     <br/>
     {post.frontmatter.refs === null||post.frontmatter.refs.length===0?"":
     <span>
       
      <p>
      This page uses materials from Wikipedia available in the references.
      It is released under the  <a href="https://creativecommons.org/licenses/by-sa/3.0/">
      Creative Commons Attribution-Share-Alike License 3.0.
      </a>
      </p>

      <b>References</b>
     </span>
    
     }
     </div>
     <br/><br/>
     <div style={{ float: ` left`, margin:`0rem`}}>
     {
            post.frontmatter.refs === null?"":
              post.frontmatter.refs.map((item,i) =>{
                return ( 
                  
                      <div style={{ padding: ` 1rem` , margin:`0px`}}  key={i}>
                           <i style={{ margin: `.5rem`, padding: `0rem`}}> {item.ref} {" "}
                           {item.url.length===0?'': <a href={item.url}>Link</a>}
                           </i>

                      </div>
                  
                );
             })
     }
     </div>
     </div>
    </Layout>
  )
}



export const query = graphql`
  query($slug: String!,$imgs: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        img{
          name
          desc
        }
        vid{
          url
        }
        url{
          id
         url
         title
         desc
       }
       refs{
         id
         ref
         url
       }
      }
    }

    allFile(filter:{relativePath: {glob: $imgs}}) {
      totalCount
       edges{
         node{
           id
           absolutePath
           relativePath
           childImageSharp{
             fluid(maxWidth: 1000){
              ...GatsbyImageSharpFluid
             }
           }
         }
       }
       
     }

  }
`