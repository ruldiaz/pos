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