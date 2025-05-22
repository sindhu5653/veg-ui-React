import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../../components/card/Card';


const Home = ({data}) => {
   

    return (
        <div className='grid grid-cols-5 gap-5 mx-auto my-10 justify-center items-center'>
            {
                data.map((item, index) => {
                    return <Card item={item} key={index} />
                })
            }
        </div>
    )
}

export default Home
