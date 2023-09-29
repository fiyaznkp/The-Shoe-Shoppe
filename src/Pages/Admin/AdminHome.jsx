import React from 'react'
import { useNavigate } from 'react-router-dom'
import { products } from '../../../public/products'
import { useState,useContext,useEffect } from 'react'
import StarRating from '../../Components/StarRating'
import AllProducts from '../../AllProducts'
import { myContext } from '../../App'
import AddProduct from './Components/AddProduct'
import DeleteProduct from './DeleteProduct'
import UpdateProducts from './UpdateProducts'
import AdminProduct from './Components/AdminProduct'
import { Button } from 'react-bootstrap'
import Sidebar from '../../Components/Sidebar'





const AdminHome = () => {
    const navigate = useNavigate()
    const handleNavigateAddProduct =()=>{
        navigate('/addproduct')
    }
  return (

    <div className='row col-12 mt-3 ms-3'>
    <div className='col-1'>
      <Button onClick={handleNavigateAddProduct}>Add Product</Button>

    </div>
    <div className='col-9'>
      <AdminProduct/>
    </div>
    <div className='col-2'>  
      <Sidebar isAdmin={true}
      
      />
   
    </div>
    </div>
    
  )
}

export default AdminHome