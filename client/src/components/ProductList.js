import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


const ProductList = (props) => {
   
   const {productList, setProductList} = props;

   useEffect(() => {
      axios.get('http://localhost:8000/api/allProducts')
          .then((response) => {
              console.log("THIS IT THE RESPONSE!" , response.data.products);
              setProductList(response.data.products)
          })
          .catch((err) => {
              console.log(err);
          })
  }, [])

  console.log(productList)
  return (
     <div className='container text-center'>
      <h1> Products </h1>

            {
               productList.map((product, index) =>
                  <div key={index} >
                     <Link className='link link-primary' to={`/${product._id}`}>{product.title}</Link>
                  </div>
               )
            }

   </div>
    )
}


export default ProductList;