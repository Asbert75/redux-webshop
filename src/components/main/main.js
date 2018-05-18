import React, { Component } from 'react';
import './main.css';

import Products from "./products/products.js";
import History from "./history/history.js";
import Cart from "./cart/cart.js";

class Main extends Component {
    render() {
        return (
            <div className="Main">
                <History />
                <Products />
                <Cart />
            </div>
        );
    }
}

export default Main;
