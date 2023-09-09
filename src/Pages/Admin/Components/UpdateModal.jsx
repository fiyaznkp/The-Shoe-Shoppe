import React, { useContext } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { myContext } from '../../../App';


const UpdateModal = ({data,handleClos}) => {
//  const [updateData,setUpdateData] = useState([])
 const[showUpdate,setShowUpdate,handleClose,handleShow,updateData,setUpdateData] = data
 console.log(handleClos,"assjhdkasjhdkj");
 const {product,setProduct,searchBackup,setSearchBackup} = useContext(myContext)
 const [previewImage, setPreviewImage] = useState(null);


 const handleUpdate = (e)=>{
    e.preventDefault()
    const prodObj = {
    
    Model:e.target.model.value,
    AvailableSizes:e.target.size.value.split(','),
    color:e.target.color.value,
    Price:e.target.price.value,
    Image:previewImage
    }
console.log(e,"eeeeeeeeeee");
  const updatedProduct = product.find(p=>p.id==updateData.id);   
  updatedProduct.Model=prodObj.Model
  updatedProduct.AvailableSizes=prodObj.AvailableSizes
  updatedProduct.color=prodObj.color
  updatedProduct.Price=prodObj.Price
  updatedProduct.Image=prodObj.Image

//   handleClose()
  setShowUpdate(false)
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
    <div>
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={showUpdate} onHide={setShowUpdate}>
        <Modal.Header closeButton>
          <Modal.Title>Update Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdate}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Model</Form.Label>
              <Form.Control
                type="text"
                name="model"
                placeholder="name@example.com"
                autoFocus
                defaultValue={updateData.Model}
              />
              
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Available Sizes</Form.Label>
              <Form.Control
                type="text"
                placeholder="name@example.com"
                name="size"
                autoFocus
                defaultValue={updateData.AvailableSizes}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="name@example.com"
                autoFocus
                name="price"
                defaultValue={updateData.Price}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>color</Form.Label>
              <Form.Control
                type="text"
                placeholder="name@example.com"
                autoFocus
                name="color"
                defaultValue={updateData.color}
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>color</Form.Label>
              <Form.Control
                type="file"
                placeholder=""
                autoFocus
                name="image"
                onChange={handleImageChange}
                // defaultValue={updateData.Image}
              />
            </Form.Group>
            
            <Button variant="secondary" onClick={()=>setShowUpdate(false)}>
            Close
          </Button>
          <Button type='submit'  variant="primary" >
            Save Changes
          </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>
    </>



    </div>
  )
}

export default UpdateModal