import './App.css'
import React, { useEffect, useState ,createContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import Navbar from './Components/Navbar'
import { products as productList } from '../public/products';
import Shopping from './Pages/Shopping/Shopping'
import Cart from './Pages/Cart/Cart'
import Products from './Pages/Products'
import Loginform from './Components/Loginform';
import Register from "./Components/Register"
import AddProduct from './Pages/Admin/Components/AddProduct';
import AdminLogin from './Pages/Admin/AdminLogin';
import AdminHome from './Pages/Admin/AdminHome';
import DeleteProduct from './Pages/Admin/DeleteProduct';
import AdminProduct from './Pages/Admin/Components/AdminProduct';
import UserList from './Pages/Admin/Components/UserList';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';


import Wishlist from './Components/Wishlist';
import Contact from './Pages/Shopping/Contact';
import Rules from './Components/Rules';
import { GrDashboard } from 'react-icons/gr';
import AdminDashboard from './Components/AdminDashboard';

// import myContext from "./Context/Context"

export const myContext = createContext()
function App() {

  
  const [currentform, setCurrentform] = useState("Login")
  const [wishlist,setWishlet] =useState([])
  const [cart, setCart] = useState([])
  const [login, setLogin] = useState("")
  const [filterValue,setFilterValue] = useState('')
  const [searchValue,setSearchValue] = useState('')
  const [product,setProduct] = useState([])
  const [searchBackup,setSearchBackup]=useState([])
  const [deleteProduct,SetDeleteProduct] = useState([])
  const [loginUser,setLoginUser]= useState([])
  const [trigger,setTrigger] = useState(false)
  const [displayNav,setDisplayNav] = useState(false)
  const navigate = useNavigate()
  const handleChangeSearch = (value)=>{
    setSearchValue(value)
  }
  const [userData,setUserData] = useState([{name:"test",email:"test@gmail.com",password:"1234",wishlist:[],cart:[]}])
  useEffect(()=>{
    setLogin(() => localStorage.getItem("login"))
    setProduct(...product,productList)
    setSearchBackup(...product,productList)
  

  },[])
  
  const addToCart = (id, Model, Price,Image) => {
    const product = {
      id: id,
      Model: Model,
      Price: Price,
      Image: Image,
      Quantity: 1,
    };

    if(loginUser!=0){
     
    const existingProduct = loginUser.cart.filter((e) => e.id === id);

    if (existingProduct.length > 0) {
      window.alert("Product already exists in cart please add more quantity");
      navigate("/cart");
    } else {
     loginUser.cart.push(product)
     setTrigger(!trigger)
      window.alert("Product added to Cart");

      
    }
  }
  else{
    window.alert("please login")
    navigate ("/")
  }

  };
  
  
  return (<div className='App'>

    {currentform === Loginform ? <Loginform /> : Register}
   
      <myContext.Provider value={{cart, setCart, addToCart,login, setLogin,filterValue,setFilterValue, userData,setUserData,searchValue,setSearchValue,product,setProduct,searchBackup,setSearchBackup,deleteProduct,SetDeleteProduct,trigger,setTrigger,loginUser,setLoginUser,wishlist,setWishlet}}>
        <Navbar handleChangeSearch ={handleChangeSearch} Navbar={[displayNav,setDisplayNav]} />
        <Routes>
          <Route path='/shopping' element={<Shopping />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/products' element={<Products />} />
          <Route path="/" element={<Loginform />} />
          <Route path='/register' element={<Register setUserData={setUserData}/>} />
          <Route path='/adminlogin' element={<AdminLogin/>}/>
          <Route path='/adminhome' element={<AdminHome/>}/>
          <Route path='/addproduct' element={<AddProduct/>}/>
          <Route path='/admin-view-products' element={<AdminProduct/>}/>
          <Route path='/users' element={<UserList/>}/>
          <Route path='/wishlist' element={<Wishlist/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/rules' element={<Rules/>}/>
          <Route path='/dashboard' element={<AdminDashboard/>}/>
        </Routes>
        <Footer />
      </myContext.Provider>
    
  </div>)

}

export default App
