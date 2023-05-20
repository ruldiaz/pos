import React from 'react';


export default function OrdersCard(props){

    const { totalPrice, totalProducts } = props;

    return (
        <div className='flex justify-between items-center mb-3 border border-black rounded-lg p-4 w-80 mb-4'>
            <p className='flex justify-between'>
                <div className='flex flex-col'>
                    <span className='font-light'>{'18.05.2023'}</span>
                    <span className='font-light'>{totalProducts}</span>
                </div>
                
                <span className='font-medium text-2xl'>$ {totalPrice}</span>
            </p>
        </div>
    );
};