import React, { useState } from 'react'

const Review = () => {

  return (

    <div>
      <form className='flex flex-col justify-center items-center gap-4 ' action="">
        <label>Name</label>
        <input className='px-2 py-2  border rounded-md' type="text" />
        <label>Email</label>
        <input className='px-2 py-4  border rounded-md' type="email" />
        <label>Review</label>
        <input className='px-2 py-4  border rounded-md' type="text" />
        <button className='bg-green-600 w-[100px] text-white font-semibold px-4 py-2 rounded-md hover:bg-black hover:text-green-600'>Submit</button>
      </form>
    </div>
  )
}

export default Review;
