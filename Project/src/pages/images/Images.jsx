import React from 'react'

const Images = ({ images,selectImage }) => {

  return (
    <div className='w-[70px] mt-8 ml-25'>

      {images.map((image, index) => (
        <img key={index} src={image} alt={`product-${index}`}
        className='hover:border-4 hover:border-green-600 cursor-pointer border mt-1'
         onClick={() => selectImage(image)} />
      ))}

    </div>
  )
}


export default Images;
