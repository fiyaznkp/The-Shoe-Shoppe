import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import AllProducts from '../../../AllProducts'
import { useNavigate } from 'react-router-dom'
import Example from '../../../Components/ImageEnlarge'
import StarRating from '../../../Components/StarRating'
import { myContext } from '../../../App'
import UpdateModal from './UpdateModal'

const AdminProduct = ({children}) => {
  const {cart, setCart, login, setLogin,filterValue,setFilterValue, searchValue,setSearchValue,product,setProduct,searchBackup,setSearchBackup} = useContext(myContext)
  const navigate = useNavigate()
  const [showUpdate, setShowUpdate] = useState(false)
  const [modal,setModal] = useState([])
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [updateData,setUpdateData] = useState([])

  const handleFilter = (value)=>{
    if(value!="allProducts"){
      // console.log(value)
      const filter= searchBackup.filter((e)=> e.Brand==value )
      setProduct(filter)

    }else{
      setProduct(searchBackup)
    }
  }
  const handleEnlargeImage = (id)=>{
    const prod = product.filter((e)=>e.id === id)
    
    setModal(prod)
    setShow(true)
  }
  const handleSearch = (value)=>{
    
    if(typeof value === 'string' && value.length > 0){
     const search = searchBackup.filter((e)=>e.Brand.toLowerCase().includes(value.toLowerCase()))
     setProduct(search)
    }else{
     setProduct(searchBackup)
    }
  }
  const handleDelete = (id)=>{
    const newArray = product.filter((pro)=>pro.id !=id)
    setProduct(newArray)
    
    
  }
  const handleUpdate = (item)=>{
    setShowUpdate(true)
    setUpdateData(item)

    
  }
  useEffect(()=>{
   handleSearch(searchValue)
   // console.log("useEffect Test");
  },[searchValue])

  
  return (
    <>
<div className='mt-4 mx-5 d-flex justify-content-between'><AllProducts handleFilter={handleFilter}/> {children}</div>
    <Container>
    <UpdateModal handleClos={handleClose} data = {[showUpdate,setShowUpdate,handleClose,handleShow,updateData,setUpdateData]} />
    
      <div className='d-flex flex-wrap justify-content-center  my-4 g-5'>
      <Example  showModal={show} setShowModal={setShow} data={modal}/>
        {product?.map((item, index) => 
          
          
          {
            
           return (<div  className='mx-4 my-3 h-100'  key={item.id}>
            <Card style={{width:"300px", height:"600px" ,boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"}} >
              <div style={{height:"250px", width:"250px"}}  className="card-image-container">
                <Card.Img
                  variant="top"
                  src={item?.Image}
                  className="card-image"
                  onClick={()=>handleEnlargeImage(item.id)}
                />
                
                {/* <Example img = {item.Image} showModal={show} setShowModal={setShow} name={item.Model}/> */}
              </div>
              <Card.Body >
                <Card.Title>{item?.Brand}</Card.Title>               
                <Card.Title> {item?.Model}</Card.Title>
                
                <p className='p-0 m-0'>Size: {item.AvailableSizes.toString()}</p> 
                <p className='p-0 m-0'>Color: {item?.color}</p>
                <p className='p-0 m-0'>Reviews:{item?.reviews}</p>
                <p className='p-0 m-0'>Ratings:<StarRating rating={item?.ratings}></StarRating></p>
                <Card.Text>Price: <strong>₹</strong> {item?.Price}</Card.Text>
                <Button variant='danger' className='me-2' onClick={()=>handleDelete(item.id)}> Delete</Button>
                <Button className='secondary' onClick={()=>handleUpdate(item)}> Update</Button>
                {/* <Button className='secondary'> Add to Cart</Button> */}

              </Card.Body>
            </Card>
          </div>)}
          
        )}

      </div>
    </Container>
    </>
  )
}

export default AdminProduct