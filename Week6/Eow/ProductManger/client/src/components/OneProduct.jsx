import React, {useState,useEffect} from "react";
import axios from 'axios'
import { useParams,useNavigate } from "react-router-dom";

const OneProduct = (props) => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [Product,setProduct] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneproduct/${id}`)
            .then((res) => {
                console.log(res.data)
                setProduct(res.data)
            })
            .catch((err) =>{
                console.log(err);
            })
    }, [])

    const deleteHandler = () =>{
        axios.delete(`http://localhost:8000/api/deleteproduct/${id}`)
            .then((res) => {
                navigate('/')
            })
            .catch((err) =>{
                console.log(err);
            })
    }


    return(
        <div>
            <h2>{Product.productname}</h2>
            <h3>${Product.productprice}</h3>
            <p>{Product.productdescription}</p>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    )
}

export default OneProduct