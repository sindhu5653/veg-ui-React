import { useEffect, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';

const Card = ({ item }) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [cartItems, setCartitems] = useState([])

  const handleClick = () => {
    navigate(`/productdetails/${item.id}`);
  };


  useEffect(() => {
    fetchAllCartitemsFromLocalStorage()
  }, [])

  function fetchAllCartitemsFromLocalStorage() {
    try {
      const allCartItemsInLocalstorage = localStorage.getItem('cart')
      console.log(allCartItemsInLocalstorage, 'all items')
      let parsedItems = JSON.parse(allCartItemsInLocalstorage) || []

      if (!Array.isArray(parsedItems)) {
        parsedItems = [parsedItems];
      }
      console.log(parsedItems, 'after parsing')
      setCartitems(parsedItems)
    } catch (error) {
      console.log(error)
    }
  }

  const handleAddToCart = () => {
    const itemExist = cartItems.find((cart) => item.id === cart.id)
    console.log(itemExist)
    if (!itemExist) {
      const updatedData = [...cartItems, { product: item, quantity: 1 }]
      localStorage.setItem('cart', JSON.stringify(updatedData))
    } else {
      console.log('item already exist')
      const updatedData = cartItems.map((cart) => {
        if (cart.product.id === item.id) {
          return { ...cart, quantity: cart.quantity + 1 };
        }
        return cart;
      });
      localStorage.setItem('cart', JSON.stringify(updatedData));
    }
  };



  return (
    <div className='flex flex-wrap bg-white p-4 rounded-md shadow-2xl w-[180px] h-[300px] mx-auto text-black'>

      <Link to={`/productdetails/${item.id}`}>
        <div>
          <img
            width={200}
            className='bg-gray-200 mx-auto rounded-md hover:scale-125 hover:bg-blue-100 transition-all duration-200 cursor-pointer mb-2'
            src={item.thumbnail}
            alt={item.title}
          />
        </div>
      </Link>

      <div className="flex justify-between w-full">
        <div className='flex flex-col w-[130px]'>
          <p>{item.id}</p>
          <h1>{item.title}</h1>
          <p>${item.price}</p>
        </div>

        <div className='flex flex-col gap-2 mt-3 relative items-center'>

          <IoEyeOutline
            onClick={handleClick}
            className='bg-[#c4c0c4] rounded-full border-none hover:bg-green-400 text-white w-[25px] h-[25px] cursor-pointer'
          />

          <div className="relative">
            <button
              onClick={() => handleAddToCart()}
              className=" w-full  bg-black text-white cursor-pointer "
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Card;
