import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Edit = (props) => {
    const navigate = useNavigate()
    const [errors,setErrors] = useState({})
    const {id} = useParams()
    const [Product,setProduct] = useState({
        productname:'',
        productprice:0,
        productdescription:''
    })

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneproduct/${id}`)
            .then((res) => {
                console.log(res.data)
                setProduct(res.data)
            })
            .catch((err) =>{
                console.log(err);
            })
    },[])


    const OnChangeHandler = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        setProduct({ ...Product, [e.target.name]: e.target.value })
    }

    const OnSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/updateproduct/${id}`, Product)
            .then((res) => {
                console.log('Hererexxxxxxx')
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
                // console.log(err.response.data.error.errors)
                setErrors(err.response.data.error.errors)
            })
    }

    return (
        <div>
            <form onSubmit={OnSubmitHandler}>
                <label>Product Name:</label>
                <input type="text" onChange={OnChangeHandler} value={Product.productname} name="productname" />
                {
                    errors.productname ?
                        <p className="text-danger">{errors.productname.message}</p> :
                        null
                }
                <label>Product Price:</label>
                <input type="Number" onChange={OnChangeHandler} value={Product.productprice} name="productprice" />
                {
                    errors.productprice ?
                        <p className="text-danger">{errors.productprice.message}</p> :
                        null
                }
                <label>Product Description:</label>
                <input type="text" onChange={OnChangeHandler} value={Product.productdescription} name="productdescription" />
                {
                    errors.productdescription ?
                        <p className="text-danger">{errors.productdescription.message}</p> :
                        null
                }
                <br />
                <button>Changing Product</button>

            </form>
        </div>
    )



}

export default Edit