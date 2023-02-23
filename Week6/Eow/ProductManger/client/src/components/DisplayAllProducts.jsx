import React, { useState, useEffect } from "react";
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useParams,useNavigate } from "react-router-dom";

const DisplayAllProducts = (props) => {
    const {allProducts,setallProducts} = props
    const navigate = useNavigate()
    const {id} = useParams()
    useEffect(() => {
        axios.get('http://localhost:8000/api/allproduct')
            .then((allProducts) => {
                console.log(allProducts);
                setallProducts(allProducts.data)
            })
            .catch((err) => {
                console.log(err);
            })
    },[])

    //  when passing e need to change E to varios match the axios
    const deleteHandler = (id) =>{
        console.log(id)
        axios.delete(`http://localhost:8000/api/deleteproduct/${id}`)
            .then((res) => {
                navigate('/')
            })
            .catch((err) =>{
                console.log(err);
            })
    }



    return(
        <div>``
            <h2>Display Products</h2>
            {
                allProducts.map((product) =>(
                    <div className="border" key={product._id}>
                        <h2>{product.productname}</h2>
                        <p>Price: '${product.productprice}'</p>
                        <p>Desriptsion: {product.productdescription}</p>
                        <Link to={`/oneproduct/${product._id}`}>Detail</Link>
                        <Link to={`/updateproduct/${product._id}`}>Edit</Link>
                        <Link onClick={(e) => {deleteHandler(product._id)}}>Delete</Link>
                    </div>
                ))
            }
        </div>
    )
}

export default DisplayAllProducts