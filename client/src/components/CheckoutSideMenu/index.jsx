import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { checkoutOrder, clearShoppingCart, closeCheckoutSideMenu, deleteProductFromShoppingCart } from '../../actions';
import './styles.css';
import OrderCard from '../OrderCard';
import { totalPrice } from '../../utils';   


export default function CheckoutSideMenu(){

    const isCheckoutSideMenuOpen = useSelector( state => state.isCheckoutSideMenuOpen );

    const cartProducts = useSelector( state => state.cartProducts );

    const dispatch = useDispatch();

    function handleCloseCheckoutSideMenu(e){
        e.preventDefault();
        dispatch( closeCheckoutSideMenu() );
    }

    function handleDelete(id){
        dispatch( deleteProductFromShoppingCart( id ));
    }

    function handleCheckout(){
        const currentDate = new Date();
        const day = currentDate.getDate();
        const month = currentDate.getMonth()+1;
        const year = currentDate.getFullYear();
        const formattedDate = day + '/' + month + '/' + year;

        const orderToAdd = {
            date: formattedDate,
            products: cartProducts,
            totalProducts: cartProducts.length,
            totalPrice: totalPrice(cartProducts)
        };

        dispatch( checkoutOrder( orderToAdd ) );
        dispatch( clearShoppingCart() );
    }

    return (
        <aside className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div onClick={handleCloseCheckoutSideMenu}>
                    <XMarkIcon className='h-6 w-6 text-black cursor-pointer'></XMarkIcon>
                </div>
            </div>
            <div className='px-6 overflow-y-scroll flex-1'>
                {
                    cartProducts?.map( (product, index) => {
                        return <OrderCard 
                        id={product.id}
                        key={index}
                        title={product.title} 
                        imageUrl={product.images} 
                        price={product.price}
                        handleDelete={handleDelete}
                         />
                    })
                }
            </div>
            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light'>Total: </span>
                    <span className='font-medium text-2xl'>$ {totalPrice(cartProducts).toLocaleString('en-US')}</span>   
                </p>
                <Link to='/my-orders/last'>
                    <button className='bg-black py-3 text-white w-full rounded-lg' onClick={handleCheckout} >Checkout</button>                
                </Link>

            </div>
        </aside>
    );
};