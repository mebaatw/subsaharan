import React, { Component } from 'react';
import Styles from "./galleryt-css-modules.module.css"
//import Img from 'gatsby-image'
//import Scroll from './scroll'

class galleryt extends Component{
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
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = require(`../../images/${imgs}`);
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = "alt"//{imgs.alt};
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
     return true
   }

  render(){
 //const {  imgSharp } = this.props;

    return(
      <>
      
      <div className={Styles.row}>
        <div className={Styles.column}>
            <img src={require(`../../images/ec.jpg`)} alt="Nature1" onClick={()=>this.goToSlide("ec.jpg")}/>
        </div>
        <div className={Styles.column}>
            <img src={require(`../../images/ec.jpg`)} alt="Nature2" onClick={()=>this.goToSlide("ec.jpg")}/>
        </div>
        <div className={Styles.column}>
            <img src={require(`../../images/ec.jpg`)} alt="Nature3" onClick={()=>this.goToSlide("ec.jpg")}/>
        </div>
        <div className={Styles.column}>
            <img src={require(`../../images/ec.jpg`)} alt="Nature4" onClick={()=>this.goToSlide("ec.jpg")}/>
        </div>
        <div className={Styles.column}>
            <img src={require(`../../images/ec.jpg`)} alt="Nature5" onClick={()=>this.goToSlide("ec.jpg")}/>
        </div>
        <div className={Styles.column}>
            <img src={require(`../../images/ec.jpg`)} alt="Nature6" onClick={()=>this.goToSlide("ec.jpg")}/>
        </div>
        <div className={Styles.column}>
            <img src={require(`../../images/ec.jpg`)} alt="Nature7" onClick={()=>this.goToSlide("ec.jpg")}/>
        </div>                       
      </div>
      <div className={Styles.container} id="prnt">
        <span onClick={()=> document.getElementById("prnt").style.display='none'} className={Styles.closebtn}>&times;</span>
        <img id="expandedImg" style={{width: "100%"}} alt="main" />
        <div id="imgtext"></div>
      </div>
      </>
    )
  }
}
export default galleryt