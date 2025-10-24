import { Routes, Route } from 'react-router'
import React from 'react'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'

const App = () => {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Products" element={<Products/>}/>
          <Route path="/Product/:id" element={<ProductDetail/>}/>
          <Route path="/Cart" element={<Cart/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App