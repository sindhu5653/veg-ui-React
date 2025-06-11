import React, { useState } from 'react';

const Shipping = ({ setShowAll }) => {
  const savedAddress = [
    {
      Addressline1: "Address Line 1",
      Addressline2: "Address Line 2",
      Addressline3: "Address Line 3",
      postalCode: "123456",
    },
    {
      Addressline1: "Address Line 1",
      Addressline2: "Address Line 2",
      Addressline3: "Address Line 3",
      postalCode: "678910",
    },
  ];

  const [selectedAddressIndex, setSelectedAddressIndex] = useState(null);
  const [deliveryDate, setDeliveryDate] = useState('');

  return (
    <div>
      <div className='mt-3 mx-auto w-[900px] border '>
        <h1 className='text-center text-2xl mb-4 mt-3 text-[#2de089]'>Select Delivery Address</h1>

        <div className='mt-6 items-center text-center'>
          <input
            type='date'
            value={deliveryDate}
            onChange={(e) => setDeliveryDate(e.target.value)}
            className='border rounded p-2 w-full max-w-sm'
          />
        </div>

        <div>
          <div className='text-2xl text-center mt-10 text-[#2de089]'>
            <h1>Previous Saved Address</h1>
          </div>

          <div className='flex flex-col items-start mt-2 ml-20'>
            {savedAddress.map((address, index) => (
              <label
                key={index}
                className={` p-3 w-full max-w-xl transition-all duration-200`}
              >
                <input
                  type="radio"
                  name="savedAddress"
                  value={index}
                  checked={selectedAddressIndex === index}
                  onChange={() => setSelectedAddressIndex(index)}
                  className='mr-3'
                />
                {address.Addressline1}, {address.Addressline2}, {address.Addressline3}, Postal Code: {address.postalCode}
              </label>
            ))}
          </div>

        </div>

        <div>
          <h1 className='text-center text-2xl mt-10 text-[#2de089]'>OR</h1>
          <div className='mt-2 mx-auto w-[700px] flex flex-col gap-3 '>
            <input className='border p-2 w-full' type="text" placeholder='Addressline 1' />
            <input className='border p-2 w-full' type="text" placeholder='Addressline 2' />
            <input className='border p-2 w-full' type="text" placeholder='Addressline 3' />
            <input className='border p-2 w-full' type="text" placeholder='Postal Code' />
          </div>
          <button className='block mt-10 border text-center mx-auto  rounded px-4 py-2 w-[150px] bg-[#2de089] text-white hover:bg-black hover:text-[#2de089] mb-4'>Save</button>
        </div>
      </div>

      <div className=' flex justify-center gap-5 mt-8 mb-5'>
        <button className='border text-center  rounded px-4 py-2 w-[100px] bg-[#2de089] text-white hover:bg-black hover:text-[#2de089]'
          onClick={() => setShowAll('cart')}
        >Back</button>
        <button className='border text-center  rounded px-4 py-2 w-[100px] bg-[#2de089] text-white hover:bg-black hover:text-[#2de089]'
          onClick={() => setShowAll('payment')}
        >Next</button>
      </div>

    </div>
  );
};

export default Shipping;
