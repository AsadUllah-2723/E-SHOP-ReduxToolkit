import React from 'react'
import {useSelector} from 'react-redux'
import {remove} from "../Redux/cartSlice.jsx"
import {useDispatch} from "react-redux";
const Cart = () => {
  
const products = useSelector((state => state.cart))

const  dispatch = useDispatch();

const deleteHandler = (product) => {
  dispatch(remove(product));
}

  return (
    <div style={{marginTop: 20}}>
      <div className="cartWrapper">
        {
          products.map(product => (
            <div className="cartCard" key={product.id}>
              <img src={product.image} />
              <h5>{product.title}</h5>
              <h4>{product.price}</h4>
              <button className='btn' 
                onClick={() => deleteHandler(product.id)}> 
                Delete
              </button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cart