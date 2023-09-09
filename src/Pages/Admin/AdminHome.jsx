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


const AdminHome = () => {
    const navigate = useNavigate()
    const handleNavigateAddProduct =()=>{
        navigate('/addproduct')
    }
  return (
    <div>
    <AdminProduct>
      <Button onClick={handleNavigateAddProduct}>Add Product</Button>

    </AdminProduct>
    </div>
  )
}

export default AdminHome