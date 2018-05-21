import React, { Component } from 'react';
import './cart.css';
import {connect} from 'react-redux';

import {actionRemoveFromCart} from "../../../actions/actions.js";

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
                            <p>${item.quantity * item.product.price}</p>
                            <button 
                                onClick={ e => {
                                    this.props.dispatch(actionRemoveFromCart(item.product));
                                }}>
                                Remove Item
                            </button>
                        </li> 
                    )}
                </ul>
                <p>Total Cost: ${this.props.totalPrice.toFixed(2)}</p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart.present,
        products: state.products,
        totalPrice: state.totalPrice.present
    }
}

export default connect(mapStateToProps)(Cart);
