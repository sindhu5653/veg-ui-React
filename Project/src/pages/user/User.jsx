import React from 'react';
import { Link } from 'react-router-dom';

const User = () => {
  return (
    <div className='flex flex-col bg-white gap-2 py-2 mt-2 text-sm rounded-md w-[100px]'>
      
      <Link to="/signup" className='hover:bg-green-500 font-semibold w-full px-4 py-1 cursor-pointer'>
        Signup
      </Link>
      <Link to="/login" className='hover:bg-green-500 font-semibold w-full px-4 py-1 cursor-pointer'>
        Login
      </Link>
      <Link to="/profile" className='hover:bg-green-500 font-semibold w-full px-4 py-1 cursor-pointer'>
        Profile
      </Link>
      <Link to="/" className='hover:bg-green-500 font-semibold w-full px-4 py-1 cursor-pointer'>
        Logout
      </Link > 
    </div>
  );
};

export default User;
