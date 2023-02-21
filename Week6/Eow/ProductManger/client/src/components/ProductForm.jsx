import React, {useState,useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const ProductForm = (props) => {
    const navigate = useNavigate ()
    const {allProducts,setallProducts} = props
    const [errors,setErrors] = useState({})
    const [Product,setProduct] = useState({
        productname:'',
        productprice:0,
        productdescription:''
    })

    const OnChangeHandler = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        setProduct({...Product, [e.target.name]: e.target.value})
    }

    const OnSubmitHandler = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/postproduct', Product)
            .then((res) => {
                console.log('Hererexxxxxxx')
                setallProducts([...allProducts,res.data])
                navigate('/')
            })
            .catch((err) =>{
                console.log(err)
                console.log(err.response.data.error.errors)
                setErrors(err.response.data.error.errors)
            })
    }

    return(
        <div>
            <form onSubmit={OnSubmitHandler}>
                <label>Product Name:</label>
                <input type="text" onChange={OnChangeHandler} value={Product.productname} name="productname"/>
                {
                    errors.productname?
                    <p className="text-danger">{errors.productname.message}</p>:
                    null
                }
                <label>Product Price:</label>
                <input type="Number" onChange={OnChangeHandler} value={Product.productprice} name="productprice"/>
                {
                    errors.productprice?
                    <p className="text-danger">{errors.productprice.message}</p>:
                    null
                }
                <label>Product Description:</label>
                <input type="text" onChange={OnChangeHandler} value={Product.productdescription} name="productdescription"/>
                {
                    errors.productdescription?
                    <p className="text-danger">{errors.productdescription.message}</p>:
                    null
                }
                <br/>
                <button>Create Product</button>
                
            </form>
        </div>
    )
}


export default ProductForm