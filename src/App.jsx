import { Routes, Route, useLocation } from 'react-router'
import React, { useContext } from 'react'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import { AppContext } from './context/AppContext'

const App = () => {
  const {isSeller}= useContext(AppContext)
  const {isSellerPath}= useLocation().pathname.includes("seller");
  return (
    <div>
    { isSellerPath ? null : <Navbar />}
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