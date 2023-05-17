import React from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';
import { addCount, openProductDetail, showProduct } from '../../actions';
import { useDispatch } from 'react-redux';

export default function Card( data ){
    const dispatch = useDispatch();

    function handleAddClick(e){
        e.preventDefault();
        dispatch( addCount() );
    }

    function handleShowProductDetail(e){
        e.preventDefault();
        dispatch( openProductDetail() );
        dispatch( showProduct( data.data ) );
    }

    return (
        <div className='bg-white cursor-pointer w-56 h-60 rounded-lg' onClick={handleShowProductDetail}>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.data.category.name}</span>
                <img className='w-full h-full object-cover rounded-lg' src={data.data.images[0]} alt={data.data.title} />
                <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1' onClick={handleAddClick
                } >
                    <PlusIcon className="h-6 w-6 text-black"></PlusIcon>
                </div>
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>{data.data.title}</span>
                <span className='text-lg font-medium'>${data.data.price}</span>
            </p>
        </div>
    );
};