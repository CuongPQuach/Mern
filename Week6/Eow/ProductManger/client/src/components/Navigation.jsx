import React,{useState,useEffect} from "react";
import {Link} from 'react-router-dom'
const Nav = (props) =>{
    return(
        <div >
            <h1>Product Managent Project</h1>
            <Link to={'/allproduct'}> Display All Product</Link>
            <Link to={'/'}> Home</Link>
        </div>
    )
}

export default Nav