import React from "react"
import styles from "./imgs-css-modules.module.css"
import Img from 'gatsby-image'

export default props => (
  
<div className={styles.responsive}>
  <div className={styles.gallery}>
        <Img fluid={props.pic} />
  </div>
</div>
     
)