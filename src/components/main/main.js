import React, { Component } from 'react';
import './main.css';
import {connect}from 'react-redux';

import Products from "./products/products.js";
import History from "./history/history.js";
import Cart from "./cart/cart.js";
import AdminList from "./admin/adminList.js"

class Main extends Component {
    render() {
        return (
            <div className="Main">
                { this.props.admin ? <AdminList /> : <Products /> }
                { this.props.showCart && <Cart /> }
                <History />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        admin: state.admin,
        showCart: state.showCart
    }
}

export default connect(mapStateToProps)(Main);
