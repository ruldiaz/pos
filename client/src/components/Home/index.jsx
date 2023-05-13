import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../actions';
import { Link } from 'react-router-dom';
import Card from '../Card';
import Layout from '../Layout';

export default function Home(){

    const dispatch = useDispatch();
    const totalUsers = useSelector( state => state.users.total );
    const allUsers = useSelector( state => state.users.users );

    useEffect(()=>{
        dispatch( getUsers() );
    }, [dispatch])

    function handleClick(e){
        e.preventDefault();
        dispatch( getUsers() );
    };

    return (
        <Layout>
            Home 
            <Card />
        </Layout>
    )
}
