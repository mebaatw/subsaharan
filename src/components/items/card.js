import React from "react"
import styles from "./flags-css-modules.module.css"

export default props => (
  
    <div className={styles.column} >
        <div className={styles.card}>           
                <b>{props.name}</b>   
        </div>
        <p/>
    </div> 
)
