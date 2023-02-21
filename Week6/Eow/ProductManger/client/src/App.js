import './App.css';
import axios from 'axios'
import {useState,useEffect} from 'react'
import DisplayAllProducts from './components/DisplayAllProducts';
import Nav from './components/Navigation';
import ProductForm from './components/ProductForm';
import{Routes, Route} from 'react-router-dom'
import OneProduct from './components/OneProduct';
import Edit from './components/ProductEdit';


function App() {
  const [allProducts,setallProducts] = useState([])
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<ProductForm allProducts={allProducts} setallProducts={setallProducts}/>}/>
        <Route path='/allproduct' element={<DisplayAllProducts allProducts={allProducts} setallProducts={setallProducts}/>}/>
        <Route path='/oneproduct/:id' element={<OneProduct/>}/>
        <Route path='/updateproduct/:id' element={<Edit/>}/>
      </Routes>
    </div>

  );
}

export default App;
