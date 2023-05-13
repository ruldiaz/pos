import axios from 'axios';

export function getUsers(){
    return async function(dispatch){
        var json = await axios.get('http://localhost:3001/api/users');
        return dispatch({
            type: 'GET_USERS',
            payload: json.data
        });
    };
};

export function getItems(){
    return async function(dispatch){
        var json = await axios.get('https://api.escuelajs.co/api/v1/products');
        return dispatch({
            type: 'GET_ITEMS',
            payload: json.data
        });
    };
};