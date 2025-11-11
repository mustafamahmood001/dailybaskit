import { Routes, Route, useLocation } from 'react-router'
import React, { useContext } from 'react'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import { AppContext } from './context/AppContext'
import MyOrders from './pages/MyOrders'
import Auth from './models/Auth'

const App = () => {
  const {isSeller, showUserLoggin}= useContext(AppContext)
  const {isSellerPath}= useLocation().pathname.includes("seller");
  return (
    <div>
    { isSellerPath ? null : <Navbar />}
    { showUserLoggin ? <Auth/>:null}
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Products" element={<Products/>}/>
          <Route path="/Product/:id" element={<ProductDetail/>}/>
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/my-orders" element={<MyOrders/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App