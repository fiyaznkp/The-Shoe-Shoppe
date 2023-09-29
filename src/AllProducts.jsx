import { useContext, useState } from "react";
import "../src/AllProducts.css";
import { myContext } from "./App";

function AllProducts({handleFilter}) {
    const {filterValue,setFilterValue} = useContext(myContext)
    
    const handleChange = (e)=>{
        
        setFilterValue(e.target.value)
        handleFilter(e.target.value)
    }
   
    
  return (
    <>
       
      <select className="AllProducts" onChange={handleChange}>
        <option selected value="allProducts">All Products</option>
        <option value="Nike">Nike</option>
        <option value="Puma">Puma</option>
        <option value="Legwork">Legwork</option>
        <option value="New Balance">NewBalance</option>
        <option value="Skechers">Skechers</option>
        <option value="Fauston">Fauston</option>
        <option value="Lee Cooper">LeeCooper</option>
        <option value="Saloman">Saloman</option>
        <option value="Asics">Asics</option>
      </select>
    </>
  );
}

export default AllProducts;
