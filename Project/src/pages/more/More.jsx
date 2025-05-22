import React from 'react';

const More = () => {

  return (
    <div className="flex items-center ">
      <select className='flex flex-row w-[60px]'>
        <option selected disabled>More</option>
        <option value="faq">FAQ</option>
        <option value="parivacy policy">Privacy Policy</option>
        <option value="terms and conditions">Terms and Conditions</option>
      </select>
    </div>
  );
};

export default More;
