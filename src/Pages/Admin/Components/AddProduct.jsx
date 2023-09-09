import React, { useState } from 'react'
import { useContext } from 'react'
import { myContext } from '../../../App'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
  const navigate = useNavigate()
  const {product,setProduct,searchBackup,setSearchBackup} = useContext(myContext)
  const [previewImage, setPreviewImage] = useState(null);
  const handleSubmit =(e)=>{

    e.preventDefault()
    const prodObj = {
      id:Date.now(),
      Brand:e.target.brand.value,
      Model:e.target.model.value,
      AvailableSizes:e.target.size.value.split(','),
      color:e.target.color.value,
      Price:e.target.price.value,
      Image:previewImage
    }
    console.log(prodObj);
    setProduct([...product,prodObj])
    setSearchBackup([...product,prodObj])
    navigate('/adminhome')
    
    
    
  }
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPreviewImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  console.log(product,"newwwww")
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' name='model' placeholder='enter the name of product'/><br/>
        <input type='text' name='brand' placeholder='enter the brand of product'/><br/>
        <input type='number' name='price' placeholder='price of product'/><br/>
        <input type='text' name='size' placeholder='enter the sizes of product'/><br/>
        <input type='text' name='color' placeholder='enter the color of product'/><br/>
        <input type='file' name='image' placeholder='select the image' accept='image/*' onChange={handleImageChange}/><br/>
        {/* <input type='text' name='imgURL' placeholder='place the image url'/> <br/> */}
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default AddProduct