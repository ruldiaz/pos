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

export function addCount(){
    return ({
        type: 'ADD_COUNT',
    });
};

export function subCount(){
    return ({
        type: 'SUB_COUNT',
    });
};

export function openProductDetail(){
    return ({
        type: 'OPEN_PRODUCT_DETAIL',
        payload: true
    });
};

export function closeProductDetail(){
    return ({
        type: 'CLOSE_PRODUCT_DETAIL',
        payload: false
    });
};

export function showProduct(payload){
    return ({
        type: 'SHOW_PRODUCT',
        payload: payload
    });
};

export function addProductToShoppingcart(payload){
    return ({
        type: 'ADD_PRODUCT_TO_SHOPPING_CART',
        payload: payload
    });
};