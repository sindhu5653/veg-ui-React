import React from 'react';

const Success = ({ setShowAll }) => {
  return (
    <div>
      <div className='w-[900px] h-[300px] border mx-auto mt-3 flex flex-col gap-5 mb-5'>

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

      <div className='flex justify-center gap-5 mt-8 mb-5'>
        <button className='border text-center  rounded-md px-4 py-2 w-[150px] bg-[#2de089] text-white hover:bg-black hover:text-[#2de089]'
          onClick={() =>{
           setShowAll('cart')
           alert('Order Placed')
          }}
        >Go To Home</button>
      </div>

    </div>
  );
};

export default Success;
