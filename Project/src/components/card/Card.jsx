import React from 'react'
import { CiCirclePlus } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";

const Card = ({ item }) => {
  // console.log(item,'items');

  return (

    <div className='flex flex-wrap bg-white p-4 rounded-md shadow-2xl w-[150px] mx-auto text-black '>

      <div>
        <img
          width={200}
          className='mx-auto rounded-md hover:scale-125 hover:bg-blue-100 transition-all duration-200 cursor-pointer'
          src={item.images} alt="" />
      </div>

      <div className=' flex flex-col'>
        <h1>{item.title}</h1>
        <p>${item.price}</p>

        <div className='flex flex-col text-2xl items-end gap-2' >
          <IoEyeOutline className='bg-[#c4c0c4] rounded-full border-none hover:bg-green-400 text-white ' />
          <CiCirclePlus className='bg-[#c4c0c4] rounded-full hover:bg-green-400 text-white ' />
        </div>
      </div>

    </div>

  )
}

export default Card
