import { Link } from 'react-router-dom';
import Card from '../../components/card/Card';


const Home = ({ data }) => {


    return (
        <div>

            <div className='relative w-full h-[400px]'>
                <img
                    className='w-full h-full object-cover'
                    src="https://plus.unsplash.com/premium_photo-1690216815967-6598e86662e5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="image" />
                <div className='absolute inset-0 flex flex-col items-center justify-center gap-2'>
                    <h1 className='text-4xl text-white'>Fresh Products on doorstep</h1>
                    <h4 className='text-lg text-white'>We deliver the products on your doorstep</h4>
                    <a href="#products">
                    <button className='text-white text-2xl font-bold bg-[#0da669] px-4 py-2 rounded-md hover:bg-black hover:text-[#0da669] cursor-pointer'>
                        View Products</button>
                        </a>
                        
                </div>
            </div>

            <div 
            id='products'
            className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mx-auto my-10 justify-center items-center'>
                {
                    data.map((item, index) => {
                        return <Card item={item} key={index} />
                    })
                }
            </div>
        </div>
    )
}

export default Home
