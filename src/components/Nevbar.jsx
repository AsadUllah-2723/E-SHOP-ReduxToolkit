import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"


const Nevbar = () => {

const count = useSelector((state) => state.cart);

  return (
    <div style={{display: 'flex', alignItems: 'center', 
     justifyContent: 'space-between'}}>
      <span className='logo'>
        <h1>E-SHOP</h1>
        <hr/>
        <hr/>
        <hr/>
      </span>


      <div>
        <Link className='navLink' to="/">Shop</Link>
        <Link className='navLink' to="/cart">Cart</Link>
      </div>

      <span className='cartCount'>
        Cart Items: {count.length}
      </span>

    </div>
  )
}

export default Nevbar