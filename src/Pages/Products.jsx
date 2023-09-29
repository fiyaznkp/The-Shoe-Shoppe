import { products as productList } from "../../public/products";
import { Button, Card, Container } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
// import myContext from '../Context/Context';
import { useNavigate } from "react-router-dom";
import StarRating from "../Components/StarRating";
import AllProducts from "../AllProducts";
import { myContext } from "../App";
import Example from "../Components/ImageEnlarge";
import { GrFavorite } from "react-icons/gr";
import Sidebar from "../Components/Sidebar";


function Products() {
  
  const [modal, setModal] = useState([]);
  const {
    cart,
    setCart,
    loginUser,
    login,
    setLogin,
    filterValue,
    setFilterValue,
    searchValue,
    setSearchValue,
    product,
    setProduct,
    searchBackup,
    addToCart,
    setSearchBackup,
    wishlist,
    setWishlet,
    userData,
    trigger,setTrigger
  } = useContext(myContext);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleEnlargeImage = (id) => {
    const prod = product.filter((e) => e.id === id);

    setModal(prod);
    setShow(true);
  };

  const addToWishlist = (item) => {
    if (loginUser.length !== 0) {
      if (loginUser.wishlist.includes(item)) {
        window.alert("Item already in wishlist");
      } else {
        loginUser.wishlist.push(item);
        setTrigger(!trigger);
        alert('Product Added to Whislist')
      }
    } else {
      window.alert("Please login");
    }
      };
  

  const handleFilter = (value) => {
    if (value != "allProducts") {
      // console.log(value)
      const filter = searchBackup.filter((e) => e.Brand == value);
      setProduct(filter);
    } else {
      setProduct(searchBackup);
    }
  };

  const handleSearch = (value) => {
    if (typeof value === "string" && value.length > 0) {
      const search = searchBackup.filter((e) =>
        e.Brand.toLowerCase().includes(value.toLowerCase())
      );
      setProduct(search);
    } else {
      setProduct(searchBackup);
    }
  };
  useEffect(() => {
    handleSearch(searchValue);

    // console.log("useEffect Test");
  }, [searchValue]);
  // console.log(cart);
  // console.log(product,'product in product page2');
  return (
    <>
      <div className="d-flex justify-content-between">
        
        <div>
          <div className="ms-2 mt-2">
          <AllProducts handleFilter={handleFilter} />
          </div>
          <div className="mt-2">
          <Sidebar isAdmin={false}/>
          </div>
        </div>
       
      </div>
       <div style={{marginLeft:"140px"}}>
      <Container className="container">
        <div className="d-flex flex-wrap justify-content-center ">
          <Example showModal={show} setShowModal={setShow} data={modal} />
          {product?.map((item, index) => {
            {
              /* console.log(item,"utem"); */
            }
            return (
              <div className="mx-1 my-2 h-100 ms-3" key={item.id}>
                <Card
                  style={{
                    width: "300px",
                    height: "500px",
                    boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                  }}
                >
                  <div
                    style={{ height: "250px", width: "250px" }}
                    className="card-image-container"
                  >
                    <Card.Img
                      variant="top"
                      src={item?.Image}
                      className="card-image"
                      onClick={() => handleEnlargeImage(item.id)}
                    />

                    {/* <Example img = {item.Image} showModal={show} setShowModal={setShow} name={item.Model}/> */}
                  </div>
                  <Card.Body>
                    <Card.Title>{item?.Brand}</Card.Title>
                    <Card.Title> {item?.Model}</Card.Title>

                    {/* <p className='p-0 m-0'>Size: {item.AvailableSizes.toString()}</p>  */}
                    {/* <p className='p-0 m-0'>Color: {item?.color}</p> */}
                    {/* <p className='p-0 m-0'>Reviews:{item?.reviews}</p> */}
                    <p className="p-0 m-0">
                      Ratings:<StarRating rating={item?.ratings}></StarRating>
                    </p>
                    <Card.Text>
                      Price: <strong>₹</strong> {item?.Price}
                    </Card.Text>
                    <div className="ps-3">
                      <Button
                        className="secondary me-4"
                        onClick={() =>
                          addToCart(item.id, item.Model, item.Price, item.Image)
                        }
                      >
                        {" "}
                        Add to Cart
                      </Button>
                      
                      <GrFavorite onClick={() => addToWishlist(item)} />
                      
                    </div>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </Container>
      </div>
      <div>
        
      </div>
    </>
  );
}

export default Products;
