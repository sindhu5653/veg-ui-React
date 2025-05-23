import Card from '../../components/card/Card';


const Home = ({data}) => {
   

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mx-auto my-10 justify-center items-center'>
            {
                data.map((item, index) => {
                    return <Card item={item} key={index} />
                })
            }
        </div>
    )
}

export default Home
