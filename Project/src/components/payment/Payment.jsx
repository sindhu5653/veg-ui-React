import React, { useState } from 'react';

const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [agreed, setAgreed] = useState(false);

  const paymentMethods = [
    {
      id: 'paypal',
      label: 'PayPal',
      img: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png',
    },
    {
      id: 'mastercard',
      label: 'Mastercard',
      img: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg',
    },
    {
      id: 'gpay',
      label: 'Google Pay',
      img: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202105/Google-Pay-hero_1.jpg',
    },
  ];

  return (
    <div className='mt-8 mx-auto w-[900px] min-h-[500px] border rounded shadow p-6'>
      <h1 className='text-center text-4xl mb-6 text-[#2de089] font-bold'>
        Select Payment Method
      </h1>

      {/* Payment Options */}
      <div className='flex justify-center gap-10 flex-wrap'>
        {paymentMethods.map((method) => (
          <label
            key={method.id}
            className={`border w-[250px] h-[120px] flex flex-col items-center justify-center rounded cursor-pointer transition-all duration-200
              ${selectedMethod === method.id ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}
          >
            <input
              type='radio'
              name='paymentMethod'
              value={method.id}
              checked={selectedMethod === method.id}
              onChange={(e) => setSelectedMethod(e.target.value)}
              className='mb-2'
            />
            <img
              src={method.img}
              alt={method.label}
              className='h-[40px] object-contain'
            />
            <span className='mt-1 text-sm'>{method.label}</span>
          </label>
        ))}
      </div>

      {/* Terms and Conditions Checkbox */}
      <div className='flex justify-center mt-5'>
        <label className='flex items-center gap-2 text-lg'>
          <input
            type='checkbox'
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
            className='w-4 h-4'
          />
          <span className='cursor-pointer'> I agree to the terms and conditions</span>
        </label>
      </div>

    </div>
  );
};

export default Payment;
