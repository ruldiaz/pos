import React from 'react';
import Layout from '../Layout';
import OrderCard from '../OrderCard';
import { useSelector } from 'react-redux';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

export default function MyOrder(){

    const order = useSelector( state => state.order );

    const currentPath = window.location.pathname;
    let index = currentPath.substring( currentPath.lastIndexOf('/') + 1);
    
    if( index === 'last' ){
        index = order?.length - 1
    }

    return (
        <Layout>
                <div className='flex items-center justify-center relative w-80'>
                    <Link to='/my-orders' className='absolute left-0'>
                        <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer' />
                    </Link>
                    <h1>My Order</h1>
                </div>
            <div className='flex flex-col w-80'>
                {
                    order?.[index]?.products.map( (product, index) => {
                        return <OrderCard 
                        id={product.id}
                        key={index}
                        title={product.title} 
                        imageUrl={product.images} 
                        price={product.price}
                         />
                    })
                }
            </div>
        </Layout>
    );
};