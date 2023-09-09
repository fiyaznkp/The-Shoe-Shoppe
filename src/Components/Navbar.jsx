import React, { useContext, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShoppingCart } from "@phosphor-icons/react";
import "./Navbar.css";
import { Button } from "react-bootstrap";
import { myContext } from "../App";
import Badge from "react-bootstrap/Badge";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";

import Modal from "react-bootstrap/Modal";

function Navbar({ handleChangeSearch }) {
  const {
    cart,
    setCart,
    login,
    setLogin,
    searchValue,
    setSearchValue,
    trigger,
  } = useContext(myContext);
  const [adminLogin, setAdminLogin] = useState();
  useEffect(() => {
    const admin = localStorage.getItem("AdminLogin");
    setAdminLogin(admin);
    console.log(admin, "asdasda");
  }, [trigger]);

  // console.log(searchValue,"searchVlaue");
  const navigate = useNavigate();

  useEffect(() => {
    console.warn(searchValue, "kona");
  }, [searchValue]);
  const handleChange = (e) => {
    // setSearchValue(e.target.value)
    setSearchValue(e.target.value);
    console.warn(searchValue, "targetValue");
  };

  const handleLogout = () => {
    setCart([]);
    localStorage.setItem("login", false);
    localStorage.setItem("AdminLogin", false);
    setShow(false);
    navigate("/");
  };

  // console.log(searchValue,"searchVlaue");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(adminLogin == "true", "navabr check");
  return (
    <div>
      <div className="navbar">
        <div className="ShopTitle ms-5">
          <h1
            style={{
              color: "whitesmoke",
              alignItems: "center",
              textAlign: "center",
              margin: 0,
            }}
          >
            The Shoe Shoppe
          </h1>
          <div className="quote">Shoes for Real Men!</div>
        </div>
        <div className="d-flex me-5">
          {adminLogin == "true" ? (
            <div className="d-flex align-items-center">
              <NavLink to={"/admin-view-products"}>Products</NavLink>
            </div>
          ) : (
            <div className="d-flex align-items-center">
              <NavLink to={"/products"}>Products</NavLink>
            </div>
          )}
          <div className="d-flex align-items-center ms-3">
            <input
              type="text"
              placeholder="🔍enter your search "
              className="hoverable"
              onChange={handleChange}
            />
          </div>
          {adminLogin == "true" ? (
            <div className="d-flex align-items-center">
              <NavLink to={"/users"}>Users</NavLink>
            </div>
          ) : (
            <div className="Links mx-4 p-0 position-relative">
              <Link className="logo" to="/cart">
                <ShoppingCart className="m-2" size={32} />
                <h6 className="position-absolute top-0 end-0 text-danger">
                  {cart.length}
                </h6>
              </Link>
            </div>
          )}
          <div className="d-flex align-items-center me-4">
            {localStorage.getItem("login") == "true" ? (
              <h5 className="text-light">{localStorage.getItem("name")}</h5>
            ) : null}
          </div>
          <div>
            {localStorage.getItem("login") == "true" ||
            localStorage.getItem("AdminLogin") == "true" ? (
              <Button variant="danger" onClick={handleShow}>
                Logout
              </Button>
            ) : (
              <Button variant="primary" onClick={() => navigate("/")}>
                Login
              </Button>
            )}
          </div>
        </div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Are you sure</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want logout?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleLogout} variant="primary">
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Navbar;
