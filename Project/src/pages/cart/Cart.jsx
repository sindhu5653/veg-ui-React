import { useEffect, useState } from 'react'
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePayment } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import coverimage from "../../assets/images/cover.jpg"
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Shipping from '../../components/shipping/Shipping';
import Payment from '../../components/payment/Payment';
import Success from '../../components/success/Success';

const Cart = () => {
    const [cartData, setCartData] = useState([]);
    const [showAll, setShowAll] = useState('cart');

    useEffect(() => {
        fetchLocalStorageData()
    }, [])

    useEffect(() => {
        if (cartData.length > 0) {
            calculateTotalCartQuantity()
        }
    }, [cartData])

    async function fetchLocalStorageData() {
        const data = localStorage.getItem('cart')
        setCartData(JSON.parse(data))
    }

    async function calculateTotalCartQuantity() {
        const totalQuantity = cartData.reduce((prev, curr) => {
            return prev + curr.quantity;
        }, 0);
        console.log(totalQuantity)
    }
    // const { id } = useParams();

    // useEffect(() => {
    //   const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    //   setCartData(storedCart);
    // }, []);

    // useEffect(() => {
    //   if (id) {
    //     checkAndAddToCart(id);
    //   }
    // }, [id]);

    // async function checkAndAddToCart(productId) {
    //   let cart = [...cartData];
    //   const productIdNum = Number(productId);

    //   const itemInCart = cart.find(
    //     (item) => item.productdata?.ProductId === productIdNum
    //   );

    //   if (itemInCart) {
    //     cart = cart.map((item) => {
    //       if (item.productdata.ProductId === productIdNum) {
    //         return {
    //           ...item,
    //           quantity: item.quantity + 1,
    //         };
    //       }
    //       return item;
    //     });

    //     setCartData(cart);
    //     localStorage.setItem('cart', JSON.stringify(cart));
    //     console.log('Incremented quantity for product:', productIdNum);
    //   } else {
    //     try {
    //       const response = await axios.get(
    //         `https://dummyjson.com/products/${productIdNum}`
    //       );

    //       const productdata = {
    //         ProductId: response.data.id,
    //         title: response.data.title,
    //         price: response.data.price,
    //         thumbnail: response.data.thumbnail,
    //       };

    //       const newItem = {
    //         productdata,
    //         quantity: 1,
    //       };

    //       cart = [...cart, newItem];
    //       setCartData(cart);
    //       localStorage.setItem('cart', JSON.stringify(cart));
    //       console.log('Product added to cart:', productdata);
    //     } catch (error) {
    //       console.error('Error fetching product:', error);
    //     }
    //   }
    // }

    // useEffect(() => {
    //     setCartData(JSON.parse(localStorage.getItem('cart')))
    //     fetchSingleProductFromDummyJson()
    // }, [])

    async function fetchSingleProductFromDummyJson() {
        const response = await axios.get(`https://dummyjson.com/products/${cartData.id}`)
        console.log(response.data)
    }
    return (
        <div>
            <div className='w-full h-[300px] relative '>
                <img
                    className='w-full h-[300px] object-cover'
                    src={coverimage} alt="cart image" />

                <h1
                    className='items-center justify-center  text-5xl text-white font-semibold absolute top-1/2 left-2/5 transform-translate-x-1/2 -translate-y-10/12 '>
                    My Cart</h1>
            </div>

            <div className='flex gap-20 items-center bg-white border border-gray-200 rounded-md mt-3 mx-auto w-fit px-2 py-4'>
                <div onClick={() => setShowAll('cart')} className='cursor-pointer'>
                    < HiOutlineShoppingCart className='size-6 mx-auto hover:text-green-500' />
                    <h1
                        className='text-sm '>My Cart</h1>
                </div>
                <div onClick={() => setShowAll('shipping')} className='cursor-pointer'>
                    <CiLocationOn className='size-6 mx-auto  hover:text-green-500' />
                    <h1 className='text-sm'>Shipping</h1>
                </div>
                <div onClick={() => setShowAll('payment')} className='cursor-pointer'>
                    <MdOutlinePayment className='size-6 mx-auto  hover:text-green-500' />
                    <h1 className='text-sm'>Payment</h1>
                </div>
                <div onClick={() => setShowAll('success')} className='cursor-pointer'>
                    <TiTick className='size-6 mx-auto  hover:text-green-500' />
                    <h1 className='text-sm'>Success</h1>
                </div>
            </div>


            <div className='mt-8 mx-auto w-fit border'>
                {showAll === 'cart' && (
                    <>
                        <div className='flex gap-10 p-4 border-b font-bold text-gray-700'>
                            <div className='w-[500px]'>Product</div>
                            <div className='w-[150px]'>Quantity</div>
                            <div className='w-[150px]'>Price</div>
                            <div>Total Price</div>
                        </div>

                        {cartData?.map((item, index) => (
                            <div key={item.product?.id || index} className='flex gap-10 p-4 border-b'>
                                <div className='flex items-center w-[500px]'>
                                    <img
                                        className='w-[80px] h-[80px] object-cover'
                                        src={item.product?.images?.[0]}
                                        alt="image" />
                                    <h1 className='font-semibold'>{item.product?.title}</h1>
                                </div>

                                
                                <div className='flex gap-20 '>
                                    <div className='flex items-center justify-center gap-2 border border-green-400 rounded-md w-fit h-fit mt-5 '>
                                    <button
                                        onClick={() => handleDecrement(index)}
                                        className='px-2 py-1 border rounded-md bg-[#2de089] text-white hover:bg-black hover:text-[#2de089]'
                                    >
                                        -
                                    </button>
                                    <span className='w-8 text-center'>{item.quantity}</span>
                                    <button
                                        onClick={() => handleIncrement(index)}
                                        className='px-2 py-1 border rounded-md bg-[#2de089] text-white hover:bg-black hover:text-[#2de089]'
                                    >
                                        +
                                    </button>
                                </div>

                                <div className='flex items-center w-[150px]'>
                                    <p>${item.product?.price}</p>
                                </div>
                                <div className='flex items-center'>
                                    <p>${(item.product?.price * item.quantity).toFixed(2)}</p>
                                </div>
                                </div>
                            </div>
                        ))}
                    </>
                )}
            </div>


            {showAll === 'shipping' && <Shipping setShowAll={setShowAll} />}
            {showAll === 'payment' && <Payment setShowAll={setShowAll} />}
            {showAll === 'success' && <Success setShowAll={setShowAll} />}

            {showAll === 'cart' && (
                <div className='flex justify-center gap-5 mt-8 mb-5 mx-auto'>
                    <button
                        className='border text-center rounded px-4 py-2 w-[100px] bg-[#2de089] text-white hover:bg-black hover:text-[#2de089]'
                        onClick={() => setShowAll('shipping')}>
                        Next
                    </button>
                </div>
            )}

        </div>
    );
};


export default Cart;
