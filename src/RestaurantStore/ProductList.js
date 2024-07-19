import React from "react";


import './Products.css';                     //custom css file imported

const ProductList = (prodlist) => {         //functional component that accepts the products data passed to it

                                            //custom method, called from the view in the Render()  below
    const renderList = ({prodlist}) => {    //temp argument that receives the data passed to this component by Products Component
         
        if(prodlist){                       //if data exists
            return prodlist.map((data) => { //map() function iteratively executes once for each record, in the json data
                return(
                    <div key={data.id} className="card col-md-3">
                        <div className="row">
                            <div className="card-img">
                            <img className="card-img-top" src={data.img} alt={data.name}/>
                            </div>
                            
                            <span className="topTemp">{data.name}</span>
                            </div>
                            <div className="card-body">
                            <span className="max">Rs. {data.price}</span>  
                                <h4 className="card-title">{data.category}</h4>
                                <div className="card-text">
                                    <p className="day"> {data.description}</p>
                                </div>
                        </div>
                    </div>
                )  
            })
        }  
    }
    return(
        <div className="container">
            <div  className="row">
                {renderList(prodlist)}  {/* Calls the above custom function to render the data in the view */}
            </div>
        </div>
    )
}

export default ProductList;