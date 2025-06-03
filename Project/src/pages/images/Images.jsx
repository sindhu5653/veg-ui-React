import React  from 'react'

const Images = ({item}) => {
  if (!item || !item.images) return null;
  return (
    <div className='w-[100px]'>
    
        {item.images.map((image,index)=>(
        <img key={index} src={image} alt={`product-${index}`}/>
        ))}
        
    </div>
  )
}

export default Images;
