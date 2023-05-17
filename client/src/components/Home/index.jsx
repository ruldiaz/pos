import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItems, getUsers } from '../../actions';
import Card from '../Card';
import ProductDetail from '../ProductDetail';
import Layout from '../Layout';

export default function Home(){

    const dispatch = useDispatch();
    const allItems = useSelector( state => state.items );

    useEffect(()=>{
        dispatch( getItems() );
    }, [dispatch])

    function handleClick(e){
        e.preventDefault();
        dispatch( getUsers() );
    };
//console.log(allItems)
    return (
        <Layout>
            Home !
            <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
            {
                allItems?.map( item => (
                    <Card key={item.id} data={item} />
                ))
            }
            </div>
        <ProductDetail />
        </Layout>
    );
};
