import React, { useEffect, useState } from 'react';
import {add} from "../Redux/cartSlice.jsx";
import {useDispatch} from "react-redux";


const Products = () => {
    const  dispatch = useDispatch();

    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json();
        
            setProducts(data)
        }
        fetchProducts();
    }, [])

    const handleAdd = (i) => {  
        dispatch(add(i));
    }

  return (
    <div className='productsWrapper'>
        {
            products.map((i) => (
                <div className="card" key={i.id}>

                    
                    <img src={i.image} />


                    <h4>
                        {i.title}
                    </h4>


                    <h5>
                        {i.price}
                    </h5>


                    <button onClick={() => handleAdd(i)} className='btn'> 
                        Add to Cart
                    </button>


                </div>
            ))
        }
    </div>
  )
}

export default Products