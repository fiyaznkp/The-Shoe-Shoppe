import React, { useContext } from 'react'
import { useState } from 'react'
import { myContext } from '../../App'
import { Button } from 'react-bootstrap';


const DeleteProduct = () => {
  const [products, setProducts] = useContext(myContext);

  const deleteProduct = (productId) => {
    
    
  };

  return (
    <div>
    <Button>Delete</Button>
    </div>
  );
};

export default DeleteProduct;