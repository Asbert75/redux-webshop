import React, { Component } from 'react';
import './main.css';


import Products from "./products/products.js";
import History from "./history/history.js";
import Cart from "./cart/cart.js";
import Login from "./admin/login.js";
import AdminList from "./admin/adminList.js"

class Main extends Component {
    render() {
        return (
            <div className="Main">
                <Products />
                <AdminList />
                <Cart />
                <History />
                <Login />
            </div>
        );
    }
}

export default Main;
