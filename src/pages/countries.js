import React, { Component }  from "react"
import SearchBox from '../components/items/searchbox';
import Layout from "../components/layout"
import Card from "../components/items/card"
import { Link, graphql } from 'gatsby'


class countries extends Component {
    constructor(props){
        super(props)
        this.state = {
            searchfield:'' 
          }
    }

    onSearchChange= (event)=>{
		this.setState({searchfield:event.target.value});
    }
   render(){ 
        const{ searchfield } = this.state;
        const {  data } = this.props;

        const filteredflags = data.allMarkdownRemark.group.filter((g) =>{
            return g.fieldValue.toLowerCase().includes(searchfield.toLowerCase());
          });

        return (
            <Layout>
                cat
                <SearchBox searchChange={this.onSearchChange} />
                <p/>
                {
                    filteredflags.map((g,i)=>{
                            return(
                                <div key={i}>
                                    <Link  to={g.fieldValue}>
                                        <Card  name= {g.fieldValue}/>
                                    </Link>
                                    <p/>
                                </div>
                            );
                        })
                    }
            
            </Layout>
        )
    }
}
export default countries

 export const query = graphql`
   query {
     allMarkdownRemark(filter: {frontmatter: {country: {ne: "NA"}}}) {
         group(field: frontmatter___country) {
           fieldValue
           totalCount
         }
       }
   }
 `