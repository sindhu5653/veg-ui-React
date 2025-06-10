import React, { useState } from 'react'

const Review = () => {

  return (

    <div>
      <form className='flex flex-col justify-center items-center gap-4' action="">
       <div className="flex flex-col">
          <label className="mb-1 text-left">Name</label>
          <input
            className='p-2 w-[500px] border border-green-500 rounded-md'
            type="text"
          />
        </div>
       <div className="flex flex-col">
          <label className="mb-1 text-left">Email</label>
          <input
            className='p-2 w-[500px] border border-green-500 rounded-md'
            type="email"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-left">Review</label>
          <input
            className='p-2 w-[500px] border border-green-500 rounded-md'
            type="text"
          />
        </div>
        <button className='bg-green-600 w-[150px] text-white font-semibold px-4 py-2 rounded-md hover:bg-black hover:text-green-600'>Submit</button>
      </form>
    </div>
  )
}

export default Review;
