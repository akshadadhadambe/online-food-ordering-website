import React, {Component} from 'react';

import JSON from './Zomato.json';        //ref to the db.json data file
import ProductList from './ProductList';

class Products extends Component {
    constructor(){
        super();
        this.state ={                 //state
            title: 'Products Page',   //props
            products: JSON            //asign the db.json data file to the prop
        }
    }
    render(){
          return(
            <div>
                <h2>{this.state.title}</h2>
                <ProductList prodlist={this.state.products}/>  {/*pass data from .json file to ProductList component prop  */}
            </div>
        )
    }
}

export default Products;