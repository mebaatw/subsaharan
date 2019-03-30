import React from "react"
import styles from "./cardimg-css-modules.module.css"
import Img from 'gatsby-image'

export default props => (
  
    <div className={styles.card} >
         <Img fluid={props.imageSharp} style ={{height: '300px'}} />
        <div className={styles.container}>           
                <b style ={{fontSize: '70%', lineHeight: '1.4em'}}>
                {
                    props.desc===undefined?"":
                    <p className={styles.pt}>Hover here<span className={styles.spant}>{props.desc.desc}</span></p>
                    
                
                }
                
                </b>   
        </div>
       
    </div> 
)
