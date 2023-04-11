import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Nevbar from "./components/Nevbar.jsx"
import Home from "./pages/Home.jsx"
import Cart from "./pages/Cart.jsx"

const App = () => {
  return (
    <div>

      <BrowserRouter>
      <Nevbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App