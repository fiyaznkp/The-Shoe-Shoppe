import React from 'react'
import Asics from "../Components/Asics.jpg"
import { Card } from 'react-bootstrap'


function Home() {
  return (
    <div >
    <Card>
    <h2 style={{textAlign:"center",marginTop:"10px",height:"10vh"}}>Welcome to The Shoe Shoppe</h2> 
    <h3 style={{fontSize:"25px", marginLeft:"30px",height:"50vh"}}> Sponsored Products 
    <br/>
    <img style={{height:"250px",width:"250px"}}  src={Asics}/>
    </h3>
    </Card>
      </div>
  )
}

export default Home