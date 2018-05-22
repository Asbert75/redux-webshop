import {combineReducers} from 'redux';

let actionReducer = (state=[], action) => {
    switch(action.type) {
        default:
            return [...state, action.type];
    }
}

let generalReducer = (state=[], action) => {
    switch(action.type) {
        default:
            return state;
    }
}

let viewReducer = (state="expanded", action) => {
    switch(action.type) {
        case "CHANGE_PRODUCT_VIEW":
            return action.view;

        default:
            return state;
    }
}

let priceReducer = (state={}, action) => {
    switch(action.type) {
        case "ADD_TO_CART":
            return {
                past: [...state.past, state.present],
                present: state.present + action.product.price,
                future: []
            };

        case "REMOVE_FROM_CART":
            return {
                past: [...state.past, state.present],
                present: state.present - action.product.price,
                future: []
            };

        case "UNDO_USER":
            const previousPrice = state.past[state.past.length - 1];
            const newPastPrice = state.past.slice(0, state.past.length - 1);
            return {
                past: newPastPrice,
                present: previousPrice,
                future: [state.present, ...state.future]
            }

        case "REDO_USER":
            const nextPrice = state.future[0];
            const newFuturePrice = state.future.slice(1);
            return {
                past: [...state.past, state.present],
                present: nextPrice,
                future: newFuturePrice
            }

        default:
            return state;
    }
}

let productsReducer = (state={}, action) => {
    switch(action.type) {
        case "ADMIN_ADD_PRODUCT":
            return {
                past: [...state.past, [...state.present]],
                present: [action.product, ...state.present],
                future: []
            };

        case "ADMIN_REMOVE_PRODUCT":
            return {
                past: [...state.past, [...state.present]],
                present: [...state.present.filter( product => product.id !== action.productid)],
                future: []
            };

        case "ADMIN_MODIFY_PRODUCT":
            return {
                past: [...state.past, [...state.present]],
                present: [...state.present.map( product => product.id === action.product.id ? action.product : product)],
                future: []
            };

        case "ADD_TO_CART":
            return {
                past: [...state.past, [...state.present]],
                present: state.present.map( product => {
                    if(product.id === action.product.id) {
                        product = {...product, stock: product.stock - 1 };
                    }

                    return product;
                }),
                future: []
            };

        case "REMOVE_FROM_CART":
            return {
                past: [...state.past, [...state.present]],
                present: [...state.present.map( product => {
                    if(product.id === action.product.id) {
                        product = {...product, stock: product.stock + 1 };
                    }

                    return product;
                })],
                future: []
            };

        case "UNDO_ADMIN":
            const previousAdmin = state.past[state.past.length - 1];
            const newPastAdmin = state.past.slice(0, state.past.length - 1);
            return {
                past: newPastAdmin,
                present: previousAdmin,
                future: [[...state.present], ...state.future]
            }

        case "REDO_ADMIN":
            const nextAdmin = state.future[0];
            const newFutureAdmin = state.future.slice(1);
            return {
                past: [...state.past, [...state.present]],
                present: nextAdmin,
                future: newFutureAdmin
            }

        case "UNDO_USER":
            const previousUser = state.past[state.past.length - 1];
            const newPastUser = state.past.slice(0, state.past.length - 1);
            return {
                past: newPastUser,
                present: previousUser,
                future: [[...state.present], ...state.future]
            }

        case "REDO_USER":
            const nextUser = state.future[0];
            const newFutureUser = state.future.slice(1);
            return {
                past: [...state.past, [...state.present]],
                present: nextUser,
                future: newFutureUser
            }

        default:
            return state;
    }
}

let cartReducer = (state={}, action) => {
    switch(action.type) {
        case "ADD_TO_CART":
            let item = state.present.findIndex( item => item.product.id === action.product.id);
            let cart = [...state.present];

            if(item >= 0) {
                let newItem = {...cart[item], quantity: cart[item].quantity + 1};
                cart[item] = newItem;
            }
            else {
                cart.push({product: action.product, quantity: 1});
            }

            return {
                past: [...state.past, [...state.present]],
                present: cart,
                future: []
            };

        case "REMOVE_FROM_CART":
            item = state.present.findIndex( item => item.product.id === action.product.id);
            cart = [...state.present];

            if(cart[item].quantity !== 1) {
                let newItem = {...cart[item], quantity: cart[item].quantity - 1};
                cart[item] = newItem;
            }
            else {
                cart.splice(item, 1);
            }

            return {
                past: [...state.past, [...state.present]],
                present: cart,
                future: []
            };

        case 'UNDO_USER':
            const previous = state.past[state.past.length - 1];
            const newPast = state.past.slice(0, state.past.length - 1);
            return {
                past: newPast,
                present: previous,
                future: [[...state.present], ...state.future]
            }

        case 'REDO_USER':
            const next = state.future[0];
            const newFuture = state.future.slice(1);
            return {
                past: [...state.past, [...state.present]],
                present: next,
                future: newFuture
            }

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

let changeTempReducer = (state={}, action) => {
  switch(action.type){
    case "CHANGE_TEMP":
      return Object.assign({...state}, action.product);
    case "SAVE_CHANGES":
      return {}
    case "CHANGE_NAME":
      return Object.assign({...state}, {}, {name: action.value });
    case "CHANGE_DESCRIPTION":
      return Object.assign({...state}, {}, {description: action.value });
    case "CHANGE_THUMBNAIL":
      return Object.assign({...state}, {}, {thumbnail: action.value });
    case "CHANGE_PRICE":
      return Object.assign({...state}, {}, {price: action.value });
    case "CHANGE_STOCK":
      return Object.assign({...state}, {}, {stock: action.value });
    case "CHANGE_ID":
      return Object.assign({...state}, {}, {id: action.value });
    default:
      return state;
  }
}

let toggleHistoryReducer = (state=false, action) => {
  switch(action.type){
    case "TOGGLE_HISTORY":
      console.log(action.show)
      return action.show;
    default:
      return state
    }
}

let cartViewReducer = (state=false, action) => {
    switch(action.type) {
        case "TOGGLE_CART":
            return !state;
        default:
            return state;
    }
}

let rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    totalPrice: priceReducer,
    loadingProducts: generalReducer,
    productView: viewReducer,
    actionHistory: actionReducer,
    admin: loginReducer,
    temp: changeTempReducer,
    showHistory: toggleHistoryReducer,
    showCart: cartViewReducer
})

export default rootReducer;
