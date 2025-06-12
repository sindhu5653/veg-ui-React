import React, { useState } from 'react';

const Shipping = () => {
  const savedAddress = [
    {
      Addressline1: "Address Line 1",
      Addressline2: "Address Line 2",
      Addressline3: "Address Line 3",
      postalCode: "767668",
    },
    {
      Addressline1: "Address Line 1",
      Addressline2: "Address Line 2",
      Addressline3: "Address Line 3",
      postalCode: "337887",
    },
  ];

  const [selectedAddressIndex, setSelectedAddressIndex] = useState(null);
  const [deliveryDate, setDeliveryDate] = useState('');

  return (
    <div className='mt-8 mx-auto w-[900px] border'>
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

        {selectedAddressIndex !== null && deliveryDate && (
          <div className='mt-6 p-4 max-w-xl mx-auto'>
            <h3 className='font-semibold'>Summary:</h3>
            <p>Selected Address: #{selectedAddressIndex + 1}</p>
            <p>Delivery Date: {deliveryDate}</p>
          </div>
        )}
      </div>



      {selectedAddressIndex !== null && deliveryDate && (
        <div className='mt-6 p-4 border border-blue-300 rounded bg-blue-50'>
          <h3 className='font-semibold'>Summary:</h3>
          <p>Selected Address: #{selectedAddressIndex + 1}</p>
          <p>Delivery Date: {deliveryDate}</p>
        </div>
      )}

      <div>
        <h1 className='text-center text-2xl mt-10 text-[#2de089]'>OR</h1>
        <div className='mt-2 mx-auto w-[700px] flex flex-col gap-3 '>
          <input className='border p-2 w-full ' type="text" placeholder='Addressline1' />
          <input className='border p-2 w-full ' type="text" placeholder='Addressline2' />
          <input className='border p-2 w-full ' type="text" placeholder='Addressline3' />
          <input className='border p-2 w-full ' type="text" placeholder='Postal Code' />
        </div>
        <button className='block mt-10 border text-center mx-auto  rounded px-4 py-2 w-[150px] bg-[#2de089] text-white'>Save</button>
      </div>
    </div>
  );
};

export default Shipping;
