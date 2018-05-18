import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from "./reducers/reducers.js";

const initialState = {
    loadingProducts: true,
    products: [{ 
        id: 1,
        name: "Stuff",
        price: "5.99",
        description: "Webbshoppen ska erbjuda flera produkter, som ni hittar på. Användaren ska kunna se vilka produkter som säljs.",
        thumbnail: "https://images.yourstory.com/2016/08/125-fall-in-love.png",
        stock: 2,
    }, { 
        id: 2,
        name: "Stuff 2",
        price: "15.00",
        description: "Webbshoppen ska erbjuda flera produkter, som ni hittar på. Användaren ska kunna se vilka produkter som säljs.",
        thumbnail: "https://images.yourstory.com/2016/08/125-fall-in-love.png",
        stock: 4
    }, { 
        id: 3,
        name: "Stuff 3",
        price: "5.00",
        description: "Webbshoppen ska erbjuda flera produkter, som ni hittar på. Användaren ska kunna se vilka produkter som säljs.",
        thumbnail: "https://images.yourstory.com/2016/08/125-fall-in-love.png",
        stock: 7
    }, { 
        id: 4,
        name: "Stuff 4",
        price: "7.50",
        description: "Webbshoppen ska erbjuda flera produkter, som ni hittar på. Användaren ska kunna se vilka produkter som säljs.",
        thumbnail: "https://images.yourstory.com/2016/08/125-fall-in-love.png",
        stock: 1
    }, { 
        id: 5,
        name: "Stuff 5",
        price: "99.99",
        description: "Webbshoppen ska erbjuda flera produkter, som ni hittar på. Användaren ska kunna se vilka produkter som säljs.",
        thumbnail: "https://images.yourstory.com/2016/08/125-fall-in-love.png",
        stock: 0
    }],
    cart: [{ 
        product: {
            id: 5,
            name: "Stuff 5",
            price: "99.99",
            description: "Webbshoppen ska erbjuda flera produkter, som ni hittar på. Användaren ska kunna se vilka produkter som säljs.",
            thumbnail: "https://images.yourstory.com/2016/08/125-fall-in-love.png",
        }, 
        quantity: 5 
    }, { 
        product: {
            id: 4,
            name: "Stuff 4",
            price: "7.50",
            description: "Webbshoppen ska erbjuda flera produkter, som ni hittar på. Användaren ska kunna se vilka produkter som säljs.",
            thumbnail: "https://images.yourstory.com/2016/08/125-fall-in-love.png",
        }, 
        quantity: 2 
    }],
    productView: "compact",
    actionHistory: []
}

const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render((<Provider store={store}><App /></Provider>), document.getElementById('root'));