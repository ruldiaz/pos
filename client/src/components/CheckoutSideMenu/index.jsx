import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { closeCheckoutSideMenu } from '../../actions';
import './styles.css';
import OrderCard from '../OrderCard';

export default function CheckoutSideMenu(){

    const isCheckoutSideMenuOpen = useSelector( state => state.isCheckoutSideMenuOpen );

    const cartProducts = useSelector( state => state.cartProducts );

    const dispatch = useDispatch();

    function handleCloseCheckoutSideMenu(e){
        e.preventDefault();
        dispatch( closeCheckoutSideMenu() );
    }

    return (
        <aside className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div onClick={handleCloseCheckoutSideMenu}>
                    <XMarkIcon className='h-6 w-6 text-black cursor-pointer'></XMarkIcon>
                </div>
            </div>
            <div className='px-6 overflow-y-scroll'>
                {
                    cartProducts?.map( product => {
                        return <OrderCard 
                        key={product.id}
                        title={product.title} 
                        imageUrl={product.images} 
                        price={product.price} />
                    })
                }
            </div>
        </aside>
    );
};