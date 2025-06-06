import React from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className='flex justify-evenly'>
      <div className='mt-10 ml-10'>
        <img
          width={500}
          src="https://images.immediate.co.uk/production/volatile/sites/30/2024/01/Nuts440-e59d4a2.jpg" alt="image" />
      </div>
      <div className='flex flex-col mt-10 w-[500px] h-[350px] '>
        <div className='flex items-center justify-center mt-6 mb-4' >
          <h1 className='text-3xl font-semibold text-[#2de089]'>Signup</h1>
        </div>


        <form className='flex flex-col justify-center items-center gap-4 w-full ' action="">
          <div className='relative w-full'>
            <label>First Name</label>
            <input className='outline-none border rounded-md px-4 py-2 w-full' type="text" />
          </div>
          <div className='relative w-full'>
            <label>Last Name</label>
            <input className='outline-none border rounded-md px-4 py-2 w-full' type="text" />
          </div>
          <div className='relative w-full'>
            <label>Email</label>
            <input className='outline-none border rounded-md px-4 py-2 w-full' type="email" />
          </div>
          <div className='relative w-full'>
            <label>Password</label>
            <input className='outline-none border rounded-md px-4 py-2 w-full' type="text" />
          </div>

          <Link to="/login">
            <button className='bg-[#2de089] w-[500px] text-white font-semibold px-4 py-2 rounded-md' >Sign-up</button>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Signup;
