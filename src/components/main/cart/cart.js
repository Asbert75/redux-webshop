import React, { Component } from 'react';
import './cart.css';
import {connect} from 'react-redux';

import {actionRemoveFromCart, actionUpdateStock} from "../../../actions/actions.js";

class Cart extends Component {
    render() {

        return (
            <div className="Cart">
                <h3>Your Cart</h3>
                <ul>
                    { this.props.cart.map( item => 
                        <li key={item.product.id}>
                            <p>Quantity: {item.quantity}</p>
                            <p>Product: {item.product.name}</p>
                            <button 
                                onClick={ e => {
                                    this.props.dispatch(actionRemoveFromCart(item.product.id));
                                    this.props.dispatch(actionUpdateStock(item.product.id, -1));
                                }}>
                                Remove Item
                            </button>
                        </li> 
                    )}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart,
        products: state.products
    }
}

export default connect(mapStateToProps)(Cart);
