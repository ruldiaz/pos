import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItems, getUsers } from '../../actions';
import Card from '../Card';
import ProductDetail from '../ProductDetail';
import Layout from '../Layout';
import { filterByTitle } from '../../actions';

export default function Home(){

    const [ title, setTitle ] = useState("");

    const dispatch = useDispatch();
    const allItems = useSelector( state => state.items );
console.log({allItems})
    useEffect(()=>{
        dispatch( getItems() );
    }, [dispatch])

    function handleClick(e){
        e.preventDefault();
        dispatch( getUsers() );
    };

    function handleFilterByTitle(e){
        e.preventDefault();
        setTitle(e.target.value);
        console.log(title);
    };

    function handleSubmit(e){
        e.preventDefault();
        dispatch( filterByTitle(title) );
        setTitle("");
    }

//console.log(allItems)
    return (
        <Layout>
            <div className='flex items-center justify-center relative w-80 mb-4'>
                <h1 className='font-medium text-xl'>Exclusive Products</h1>
            </div>
            <input 
                type="text" 
                placeholder='Search a product...' 
                className='rounded-lg border-black w-80 p-4 mb-4 focus:outline-none'
                value={title}
                onChange={handleFilterByTitle}
                />
                <button type='submit' onClick={handleSubmit} >Search</button>
            <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
            {
                allItems?.map( (item, index) => (
                    <Card key={index} data={item} />
                ))
            }
            </div>
        <ProductDetail />
        </Layout>
    );
};
