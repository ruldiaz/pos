
const initialState = {
    users: [],
    items: [],
    count: 0, // shopping cart counter on top of home to the right
    isProductDetailOpen: false, // controls open close of detail aside
    productToShow: {}
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
        case 'ADD_COUNT':
            return {
                ...state,
                count: state.count + 1
            };
        case 'SUB_COUNT':
            return {
                ...state,
                count: state.count - 1
            };
        case 'OPEN_PRODUCT_DETAIL':
            return {
                ...state,
                isProductDetailOpen: action.payload
            };
        case 'CLOSE_PRODUCT_DETAIL':
            return {
                ...state,
                isProductDetailOpen: action.payload
            };
        case 'SHOW_PRODUCT':
            return {
                ...state,
                productToShow: action.payload
            };
        default:
            return state;
    }
};

export default rootReducer;