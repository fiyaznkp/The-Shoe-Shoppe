import React, { useState,useContext } from "react"
import "./Loginform.css"
import { NavLink, useNavigate } from "react-router-dom"
import { Button } from "react-bootstrap"
import { myContext } from "../App"



const Loginform = () => {
    const {userData,trigger,setTrigger} = useContext(myContext)
    // console.log(userData,"userData in login page");
    const navigate = useNavigate()
    if (localStorage.getItem("login") == "true") {
        navigate("/products")
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value
        try {
           const user = userData.find(x=>x.email==email && x.password==password)
           if(user){
            localStorage.setItem("login",true)
            localStorage.setItem("AdminLogin",false)
            window.alert("successfull login")
            setTrigger(!trigger)
            navigate('/products')
           }
           else{
                window.alert("invalid credential")
           }
            
        } catch (error) {
            Window.alert("invalid username or password")
        }
        
        

    }
    return (

        <div style={{ height: "90vh" }} className="d-flex justify-content-center align-items-center p-0 m-0">
            <div className="Login bg-dark-subtle p-5 m-0 rounded-3 ">
                <form className="d-flex flex-column" onSubmit={handleSubmit}>
                    <label >Email</label>
                    <input name="email" type="text" placeholder="Enter Email" />
                    <label >Password</label>
                    <input name="password" type="password" placeholder="Enter Password" />
                    <br />
                    <Button variant="primary" className="mb-3" type="submit">Login</Button>
                </form>
                <div className='d-flex mt-3'>
                    <p>Don&apos;t have an account? Register here.</p>
                    <NavLink to={"/register"}> <p>Signup</p></NavLink>
                </div>
                <div className='d-flex mt-3'>
                    
                    <NavLink to={"/adminlogin"}> <p>Admin Login</p></NavLink>
                </div>
            </div>
        </div>
    )
}

export default Loginform