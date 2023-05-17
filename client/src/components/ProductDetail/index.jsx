import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { closeProductDetail } from '../../actions';
import './styles.css';

export default function ProductDetail(){

    const isProductDetail = useSelector( state => state.isProductDetailOpen );

    const productDetail = useSelector( state => state.productToShow );

    console.log('product to show: ', productDetail);

    const dispatch = useDispatch();

    function handleCloseProductDetail(e){
        e.preventDefault();
        dispatch( closeProductDetail() );
    }

    return (
        <aside className={`${isProductDetail ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div onClick={handleCloseProductDetail}>
                    <XMarkIcon className='h-6 w-6 text-black cursor-pointer'></XMarkIcon>
                </div>
            </div>
            <figure className='px-6'>
                <img className='w-full h-full rounded-lg' src={productDetail.images[0]} alt={productDetail.title} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>$ {productDetail.price}</span>
                <span className='font-medium text-md'>{productDetail.title}</span>
                <span className='font-light text-sm'>{productDetail.description}</span>
            </p>
        </aside>
    );
};