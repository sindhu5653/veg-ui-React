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
    <div className='mt-5 mx-auto w-[900px] border'>
      <h1 className='text-center text-2xl mb-4'>Select Delivery Address</h1>

      <div className='mt-6 items-center text-center'>
        <input
          type='date'
          value={deliveryDate}
          onChange={(e) => setDeliveryDate(e.target.value)}
          className='border rounded p-2 w-full max-w-sm'
        />
      </div>

      <div className=''>
        <div className='text-2xl text-center mt-10'>
            <h1>Previous Saved Address</h1>
            </div>
        {savedAddress.map((address, index) => (
          <div
            key={index}
            onClick={() => setSelectedAddressIndex(index)}
            className='mt-4 ml-20'
            // className={`border rounded-lg p-4 cursor-pointer ${
            //   selectedAddressIndex === index ? 'border-green-500 bg-green-50' : 'border-gray-300'
            // }`}
          >
            <p>{address.Addressline1},
            {address.Addressline2},
            {address.Addressline3},
            Postal Code: {address.postalCode}</p>
          </div>
        ))}
      </div>


      {selectedAddressIndex !== null && deliveryDate && (
        <div className='mt-6 p-4 border border-blue-300 rounded bg-blue-50'>
          <h3 className='font-semibold'>Summary:</h3>
          <p>Selected Address: #{selectedAddressIndex + 1}</p>
          <p>Delivery Date: {deliveryDate}</p>
        </div>
      )}

      <div>
        <h1 className='text-center text-2xl mt-10'>OR</h1>
        <input className='border p-2 w-full' type="text" placeholder='Addressline1' />
        <input className='border p-2 w-full' type="text" placeholder='Addressline2' />
        <input className='border p-2 w-full' type="text" placeholder='Addressline3' />
        <input className='border p-2 w-full' type="text" placeholder='Postal Code' />
        <button className='text-center mx-auto w-[fit]'>Save</button>
      </div>
    </div>
  );
};

export default Shipping;
