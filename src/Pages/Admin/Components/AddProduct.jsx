import  { useState } from 'react'
import { useContext } from 'react'
import { myContext } from '../../../App'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'

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
  
  return (
    <div style={{height:"88vh"}} className='d-flex justify-content-center align-items-center '>
      <form style={{width:"400px",  boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"}} className='d-flex flex-column gap-1 p-5 border-1 rounded-3' onSubmit={handleSubmit}>
        <input type='text' name='model' placeholder='Enter the name of product'/><br/>
        <input type='text' name='brand' placeholder='Enter the brand of product'/><br/>
        <input type='number' name='price' placeholder='Price of product'/><br/>
        <input type='text' name='size' placeholder='Enter the sizes of product'/><br/>
        <input type='text' name='color' placeholder='Enter the color of product'/><br/>
        <input type='file' name='image' placeholder='Select the image' accept='image/*' onChange={handleImageChange}/><br/>
        {/* <input type='text' name='imgURL' placeholder='place the image url'/> <br/> */}
        <Button type='submit' className='bg-primary'>submit</Button>
      </form>
    </div>
  )
}

export default AddProduct