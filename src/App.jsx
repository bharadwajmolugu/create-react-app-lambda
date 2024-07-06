import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {BrowserRouter,Routes,Route} from 'react-router-dom';



import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/signUp';
import Products from './components/Products/Products';
import Eachproduct from './components/Products/EachProduct';
import PageNotFound from './components/PageNotFound/PageNotFound';




const App=()=>{

  const [products,setProducts]=useState([]);


  useEffect(()=>{
    const data=async()=>{
      const allProducts=await axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline');
      
      setProducts(allProducts.data)
    }
    data();
  },[])









  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/products' element={<Products products={products}/>}/>
        <Route path= '*' element={<PageNotFound/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App;