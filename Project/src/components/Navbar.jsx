import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { BsHandbag } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import More from '../pages/more/More';
import User from '../pages/user/User';

const Navbar = () => {
  const [openDropDown, setOpenDropDown] = useState(false)
  console.log(openDropDown)

  // useEffect(() => {
  //   const handleClickOutside = () => {
  //    if(openDropDown===true){
  //     setOpenDropDown(false);
  //    }
  //   };

  //   document.body.addEventListener("click", handleClickOutside);

  //   // Cleanup on unmount
  //   return () => {
  //     document.body.removeEventListener("click", handleClickOutside);
  //   };
  // }, []);
  return (
    <div>
      <div className='flex justify-between  items-center py-4 px-12'>
        <div>
          <img
            width={60}
            height={60}
            className='mt-2 ml-3'
            src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/05ddda120585343.60b4e6fc1383b.png" alt="grocery store" />
        </div>

        {/* <div className='flex flex-row justify-between '>
          <div className='bg-[#fcf7f7] w-[550px] h-[30px] border rounded-md mt-4'>
            <input type="text" placeholder='search for products' />
          </div>
          <IoSearchOutline className=' text-green-400 mt-6' />

        </div> */}

        <div className=' rounded-md shadow-md flex items-center w-2/5 justify-between  '>
          <input type="text" placeholder='Search for Products and Category' className='outline-none py-2 px-2 w-full' name="" id="" />
          <div className='bg-[#59d99b] w-[40px] h-[40px] flex items-center justify-center rounded-md'>
            <FaSearch color='#fefefe' />
          </div>
        </div>

        <div className='flex flex-row gap-8 text-2xl mt-4'>
          <BsHandbag className=' hover:text-green-400' />
          <div className='relative'>
            <CiUser onClick={() => setOpenDropDown(!openDropDown)} className=' hover:text-green-500 ' />
            <div className='absolute right-0'>
              {
                openDropDown ? <User /> : <></>
              }
            </div>
          </div>

        </div>


      </div>

      <div className='flex gap-5 items-center justify-center py-2 bg-[#59d99b]'>
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
