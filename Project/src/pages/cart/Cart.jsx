import React from 'react'
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePayment } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import coverimage from "../../assets/images/cover.jpg"

const Cart = () => {
    return (
        <div>
            <div className='w-full h-[300px] relative '>
                <img
                    className='w-full h-[300px] object-cover'
                    src={coverimage} alt="cart image" />
            
            <h1 className='items-center justify-center  text-5xl text-white font-semibold absolute top-1/2 left-2/5 transform-translate-x-1/2 -translate-y-10/12'>My Cart</h1>
            </div>

            <div className='flex gap-20 items-center bg-white border border-gray-200 rounded-md mt-3 mx-auto w-fit px-2 py-4'>
                <div >
                    < HiOutlineShoppingCart className='size-6 mx-auto' />
                    <h1 className='text-sm'>My Cart</h1>
                </div>
                <div>
                    <CiLocationOn className='size-6 mx-auto' />
                    <h1 className='text-sm'>Shipping</h1>
                </div>
                <div>
                    <MdOutlinePayment className='size-6 mx-auto' />
                    <h1 className='text-sm'>Payment</h1>
                </div>
                <div>
                    <TiTick className='size-6 mx-auto' />
                    <h1 className='text-sm'>Success</h1>
                </div>
            </div>
        </div>
    )
}

export default Cart;
