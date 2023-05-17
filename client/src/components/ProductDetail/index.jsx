import React from 'react';
import './styles.css';

export default function ProductDetail(){
    return (
        <aside className='product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white'>
            <div className='flex justify-between items-center'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div>x</div>
            </div>
        </aside>
    );
};