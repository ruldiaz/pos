import React from 'react';

export default function Card({ name, role }){
    return (
        <div>
            <h3>{name}</h3>
            <h5>{role}</h5>
        </div>
    );
};