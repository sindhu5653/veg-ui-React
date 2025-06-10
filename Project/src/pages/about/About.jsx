import React from 'react'

const About = () => {
  return (
    <div>
      <div className='relative'>
        <img
          className='w-full h-[400px] object-cover'
          src="https://plus.unsplash.com/premium_photo-1673518604470-4e005328a787?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA5fHxmcnVpdHMlMjBjb3ZlciUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
          alt="about image1" />
        <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold px-4 py-2'>About US</h1>
      </div>

      <div className='mt-10 flex items-center justify-center gap-10 px-8'>
        <div className='flex gap-2'>
          <div className='w-1/2'>
            <img
              className='w-[600px] h-[250px]  object-cover'
              src="https://images.unsplash.com/photo-1655483911598-41377da0019d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGZydWl0cyUyMGNvdmVyJTIwaW1hZ2VzfGVufDB8fDB8fHww"
              alt="about image2"
            />
          </div>

          <div className='w-1/2 gap-2 mt-10'>
            <h1 className='text-3xl font-bold'>Our Story</h1>
            <p className='text-2xl'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae laboriosam atque sunt pariatur dolores obcaecati quae doloremque non deserunt doloribus ex, quas fugit facere earum odio nesciunt. Id, assumenda ea!
            </p>
          </div>
        </div>
      </div>

      <div className='mt-15 flex items-center justify-center gap-10 px-8'>
        <div className='flex gap-2'>
          <div className='w-1/2 gap-2 mt-10'>
            <h1 className='text-3xl font-bold'>Who are we</h1>
            <p className='text-2xl'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae laboriosam atque sunt pariatur dolores obcaecati quae doloremque non deserunt doloribus ex, quas fugit facere earum odio nesciunt. Id, assumenda ea!
            </p>
          </div>

          <div className='w-1/2'>
            <img
              className='w-[600px] h-[250px]  object-cover'
              src="https://images.unsplash.com/photo-1610043775988-060847913994?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fGZydWl0cyUyMGNvdmVyJTIwaW1hZ2VzfGVufDB8fDB8fHww"
              alt="about image2"
            />
          </div>
        </div>
      </div>

    </div>
  )
}

export default About