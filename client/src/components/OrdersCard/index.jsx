import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

export default function OrdersCard(props){

    const { totalPrice, totalProducts } = props;

    return (
        <div className='flex justify-between items-center mb-3 border border-black rounded-lg p-4 w-80'>
            <p className='flex justify-between w-full'>
                <div className='flex flex-col'>
                    <span className='font-light'>{'18.05.2023'}</span>
                    <span className='font-light'>{totalProducts} articles </span>
                </div>
                <div>
                    <span className='font-medium text-2xl'>$ {totalPrice}</span>
                    <ChevronRightIcon className='h-6 w-6 text-black cursor-pointer'></ChevronRightIcon>
                </div>
                
            </p>
        </div>
    );
};