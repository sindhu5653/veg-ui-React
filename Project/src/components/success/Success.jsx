import React from 'react';

const Success = () => {
  return (
    <div className='w-[900px] h-[400px] border mx-auto mt-8 flex flex-col gap-5'>
      
      <div className='flex justify-center'>
        <img
          className='w-[100px] h-[100px] object-contain mt-1'
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBgqsQj54K_70H0BSHrWucQpnjJfwfn55otA&s"
          alt="success"
        />
      </div>

      <div className='text-center'>
        <h1 className='text-5xl text-[#2de089] font-bold'>Order Placed Successfully</h1>
        <p className='text-xl mt-2'>Thank you for shopping with us</p>
      </div>
    </div>
  );
};

export default Success;
