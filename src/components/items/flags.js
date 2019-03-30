import React, { Component } from 'react';
import SearchBox from './searchbox';
import { Link } from 'gatsby'
import styles from "./flags-css-modules.module.css"

const c_flags=require("../../json/flags.json");

class flags extends Component{
    constructor(){
        super()
        this.state ={
            country_flags: [],
            searchfield:'' 
        }
    }

    componentDidMount(){
        this.setState({country_flags: c_flags});
    }

    onSearchChange= (event)=>{
		this.setState({searchfield:event.target.value});
    }
    
    render(){
        const{country_flags, searchfield } = this.state;

        const filteredflags = country_flags.filter(flag =>{
            return flag.name.toLowerCase().includes(searchfield.toLowerCase());
        });

        return(
            <>
                <SearchBox searchChange={this.onSearchChange} />
                <p/>
                <div className={styles.row}> 
                {
                    filteredflags.map((flag,i)=>{
                        return ( 
                            
                                <div className={styles.column} key={i} >
                                    <div className={styles.card}>
                                        <Link to={`${flag.name}`}>
                                            <img  src={require(`../../images/flags/${flag.code}.${flag.ext}`)} alt={flag.name} />
                                        </Link>	
                                        
                                            <b>{flag.name}</b>   
                                        
                                    </div>
                                    <p/>
                                </div> 
                            
                        );

                    })
                }
                </div> 
            </>
        );
    }

}
export default flags;