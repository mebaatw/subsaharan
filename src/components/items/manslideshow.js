import React, { Component } from 'react';
import Styles from "./manslideshow-css-modules.module.css";

class manslideshow extends Component {
    constructor(props){
        super(props)

        this.state = {
            slideIndex: 0
        };

        this.showDivs = this.showDivs.bind(this);
        this.plusDivs = this.plusDivs.bind(this);
    }

    componentDidMount(){
       // this.setState({slideIndex: 1})
        this.showDivs();
    }

    showDivs(){
        //console.log("slideIndex*********",this.state.slideIndex);
        //console.log("nnnnnnnnnn****",n);
        
        var i;
        var x = document.getElementsByClassName("mySlides");
        //console.log("x.length****",x.length);
        //console.log("X -->****",x);
        if (this.state.slideIndex >= x.length) {
            
            this.setState({slideIndex: 1})
          //  console.log("slideIndex reset****",this.state.slideIndex);
        }
        if (this.state.slideIndex < 1) {this.setState({slideIndex: x.length})}
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
        }

        if( x.length===1){
            this.setState({slideIndex: 0});
            x[0].style.display = "block";
        }
        else if(x[this.state.slideIndex-1] ===undefined){
            x[this.state.slideIndex].style.display = "block"; 
            this.setState({slideIndex: 2});
            //console.log("undefined*********",this.state.slideIndex);
        }else{
            x[this.state.slideIndex-1].style.display = "block";  
            //console.log("slideIndex*********",this.state.slideIndex);
        }
 
    }

    plusDivs() {
        //console.log("plusDivs****",f);
        this.showDivs(this.setState({slideIndex: this.state.slideIndex + 1}));
      }

    render(){
        const {  slides } = this.props;
        return(
            <>
            <div className={Styles.container}>
                {
                    slides.map((item,i) =>{
                        return(
                            <>
                            <span key={i} >
                                <iframe style={{width: "60%", height: "100%",  display: 'none', marginLeft: "auto",  marginRight: "auto"}}
                                    className="mySlides"
                                    src={item.url} 
                                    title={item.title}
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen>
                                </iframe>
                            </span>
                            </>
                        );
                    })
                }


                <button className={Styles.displayleft} onClick={()=>this.plusDivs()}>&#10094;</button>
                <button className={Styles.displayright} onClick={()=>this.plusDivs()}>&#10095;</button>
            </div>
            </>
        )
    }
}

export default manslideshow