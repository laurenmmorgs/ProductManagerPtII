import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'



const OneProduct = (props) => {


   const [product, setProduct] = useState({})
    const {id} = useParams()
    console.log(id);


   useEffect(() => {
      axios.get("http://localhost:8000/api/" + id)
          .then((res) => {
              console.log(res.data);
              setProduct(res.data.product)
          })
          .catch((err) => {
              console.log(err);
          })
  },[])
  
  return (
   <div className='container text-center'>
      <p> Title: {product.title} </p>
      <p> Price: {product.price} </p>
      <p> Description: {product.description} </p>
   </div>
    )
}


export default OneProduct;