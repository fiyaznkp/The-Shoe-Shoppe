import React from 'react'
import "./Footer.css"
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
       <Link className='about'>About Us</Link>
       <Link className='contact'>Contact Us</Link>
       <Link className='customer-support'>customer support</Link>
       <Link className='rules'>Rules & Regulations</Link>
    </div>
  )
}

export default Footer