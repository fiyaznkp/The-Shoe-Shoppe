import React, { useContext, useState } from "react"

import { NavLink, useNavigate } from "react-router-dom"
import { Button } from "react-bootstrap"
import { myContext } from "../../App"




const AdminLogin = () => {

    const AdminCred = {
        email:"admin@gmail.com",
        password:"admin123"
    }
    const {trigger,setTrigger} = useContext(myContext)
    const navigate = useNavigate()
    

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        if(email== AdminCred.email && password==AdminCred.password){
            localStorage.setItem("AdminLogin",true)
            localStorage.setItem("login",false)
            setTrigger(!trigger)
            
            navigate('/adminhome')
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
                
            </div>
        </div>
    )
}

export default AdminLogin