import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout';

export default function LandingPage(){
    return (
        <Layout>
            <h1>Welcome to my super Page</h1>
            <Link to='/home'>
                <button>Start</button>
            </Link>
        </Layout>
    );
};