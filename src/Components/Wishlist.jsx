import React, { useEffect, useState } from "react";
import { myContext } from "../App";
import { useContext } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { GrFavorite } from "react-icons/gr";
import StarRating from "../Components/StarRating";
import { useNavigate } from "react-router-dom";

function Wishlist() {
  const navigate = useNavigate();
  const { wishlist, setWishlet, setModal, setShow, loginUser ,addToCart} =
    useContext(myContext);
  const [totalAmount, setTotalAmount] = useState([]);
  const [totalQty, setTotalQty] = useState([]);

  

  

  useEffect(() => {
    let price = 0;
    let qty = 0;
    wishlist.forEach((e) => {
      price = price + e.Price;
      
    });
    setTotalAmount(price);

    setTotalQty(qty);
  }, [wishlist, totalAmount]);

  const values = [];

  const addQuantity = (e) => {
    wishlist.forEach((element) => {
      if (element.id == e.target.id) {
        element.Quantity = Number(e.target.value);
      }
      values.push(element);
    });
    updateWishlist();
  };
  const deleteQuantity = (id) => {
    setWishlet(wishlist.filter((e) => e.id !== id));
  };
  
  const handleEnlargeImage = (id) => {
    const prod = wishlist.filter((e) => e.id === id);

    setModal(prod);
    setShow(true);
  };

  const updateWishlist = () => setWishlet(values);

  return (
    <>
      <div className="d-flex">
        <Card
          style={{ width: "270px", height: "270px" }}
          className="m-5 p-3 bg-dark-subtle text-center overflow-auto"
        >
          <p className="fs-3">Your Wishlist</p>
          {/* <h4>Total: {totalAmount}</h4> */}
         
          
          <Button
            variant="primary"
            className="m-3"
            onClick={() => navigate("/products")}
          >
            {" "}
            keep shopping
          </Button>
          
        </Card>

        <Container className="d-flex justify-content-center gap-3 flex-wrap h-150 ">
          {loginUser?.wishlist?.map((item, index) => (
            <div
              style={{
                margin: "50px 0 50px ",
                width: "300px",
                Height: "200px",
              }}
              key={index}
            >
              <Card className="shadow mb-3 h-100">
                <div className="card-image-container h-50">
                  <Card.Img
                    variant="top"
                    src={item.Image}
                    className="card-image"
                  />
                </div>
                <Card.Body style={{height:"250px"}}>
                  <Card.Title className="ms-4">Model: {item.Model}</Card.Title>
                  <Card.Text className="ms-4">
                    Price: <strong>₹</strong> {item.Price}
                  </Card.Text>
                  
                  <Button
                    onClick={() => deleteQuantity(item.id)}
                    variant="danger"
                    className=" m-4"
                  >
                    Remove from Wishlist
                  </Button>
                  <div >
                  <Button
                    variant="success"
                    className="m-5 mt-0"
                    onClick={() => addToCart(item.id, item.Model, item.Price, item.Image)}
                  >
                    {" "}
                  <h4 style={{textAlign:'center'}}>Add to Cart</h4>
                 </Button>
                  </div>    
                </Card.Body>
              </Card>
            </div>
          ))}
        </Container>
      </div>
    </>
  );
}

export default Wishlist;
