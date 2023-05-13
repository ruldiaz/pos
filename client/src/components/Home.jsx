import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../actions';

export default function Home(){

    const dispatch = useDispatch();
    const allUsers = useSelector( state => state.users );

    useEffect(()=>{
        dispatch( getUsers() );
    }, [dispatch])

    function handleClick(e){
        e.preventDefault();
        dispatch( getUsers() );
    };

    return (
        <div>
            <Link to='/user'>Create User</Link>
            <h1>POS</h1>
            <button onClick={handleClick}>Refresh</button>
            <div>
                <select>
                    <option value='asc'>Ascending</option>
                    <option value='desc'>Descending</option>
                </select>
                <select>
                    <option value='all'>All</option>
                    <option value='user'>User Role</option>
                    <option value='admin'>Admin Role</option>
                    <option value='sales'>Sales Role</option>
                </select>
            </div>
        </div>
    );

};
