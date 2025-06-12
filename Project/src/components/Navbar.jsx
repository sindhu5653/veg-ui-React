import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { BsHandbag } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import More from '../pages/more/More';
import User from '../pages/user/User';
import Cart from '../pages/cart/Cart';

const Navbar = () => {
  const [openDropDown, setOpenDropDown] = useState(false);
  // console.log(openDropDown)
  const myRef = useRef(null);
  const [totalQuantity, setTotalQuantity] = useState(0);


  useEffect(() => {
    const handleClickOutside = (e) => {
      if (myRef.current && !myRef.current.contains(e.target)) {
        setOpenDropDown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);


    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const totalItems=()=>{
    let cart=JSON.parse(localStorage.getItem('cart'))
    if(cart){
      let total=0
      cart.forEach(item => {
          total+=item.quantity
      });
      setTotalQuantity(total)
    }
    else{
      setTotalQuantity(0)
    }
  }

  useEffect(()=>{
    totalItems()
  },[])


  return (
    <div>
      <div className='flex justify-between items-center py-4 px-12'>
        <div>
          <Link to="/">
            <img
              width={60}
              height={60}
              className='mt-2 ml-3'
              src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/05ddda120585343.60b4e6fc1383b.png" alt="grocery store" />
          </Link>
        </div>

        {/* <div className='flex flex-row justify-between '>
          <div className='bg-[#fcf7f7] w-[550px] h-[30px] border rounded-md mt-4'>
            <input type="text" placeholder='search for products' />
          </div>
          <IoSearchOutline className=' text-green-400 mt-6' />

        </div> */}

        <div className=' rounded-md shadow-md flex items-center w-2/5 justify-between  '>
          <input type="text" placeholder='Search for Products and Category' className='outline-none py-2 px-2 w-full' name="" id="" />
          <div className='w-[40px] h-[40px] flex items-center justify-center rounded-md'>
            <CiSearch color='#59d99b' size={26} />
          </div>
        </div>

        <div className='flex flex-row gap-8 text-2xl mt-4'>
          <div className='relative'>
            <Link to="/cart">
            <span className='absolute text-sm top-[-18px] right-[-10px] bg-green-500 text-white rounded-full px-1'>{totalQuantity}</span>
              <BsHandbag className=' hover:text-green-400' />
            </Link>
          </div>
          <div className='relative' ref={myRef}>
            <CiUser onClick={() => setOpenDropDown(!openDropDown)} className=' hover:text-green-500 ' />
            <div className='absolute right-0 z-50'>
              {
                openDropDown ? <User /> : <></>
              }

            </div>
          </div>
        </div>
      </div>

      <div className='flex gap-5 items-center justify-center py-2 '>
        <div className=' flex gap-7 font-semibold'>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <More />
        </div>
      </div>

    </div>

  )
}

export default Navbar
