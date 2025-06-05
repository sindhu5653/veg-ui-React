import { CiCirclePlus } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';

const Card = ({ item }) => {
  // console.log(item,'items');

  const navigate = useNavigate();
  const handleClick=()=>{
  navigate(`/productdetails/${item.id}`);
  }

  return (

    <div className='flex flex-wrap bg-white p-4 rounded-md shadow-2xl w-[180px] h-[300px] mx-auto text-black '>

      <Link to={`productdetails/${item.id}`}>
        <div>
          <img
            width={200}
            className='bg-gray-200 mx-auto rounded-md hover:scale-125 hover:bg-blue-100 transition-all duration-200 cursor-pointer mb-2'
            src={item.thumbnail} alt={item.title} />
        </div>
      </Link>

      <div className="flex justify-between ">
        <div className=' flex flex-col w-[130px]'>
          <p>{item.id}</p>
          <h1>{item.title}</h1>
          <p>${item.price}</p>
        </div>

        <div className='flex flex-col gap-2 mt-3' >
          
            <IoEyeOutline onClick={handleClick} className='bg-[#c4c0c4] rounded-full border-none hover:bg-green-400 text-white flex w-[25px] h-[25px] cursor-pointer' />
          
            <CiCirclePlus className='bg-[#c4c0c4] rounded-full hover:bg-green-400 text-white flex w-[25px] h-[25px] cursor-pointer ' />
          
        </div>
      </div>

    </div>

  )
}

export default Card
