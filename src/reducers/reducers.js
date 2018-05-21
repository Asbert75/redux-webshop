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

let viewReducer = (state="simple", action) => {
    switch(action.type) {
        case "CHANGE_PRODUCT_VIEW":
            state = action.view;
            return state;

        default:
            return state;
    }
}

let priceReducer = (state=0, action) => {
    switch(action.type) {
        case "ADD_TO_CART":
            return state + action.product.price;

        case "REMOVE_FROM_CART":
            return state - action.product.price;

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

        case "ADD_TO_CART":
            return [...state.map( product => {
                if(product.id === action.product.id) {
                    product.stock -= 1;
                }

                return product;
            })];

        case "REMOVE_FROM_CART":
            return [...state.map( product => {
                if(product.id === action.product.id) {
                    product.stock += 1;
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
            item = state.findIndex( item => item.product.id === action.product.id);
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

let loginReducer = (state=true, action) => {
  switch(action.type){
    case "LOGIN":
      return !state
    case "LOGOUT":
      return !state
    default:
      return state
  }
}

let rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    totalPrice: priceReducer,
    loadingProducts: generalReducer,
    productView: viewReducer,
    actionHistory: generalReducer,
    admin: loginReducer,
})

export default rootReducer;
