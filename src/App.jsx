import './App.css'
import React, { useEffect, useState ,createContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
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

// import myContext from "./Context/Context"

export  const myContext = createContext()
function App() {


  const [currentform, setCurrentform] = useState("Login")
  const [cart, setCart] = useState([])
  const [login, setLogin] = useState("")
  const [filterValue,setFilterValue] = useState('')
  const [searchValue,setSearchValue] = useState('')
  const [product,setProduct] = useState([])
  const [searchBackup,setSearchBackup]=useState([])
  const [deleteProduct,SetDeleteProduct] = useState([])
  const [trigger,setTrigger] = useState(false)
  const handleChangeSearch = (value)=>{
    setSearchValue(value)
  }
  const [userData,setUserData] = useState([{name:"test",email:"test@gmail.com",password:"1234"}])
  useEffect(()=>{
    setLogin(() => localStorage.getItem("login"))
    setProduct(...product,productList)
    setSearchBackup(...product,productList)
    

  },[])
  console.log(userData,"userData");
  return (<div className='App'>

    {currentform === Loginform ? <Loginform /> : Register}
    <BrowserRouter>
      <myContext.Provider value={{cart, setCart, login, setLogin,filterValue,setFilterValue, userData,setUserData,searchValue,setSearchValue,product,setProduct,searchBackup,setSearchBackup,deleteProduct,SetDeleteProduct,trigger,setTrigger}}>
        <Navbar handleChangeSearch ={handleChangeSearch} />
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
        </Routes>
      </myContext.Provider>
    </BrowserRouter>
  </div>)

}

export default App
