import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example({data, showModal,setShowModal}) {
  console.log(data);
  // const [show, setShow] = useState(false);
  

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
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;