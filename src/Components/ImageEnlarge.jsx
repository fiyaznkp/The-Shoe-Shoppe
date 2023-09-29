import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import StarRating from './StarRating';
import { Card } from 'react-bootstrap';


function Example({data, showModal,setShowModal}) {
  
  // const [show, setShow] = useState(false);
  console.log(data,'qwertyu')
  

  return (
    <>
      

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        dialogClassName="modal-50w"
        aria-labelledby="example-custom-modal-styling-title"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={data[0]?.Image} style={{width:"100%"}}/>

          <p className='p-0 m-0'>Size: {data[0]?.AvailableSizes.toString()}</p> 
                <p className='p-0 m-0'>Color: {data[0]?.color}</p>
                <p className='p-0 m-0'>Reviews:{[data[0]]?.reviews}</p>
                <p className='p-0 m-0'>Ratings:<StarRating rating={data[0]?.ratings}></StarRating></p>
                <Card.Text>Price: <strong>₹</strong> {data[0]?.Price}</Card.Text>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;