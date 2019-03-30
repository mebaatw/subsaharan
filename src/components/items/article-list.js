import React from "react"
import { Link } from 'gatsby'
import styles from "./articlelists-css-modules.module.css"

export default props => (
  
    <>
        <Link className={styles.link}
              to={props.slug}>
              
                    <h3 className={styles.title}>{props.title}{" "}
                        <span className={styles.greyout}>
                           {props.date ==null||props.date.length===0?'': '('+props.date+')'} 
                        </span>
                    </h3>
              
        </Link>
        <p className={styles.excerpt}>{props.excerpt}</p>
    </>
 
)