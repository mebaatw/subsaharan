import React, { Component } from 'react';
import Styles from "./galleryt-css-modules.module.css"
//import Img from 'gatsby-image'
import Cardimg from './cardimg'


class gallery extends Component{
  constructor(props){
    super(props)

    //this.expandedImg = React.createRef();
    //this.imgtext = React.createRef();

    this.state ={
     // imag:[],
     // isToggleOn: true,
      //value: ''
    }
    this.goToSlide = this.goToSlide.bind(this);
  }

  goToSlide= (imgs)=>{
    //alert('clicked');
    //console.log("************",imgs);
    var expandImg = document.getElementById("expandedImg");
    // Get the image text
    //var imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = require(`../../images/${imgs}`);
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    //imgText.innerHTML = "alt"//{imgs.alt};
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
     return true
  }
//<Img fluid={node.childImageSharp.fluid} style ={{paddingTop: '0px', marginTop: '0px'}} />
//<Cardimg imageSharp={node.childImageSharp.fluid} desc="desc"/>
  render(){
    const {  imgSharp, imgs } = this.props;

    return(
      <>
     
      <div className={Styles.row}>
        {
          imgSharp.map(({ node })=>(
            <div className={Styles.column} key={node.id}>
              { 
               node.childImageSharp===null|| node.childImageSharp.fluid===null?"": 
                <>

                  <span onClick={()=>this.goToSlide(node.relativePath)} id="smlprnt">
                  <a href="#prnt">
                  
                  <Cardimg imageSharp={node.childImageSharp.fluid} desc={imgs===undefined?"oo":imgs.find( img => img.name === node.relativePath )}/>
                    
                  </a>
                  </span>
                 </>
              }
            </div>
          ))
        }
        </div>
        <div className={Styles.container} id="prnt">
          <span onClick={()=> document.getElementById("prnt").style.display='none'} className={Styles.closebtn}><a href="#smlprnt"><b>&times;</b></a></span>
          <img id="expandedImg" style={{width: "100%"}} alt=""/>
          <div id="imgtext"></div>
        </div>
        
      </>
    )
  }
}
export default gallery