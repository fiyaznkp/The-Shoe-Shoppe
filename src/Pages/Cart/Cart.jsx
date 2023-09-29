import React, { useContext, useEffect, useState } from "react";
import { Button, Card, CardGroup, Container } from "react-bootstrap";
import { myContext } from "../../App";
import { useNavigate } from "react-router-dom";
import Wishlist from "../../Components/Wishlist";

function Cart() {
  const navigate = useNavigate();
  const { cart, setCart,loginUser } = useContext(myContext);
  const [totalAmount, setTotalAmount] = useState([]);
  const [totalQty, setTotalQty] = useState([]);

  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    let price = 0;
    let qty = 0;
    loginUser.cart.forEach((e) => {
      price = price + e.Price * e.Quantity;
      qty = qty + e.Quantity;
    });

    setTotalAmount(price);
    setTotalQty(qty);
  }, [cart, totalAmount]);

  const data = [];

  const handleQuantity = (e) => {
    cart.forEach((element) => {
      if (element.id == e.target.id) {
        element.Quantity = Number(e.target.value);
      }
      data.push(element);
    });

    setTrigger(!trigger);
    updateCart();
  };

  const handleRemove = (id) => {
    setCart(cart.filter((e) => e.id != id));
  };
  //new line
  const placeOrder = () => {
    console.log(loginUser,"loginuser");
    if (loginUser.length===0) {
      window.alert("Please login before placing an order!");
      navigate("/");
      return;
    }
    else if (cart.length > 0) {
      window.alert("Your order is placed successfully ");
      setCart([]);
    } else {
      window.alert("Your Cart is Empty!, Add Product to cart.");
      navigate("/products");
    }

    navigate("/products");
  };

  const updateCart = () => setCart(data);

  return (
    <>
      <div className="d-flex ">
        <Card
          style={{ width: "270px", height: "350px" }}
          className="m-5 p-3 bg-dark-subtle text-center overflow-auto"
        >
          <p className="fs-3">Your Cart</p>
          <h4>Total: {totalAmount}</h4>
          <p>Total Qty: {totalQty}</p>
          <Button
            variant="primary"
            className="m-3"
            onClick={() => navigate("/products")}
          >
            {" "}
            keep shopping
          </Button>
          <Button
            variant="success"
            className="m-3 mt-0"
            onClick={() => placeOrder()}
          >
            {" "}
            Place Order
          </Button>
        </Card>

        <Container className="d-flex justify-content-center gap-3 flex-wrap ">
          {loginUser.cart?.map((item, index) => (
            <div
              style={{
                margin: "50px 0 50px ",
                width: "300px",
                minHeight: "350px",
              }}
              key={index}
            >
              <Card className="shadow mb-3 h-100">
                <div className="card-image-container">
                  <Card.Img
                    variant="top"
                    src={item.Image}
                    className="card-image"
                  />
                </div>
                <Card.Body>
                  <Card.Title>Model: {item.Model}</Card.Title>
                  <Card.Text>
                    Price: <strong>₹</strong> {item.Price}
                  </Card.Text>
                  <input
                    id={item.id}
                    onChange={handleQuantity}
                    type="number"
                    defaultValue={item.Quantity}
                    min={1}
                    max={5}
                  ></input>
                  <Button
                    onClick={() => handleRemove(item.id)}
                    variant="danger"
                    className=" m-4"
                  >
                    Remove
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Container>
      </div>
    </>
  );
}

export default Cart;
