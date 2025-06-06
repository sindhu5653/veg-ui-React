import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex flex-col  w-screen h-screen'>
                <div className='flex items-center justify-center mt-6 mb-4'>
                    <h1 className='text-3xl font-semibold text-[#2de089]'>Login</h1>
                </div>

                <div>
                    <form className='flex flex-col justify-center items-center gap-4' action="">
                        <input className='outline-none border rounded-md px-4 py-2' placeholder='Enter Your Email' type="email" />
                        <input className='outline-none border rounded-md px-4 py-2' placeholder='Enter Your Password' type="text" />

                        <Link to="/">
                            <button className='bg-[#2de089] w-[250px] text-white font-semibold px-4 py-2 rounded-md' >Login</button>
                        </Link>
                    </form>
                </div>
            </div>
  )
}

export default Login
