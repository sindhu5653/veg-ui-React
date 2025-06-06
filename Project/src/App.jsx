import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Navbar from './components/Navbar'
import axios from 'axios'
import Productdetails from './pages/products/Productdetails'
import { ToastContainer } from 'react-toastify';
import Signup from './pages/auth/Signup'
import Login from './pages/auth/Login'
import Cart from './pages/cart/Cart'

const App = () => {
  const [cart, setCart] = useState({
    id: "1",
    product: "phone",
    quantity: "2"
  })
  const [data, setData] = useState([])
  // console.log(data);

  let cartItems = localStorage.getItem('cart')
  console.log(JSON.parse(cartItems), 'items display')

  useEffect(() => {
    fetchProducts()
    setLocalstorage()
  }, [])

  async function setLocalstorage() {
    localStorage.setItem("cart", JSON.stringify(cart))
  }


  async function fetchProducts() {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      // console.log(response, 'displayed');
      const data = response.data;
      // console.log(data);
      setData(data.products)

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home data={data} />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/productdetails/:id' element={<Productdetails />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='*' element={<h1>Page not found</h1>} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        theme='dark' />
    </div>
  )
}

export default App;
