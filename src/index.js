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
        name: "Megalomania",
        price: 74.99,
        description: "Webbshoppen ska erbjuda flera produkter, som ni hittar på. Användaren ska kunna se vilka produkter som säljs.",
        thumbnail: "https://images.yourstory.com/2016/08/125-fall-in-love.png",
        stock: 2,
    }, { 
        id: 2,
        name: "Dark Souls 2",
        price: 17.89,
        description: "Webbshoppen ska erbjuda flera produkter, som ni hittar på. Användaren ska kunna se vilka produkter som säljs.",
        thumbnail: "https://images.yourstory.com/2016/08/125-fall-in-love.png",
        stock: 4
    }, { 
        id: 3,
        name: "God of War",
        price: 69.99,
        description: "Webbshoppen ska erbjuda flera produkter, som ni hittar på. Användaren ska kunna se vilka produkter som säljs.",
        thumbnail: "https://images.yourstory.com/2016/08/125-fall-in-love.png",
        stock: 7
    }, { 
        id: 4,
        name: "Die Hard",
        price: 25.55,
        description: "Webbshoppen ska erbjuda flera produkter, som ni hittar på. Användaren ska kunna se vilka produkter som säljs.",
        thumbnail: "https://images.yourstory.com/2016/08/125-fall-in-love.png",
        stock: 1
    }, { 
        id: 5,
        name: "World of Warcraft: Battle For Azeroth",
        price: 99.99,
        description: "Webbshoppen ska erbjuda flera produkter, som ni hittar på. Användaren ska kunna se vilka produkter som säljs.",
        thumbnail: "https://images.yourstory.com/2016/08/125-fall-in-love.png",
        stock: 0
    }],
    cart: [],
    totalPrice: 0,
    productView: "expanded",
    actionHistory: []
}

const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render((<Provider store={store}><App /></Provider>), document.getElementById('root'));