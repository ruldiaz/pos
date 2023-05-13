import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItems, getUsers } from '../../actions';
import Card from '../Card';
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
console.log(allItems)
    return (
        <Layout>
            Home 
            {
                allItems?.map( e => (
                    <Card key={e.id} category={e.category.name} image={e.images[0]} product={e.title} price={e.price} />
                ))
            }
        </Layout>
    );
};
