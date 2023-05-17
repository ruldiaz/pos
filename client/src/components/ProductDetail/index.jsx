import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { closeProductDetail } from '../../actions';
import './styles.css';

export default function ProductDetail(){

    const isProductDetail = useSelector( state => state.isProductDetailOpen );

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
                    <XMarkIcon className="h-6 w-6 text-black"></XMarkIcon>
                </div>
            </div>
        </aside>
    );
};