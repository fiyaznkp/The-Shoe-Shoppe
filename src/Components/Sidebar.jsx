import React from 'react'
import UserList from '../Pages/Admin/Components/UserList'
import Home from './Home'
import About from "./About"

 

import {AiOutlineMenu} from "react-icons/ai"
import 'font-awesome/css/font-awesome.min.css';
import './Sidebar.css'
import { Link } from 'react-router-dom';


function Sidebar({isAdmin}) {
  
    
 return (
  <div style={{position:"fixed"}}>
  
<aside>
  <p><AiOutlineMenu/> Menu</p>
  <>
    
     {isAdmin && (
      <>
      <Link to="/users">
      <i className="fa fa-user-o" aria-hidden="true"></i>
      Userslist
    </Link>
    <Link to='/dashboard'>
  <i className='fa fa-dashboard' aria-hidden="true"></i>
     Dashboard
</Link>
  </>
     )}
     {!isAdmin && (
      <>
      <a href="home">
      <i className="fa fa-home" aria-hidden="true"></i>
      Home
    </a>
      <a href="about">
    
      <i className="fa fa-book" aria-hidden="true"></i>
      About
    </a>
    
    <a href="contact">
      <i className="fa fa-support" aria-hidden="true"></i>
      Contact
    </a>
    <a href="rules">
      <i className="fa fa-lock " aria-hidden="true"></i>
      Rules & Regulations
    </a>
    </>
     )}
     
     </>
</aside>


</div>
 )
  
}

export default Sidebar