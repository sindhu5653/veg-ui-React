import axios from 'axios';
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Review from '../review/Review';
import Description from '../description/Description';
import Images from '../images/Images';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { toast } from 'react-toastify';

const Productdetails = () => {

    const navigate = useNavigate()
    const params = useParams()
    console.log(params.id)
    const [products, setProducts] = useState();
    const [showDiscription, setShowDiscription] = useState(true)
    const [images, setImages] = useState(null);
    const [count, setCount] = useState(1);

    useEffect(() => {
        fetchProduct()
    }, [])

    async function fetchProduct() {
        try {
            const response = await axios(`https://dummyjson.com/products/${params.id}`);
            setProducts(response.data);
            console.log(response.data)
            setImages(response.data.images[0])
        }
        catch (error) {
            console.error(error);
        }
    }

    const addtocart=()=>{
        let cart=JSON.parse(localStorage.getItem('cart'))

        if(cart){
            let itemExist=cart.find(item=>item.productdata.productId===productdata.productId)
            if(itemExist){
                cart=cart.map(item=>{
                    if(item.productdata.productId===productdata.productId){
                        return{
                            ...item,
                            quantity:item.quantity+count
                        }
                    }
                    else{
                        return item
                    }
                })
                localStorage.setItem('cart',JSON.stringify(cart))
            }
            else{
                cart=[
                     ...cart,
                    {
                      productdata,quantity:count  
                    }
                ]
                localStorage.setItem('cart',JSON.stringify(cart))
            }
        }
        else{
            cart=[{
                productdata,
                quantity:count
        }]

        // console.log(cart);
        localStorage.setItem('cart',JSON.stringify(cart))
        
        }
        toast.success("Added to Item")
    }


    return (
        <div>
            <div >
                <button
                    onClick={() => navigate('/')}
                    className='flex bg-[#2de089] text-black px-4 py-2 rounded hover:bg-black hover:text-green-500 mt-4 ml-4'>
                    <MdOutlineKeyboardArrowLeft className='size-6' />
                    Go Back</button>
            </div>
            <div className='flex flex-col lg:flex-row gap-10 lg:gap-20 justify-evenly'>
                <div>
                    {products && <Images images={products.images} selectImage={setImages} />}
                </div>

                <div className='flex flex-col lg:flex-row gap-10 lg:gap-20 items-center lg:items-start'>
                    <div className='w-[200px] flex flex-col items-center justify-center  text-center lg:text-left'>
                        {/* <h1 className='text-center text-3xl mt-3'>{products?.title}</h1> */}
                        <img className='w-[300px]' src={images} alt="selected" />
                        {/* <p>${products?.price}</p> */}
                        {/* <p className='mt-2'>{products?.description}</p> */}
                    </div>

                    <div>
                        <div className='flex flex-col'>
                            <h1 className='text-4xl mt-3'>{products?.title}</h1>
                            <div className='flex gap-80'>
                                {/* <p className='mt-6'>${count}</p> */}
                                <p className='mt-5 text-2xl'>${(products?.price * count)}</p>
                                <div className='flex gap-4 mt-10 border border-green-400 rounded-md'>
                                    <div className='border rounded-md w-[40px] h-[40px] text-center bg-[#2de089] text-white hover:bg-black hover:text-green-500'>
                                        <button className='text-2xl' onClick={() => setCount(count => count + 1)}>+</button>
                                    </div>
                                    <span className='text-1xl mt-2 font-semibold w-[20px] text-center rounded-md'>{count}</span>
                                    <div className='border rounded-md w-[40px] h-[40px] text-center  bg-[#2de089] text-white hover:bg-black hover:text-green-500'>
                                        <button className=' text-3xl' onClick={() => setCount(count => (count > 1 ? count - 1 : 1))}>-</button>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col sm:flex-row gap-4 w-full mt-6'>
                                <div className='bg-[#2de089] text-white px-2 py-3 font-semibold hover:bg-black hover:text-green-500'>
                                    <button className='w-[150px]'
                                        onClick={() => {addtocart()}}>Add to Cart</button>
                                </div>
                                <div className='bg-[#2de089] text-white px-2 py-3 font-semibold hover:bg-black hover:text-green-500'>
                                    <button className='w-[150px]'>Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='flex gap-20 justify-center mt-10 text-2xl text-gray-500 font-semibold mb-3'>
                <h2 onClick={() => setShowDiscription(true)} className='hover:text-green-500 hover:underline' >Description</h2>
                <h2 onClick={() => setShowDiscription(false)} className='hover:text-green-500 hover:underline' >Review </h2>
            </div>

            <div>
                {
                    showDiscription ? <Description /> : <Review />
                }
            </div>

        </div>
    );
}

export default Productdetails;
