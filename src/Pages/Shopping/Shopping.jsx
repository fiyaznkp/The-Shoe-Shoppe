import React, { useContext } from 'react'
import Products from '../Products'
import myContext from '../../Context/Context';

function Shopping() {
  const [cart, setCart, login, setLogin,filterValue,setFilterValue, searchValue,setSearchValue] = useContext(myContext)
  console.log(searchValue,"seacrhValue in shopping");

  return (
    <div className='shopping'>
     
      <div >
        <Products/>
      </div>
      <div className='Products'></div>
    </div>
  )
}

export default Shopping