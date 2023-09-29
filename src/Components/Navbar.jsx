import { useContext, useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { ShoppingCart } from "@phosphor-icons/react";
import "./Navbar.css";
import { Button } from "react-bootstrap";
import { myContext } from "../App";
import Badge from "react-bootstrap/Badge";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import Wishlist from "./Wishlist";
import {GrFavorite} from "react-icons/gr";


import Modal from "react-bootstrap/Modal";

function Navbar() {
  const {pathname} = useLocation();
  const {
    cart,
    setCart,
    login,
    setLogin,
    searchValue,
    setSearchValue,
    trigger,
    loginUser,
    setLoginUser,
    wishlist,
    setWishlet,
    userData,
    
  } = useContext(myContext);
  const [adminLogin, setAdminLogin] = useState();
  const [totalQty,setTotalQty]=useState()
  const [wishlistQty,setWishletQty] = useState()
  const location = useLocation()
  const adminNavbar = location.pathname.includes('adminhome')| location.pathname.includes('adminlogin')| location.pathname.includes('addproduct')|
  location.pathname.includes('admin-view-products')|location.pathname.includes('users')
  console.warn(adminNavbar,'.........................');
  useEffect(() => {
    const admin = localStorage.getItem("AdminLogin");
    setAdminLogin(admin);
  }, [trigger]);

  // console.log(searchValue,"searchVlaue");
  const navigate = useNavigate();

  useEffect(() => {
    let qty=0
    loginUser?.cart?.forEach((e) => {
    qty=e.length
    })
    setTotalQty(loginUser?.cart?.length)
  }, [trigger]);
  useEffect(() => {
    setWishletQty(loginUser?.wishlist?.length)
  }, [trigger]);
console.log(loginUser);

  const handleChange = (e) => {
    // setSearchValue(e.target.value)
    setSearchValue(e.target.value);
  };

  const currentPage = pathname ==='/' || pathname ==='/register' || pathname === '/adminlogin';

  const handleLogout = () => {
    setCart([]);
    localStorage.setItem("login", false);
    localStorage.setItem("AdminLogin", false);
    setLoginUser([])
    
    setShow(false);
    navigate("/");
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className="navbar">
        <div className="ShopTitle ms-2">
          <h1
            style={{
              alignItems: "center",
              textAlign: "center",
              margin: 0,
            }}
          >
            The Shoe Shoppe
          </h1>
          <div className="quote ms-2">Shoes for Real Men!</div>
        </div>
        {!currentPage&&
        <div className="d-flex me-4">
          {adminLogin == "true" ? (
            <div className="d-flex align-items-center">
              <NavLink to={"/adminhome"}>Products</NavLink>
            </div>
          ) : (
            <div className="d-flex align-items-center">
              <NavLink to={"/products"}>Products</NavLink>
            </div>
          )}
          <div className="d-flex align-items-center ms-3 ">
            <input
              type="text"
              placeholder="🔍Enter your search "
              className="hoverable"
              onChange={handleChange}
            />
          </div>
          {adminLogin == "true" && (
            <div className="d-flex align-items-center ms-3">
              <NavLink to={"/users"}>Users</NavLink>
            </div>
          )} 
          {adminLogin=='false' &loginUser != null ?(
            <>
            <div className="Links mx-4 p-0 position-relative">
              <Link className="logo" to="/cart">
                <ShoppingCart className="m-2" size={32} />
                <h6 className="position-absolute top-0 end-0 text">
                  {totalQty}
                </h6>
              </Link>
              
            </div>
            <div className="Links mx-4 p-0 position-relative">
                <NavLink to = "/wishlist" >
                <GrFavorite />
                {wishlistQty}
                </NavLink>
              </div>
            <div className="d-flex align-items-center">
              <h5 style={{color:"black"}}>{loginUser.name}</h5>
            </div>
            </>
          ):null}
          <div className="d-flex align-items-center me-4">
            {localStorage.getItem("login") == "true" ? (
              <h5 className="text-light">{localStorage.getItem("name")}</h5>
            ) : null}
          </div>
          
          <div>
          
            {loginUser.length === 0 ? (
              <Button variant="primary" onClick={() => navigate("/")}>
                Login
              </Button>
            ) : (
              <Button variant="danger" onClick={handleShow}>
                Logout
              </Button>
            )}
          </div>
        </div>
        }
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
