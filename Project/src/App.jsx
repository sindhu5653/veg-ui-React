import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Navbar from './components/Navbar'
import axios from 'axios'
import { BsTypeH1 } from 'react-icons/bs'
import Productdetails from './pages/products/Productdetails'
import Review from './pages/review/Review'

const App = () => {
  const [data, setData] = useState([])
  // console.log(data);


  useEffect(() => {
      fetchProducts()
  }, [])

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
        <Route path='/productdetails/:id' element={<Productdetails/>}/>
        <Route path='/review' element={<Review/>}/>
        <Route path='*' element={<h1>Unauthorized</h1>} />
      </Routes>
    </div>
  )
}

export default App;
