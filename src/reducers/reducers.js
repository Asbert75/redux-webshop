import {combineReducers} from 'redux';

let generalReducer = (state={}, action) => {
    switch(action.type) {
        case "UNDO":
            // TODO
            return state;

        default:
            return state;
    }
}

let productsReducer = (state=[], action) => {
    switch(action.type) {
        case "ADMIN_ADD_PRODUCT":
           return [...state, action.product];

        case "ADMIN_REMOVE_PRODUCT":
           return [...state.filter( product => product.id !== action.productid)];

        case "ADMIN_MODIFY_PRODUCT":
           return [...state.map( product => product.id === action.product.id ? action.product : product)];

        case "UPDATE_STOCK":
            return [...state.map( product => { 
                if(product.id === action.productid) {
                    product.stock -= action.quantity;
                }

                return product;
            })];

        default:
            return state;
    }
}

let cartReducer = (state=[], action) => { 
    switch(action.type) {
        case "ADD_TO_CART":
            let item = state.findIndex( item => item.product.id === action.product.id);
            let cart = [...state];

            if(item >= 0) {
                cart[item].quantity += 1;
            }
            else {
                cart.push({product: action.product, quantity: 1});
            }

            return cart;

        case "REMOVE_FROM_CART":
            item = state.findIndex( item => item.product.id === action.productid);
            cart = [...state];

            if(cart[item].quantity !== 1) {
                cart[item].quantity -= 1;
            }
            else {
                cart.splice(item, 1);
            }

            return cart;

        default:
            return state;
    }
}

let rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    loadingProducts: generalReducer,
    productView: generalReducer,
    actionHistory: generalReducer
})

export default rootReducer;