import React from "react"
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Login from "./pages/Login/Login"
import Cart from "./pages/Cart/Cart"
import Checkout from "./pages/Checkout/Checkout"
import Order from "./pages/Order/Order"
import Footer from "./components/Footer/Footer"
import {Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return(
    <div>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/order' element={<Order />} />
      </Routes>
      <Footer />

      {/* ToastContainer giúp hiển thị các toast messages */}
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
      />
    </div>
  )
}

export default App
