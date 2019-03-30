import React, { Component } from 'react';
//import Styles from "./video-gallery-css-modules.module.css"
import Scroll from "./scroll"


class videogallery extends Component{
  constructor(props){
    super(props)

    this.state ={
     // imag:[],
     // isToggleOn: true,
      //value: ''
    }
    
  }


  render(){
    //const {  imgSharp } = this.props;

    return(
      
<Scroll>
<div >
<iframe width="560" height="315" src="https://www.youtube.com/embed/ROqDTIxRX0Y" frameborder="0" allowfullscreen title="myFrame1"></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/9iGoDNlKY-g" frameborder="0" allowfullscreen title="myFrame2"></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/l70UhhNalqA" frameborder="0" allowfullscreen title="myFrame3"></iframe>


 
</div>
</Scroll>

     
    )
  }
}
export default videogallery