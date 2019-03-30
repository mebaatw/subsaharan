import React, { Component } from 'react';
import Styles from "./gallery-css-modules.module.css"


class vidgallery extends Component{
  constructor(props){
    super(props)

    this.state ={

    }
    
  }


  render(){
    const {  imgSharp } = this.props;

    return(
      <>
      
      <div className={Styles.row}>
        {
          imgSharp.map(({ node })=>(
            <div className={Styles.column} key={node.id}>
              { 
                node.childImageSharp.fluid===null?"": 
                 <Img fluid={node.childImageSharp.fluid}/>
              }
            </div>
          ))
        }
        </div>
        
      </>
    )
  }
}
export default vidgallery