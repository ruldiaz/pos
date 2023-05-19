import React from 'react';


export default function OrdersCard(props){

    const { totalPrice, totalProducts } = props;

    return (
        <div className='flex justify-between items-center mb-3 border border-black'>
            <p>
                <span>{'18.05.2023'}</span>
                <span>{totalProducts}</span>
                <span>{totalPrice}</span>
            </p>
        </div>
    );
};