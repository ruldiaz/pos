
const initialState = {
    users: [],
    items: []
};

function rootReducer( state = initialState, action ){
    switch(action.type){
        case 'GET_USERS':
            return {
                ...state,
                users: action.payload
            };
        case 'GET_ITEMS':
            return {
                ...state,
                items: action.payload
            };
        default:
            return state;
    }
};

export default rootReducer;