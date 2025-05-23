import React from 'react'
import { Link } from 'react-router-dom'

const Review = () => {
  return (
    <div>
      <form className='flex flex-col justify-center items-center gap-4' action="">
        <input className='px-2 py-4 outline-none border rounded-md' type="text" /><label htmlFor="Name"></label>
        <input className='px-2 py-4 outline-none border rounded-md' type="email" />
        <input className='px-2 py-4 outline-none border rounded-md' type="text" />
      </form>
    </div>
  )
}

export default Review
