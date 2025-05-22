import React from 'react'

const User = () => {
  return (
    <div className='shadow-md  flex flex-col bg-white  gap-2 py-2   mt-2 text-sm  rounded-md'>
     <h1 className='hover:bg-[#fee] w-full px-4 cursor-pointer'>Profile</h1>
     <h1 className='hover:bg-[#fee] w-full px-4 cursor-pointer'>About</h1>
     <h1 className='hover:bg-[#fee] w-full px-4 cursor-pointer'>Logout</h1>
    </div>
  )
}

export default User
