import React, { useState,useContext } from 'react'
import { Button } from 'react-bootstrap'

import { NavLink, useNavigate } from 'react-router-dom'
import { myContext } from '../App'

function Register() {
  const navigate = useNavigate()
  const  {userData,setUserData} = useContext(myContext)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const userObj = {
     name : e.target.name.value,
     password : e.target.password.value,
     email : e.target.email.value,
    }
    // console.log(userObj,"userObject");
    setUserData((prevUserData) => [...prevUserData, userObj]);


    // console.log(userData,"userData");

    
    localStorage.setItem("name", name)
    localStorage.setItem("password", password)
    localStorage.setItem("email", email)
    window.alert("You have sucessfully Registered, Please Login!")
    navigate("/")
  }
  
  return (
    <div style={{ height: "90vh" }} className='d-flex justify-content-center align-items-center '>
      <div className='Register bg-dark-subtle p-5 rounded-3 mx-5'>
        <form style={{width:"250px"}} className='d-flex flex-column gap-3' onSubmit={handleSubmit}>
          <input type='text' placeholder='Enter your name' required name='name'></input>
          <input type='email' placeholder='Enter email' required name='email'></input>
          <input type='password' placeholder='Enter Password' required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" name='password'></input>
          {/* <input type='text' placeholder='Confirm Password' required></input> */}
          <Button variant='primary'  type='submit'>Signup</Button>
        </form>
        <div className='d-flex mt-3'>
        <p >Already have an account?</p>
        <NavLink to={"/"}> <p>Login</p></NavLink>
        </div>
      </div>
    </div>
  )
}

export default Register