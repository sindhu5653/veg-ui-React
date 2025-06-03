import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useParams } from 'react-router-dom'
import Review from '../review/Review';
import Description from '../description/Description';
import Images from '../images/Images';

const Productdetails = () => {
    const params = useParams()
    console.log(params.id)
    const [products, setProducts] = useState();
    const [review, setReview] = useState(false);
    const [description, setDescription] = useState(false);

    useEffect(() => {
        fetchProduct()
    }, [])

    async function fetchProduct() {
        try {
            const response = await axios(`https://dummyjson.com/products/${params.id}`);
            setProducts(response.data);
            console.log(response.data)

            
        }
        catch (error) {
            console.error(error);
        }
    }
    return (
        <div>
            <div className='flex justify-evenly'>
            <div>
            {products && <Images item={products} />}
            </div>

            <div className='flex gap-40'>
                <div className='w-[400px] flex flex-col items-center justify-center'>
                    <h1 className='text-center text-3xl mt-3'>{products?.title}</h1>
                    <img className='w-[300px]' src={products?.images?.[0]} alt="" />
                    <p>${products?.price}</p>
                    <p className='mt-2'>{products?.description}</p>
                </div>

                <div>
                    <div className='flex flex-col '>
                        <h1 className='text-5xl mt-3'>Products</h1>
                        <div className='flex gap-4 w-full mt-6'>
                            <div className='bg-green-500 text-white px-2 py-3 font-semibold hover:bg-black hover:text-green-500'>
                                <button>Add to Cart</button>
                            </div>
                            <div className='bg-green-500 text-white px-2 py-3 font-semibold hover:bg-black hover:text-green-500'>
                                <button>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <div className='flex gap-20 justify-center mt-10 text-2xl text-gray-500 font-semibold '>
                <h2 className='hover:text-green-500 hover:underline' onClick={() => setDescription(!description)}>Description</h2>
                <h2 className='hover:text-green-500 hover:underline' onClick ={() => setReview(!review)}>Review </h2>
            </div>

            {description && (
                <div>
                    <Description />
                </div>
            )}

            {review && (
                <div>
                    <Review />

                </div>
            )}
        </div>
    );
}

export default Productdetails;
