import React from "react"
//import styles from "./article-css-modules.module.css"

export default props => (
  
    <div style={{ margin: `.5rem`, padding: `0rem`}}>
      <h3 style={{margin: `.0rem`}}><a href={props.url}>{props.title}</a></h3>
      <p  style={{marginTop: `.2rem`}} >{props.excerpt}</p>
    </div>
 
)



