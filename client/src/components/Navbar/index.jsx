import React, { useEffect } from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { filterByCategory } from '../../actions';
import { useDispatch } from 'react-redux';

export default function Navbar(){
    const dispatch = useDispatch();
    const activeStyle =  'underline underline-offset-4';
    const cartCount = useSelector( state => state.count );

    function handleFilterCategory(payload){
        dispatch( filterByCategory(payload) );
    }

    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink to='/'
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/home'
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                        onClick={()=>handleFilterCategory('all')}
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/clothes'
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                        onClick={()=>handleFilterCategory('clothes')}
                    >
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/electronics'
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                        onClick={()=>handleFilterCategory('electronics')}
                    >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/furnitures'
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                        onClick={()=>handleFilterCategory('furniture')}
                    >
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/toys'
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                        onClick={()=>handleFilterCategory('toys')}
                    >
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/others'
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                        onClick={()=>handleFilterCategory('others')}
                    >
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                     rulhdiaz@gmail.com
                </li>
                <li>
                    <NavLink to='/my-orders'
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-account'
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/sign-in'
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Sign In
                    </NavLink>
                </li>
                <li className='flex'>
                    <ShoppingCartIcon className="h-6 w-6 text-black"></ShoppingCartIcon>
                    <div>{cartCount}</div> 
                </li>
            </ul>
        </nav>
    );
};