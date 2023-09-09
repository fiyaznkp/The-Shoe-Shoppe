// import React from 'react'
// import legwork from '../../public/Pics/Legwork.jpg'
// import './products.css'
import { products as productList } from '../../public/products'
import { Button, Card, Container } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
// import myContext from '../Context/Context';
import { useNavigate } from 'react-router-dom';
import StarRating from '../Components/StarRating';
 import AllProducts from '../AllProducts';
import { myContext } from '../App';
import Example from '../Components/ImageEnlarge';



function Products() {
  const [modal,setModal] = useState([])
  const {cart, setCart, login, setLogin,filterValue,setFilterValue, searchValue,setSearchValue,product,setProduct,searchBackup,setSearchBackup} = useContext(myContext)
  const navigate = useNavigate()
  const [show, setShow] = useState(false)
  const handleEnlargeImage = (id)=>{
    const prod = product.filter((e)=>e.id === id)
    console.log(prod,"5465465465");
    setModal(prod)
    setShow(true)
  }

  

  

  
  // console.log(cart,"cart in productPage");
  // console.log(searchValue,"searchValueinProducts");
  // console.log(product,'product in product page');
  // const [searchQuery,setSearchQuery] =useState([])

 
  const addToCart = (id, Model, Price,Image) => {
    const product = {
      id: id,
      Model: Model,
      Price: Price,
      Quantity:1,
      Image:Image
    }
    const existingProduct = cart.filter((e)=>e.id===id)

    if(existingProduct.length>0){
      window.alert("Product already exists in cart please add more quantity")
      navigate("/cart")
    }else{ 
      setCart([...cart, product])
      window.alert("Product added to Cart")
    }

   
  }

  
  const handleFilter = (value)=>{
    if(value!="allProducts"){
      // console.log(value)
      const filter= searchBackup.filter((e)=> e.Brand==value )
      setProduct(filter)

    }else{
      setProduct(searchBackup)
    }
  }


  const handleSearch = (value)=>{
     console.log(value,"handle search");
     if(typeof value === 'string' && value.length > 0){
      const search = searchBackup.filter((e)=>e.Brand.toLowerCase().includes(value.toLowerCase()))
      setProduct(search)
     }else{
      setProduct(searchBackup)
     }
   }
   useEffect(()=>{
    handleSearch(searchValue)
    // console.log("useEffect Test");
   },[searchValue])
  // console.log(cart);
  // console.log(product,'product in product page2');
  return (

<>
<div className='mt-4 ms-3'><AllProducts handleFilter={handleFilter}/></div>
    <Container>
    
      <div className='d-flex flex-wrap justify-content-center  my-4 g-5'>
      <Example  showModal={show} setShowModal={setShow} data={modal}/>
        {product?.map((item, index) => 
          
          
          {
            {/* console.log(item,"utem"); */}
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
                <Button className='secondary' onClick={() => addToCart(item.id, item.Model, item.Price, item.Image)}> Add to Cart</Button>
              </Card.Body>
            </Card>
          </div>)}
          
        )}

      </div>
    </Container>
    </>
  )
}

export default Products