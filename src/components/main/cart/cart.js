import React, { Component } from 'react';
import './cart.css';
import {connect} from 'react-redux';

import {actionRemoveFromCart} from "../../../actions/actions.js";

class Cart extends Component {
    render() {
        return (
            <div className="Cart">
                <h3>Your Cart</h3>
                <p>Total Cost: ${this.props.totalPrice.toFixed(2)}</p>
                <ul>
                    { this.props.cart.map( item =>
                        <li key={item.product.id}>
                            <img src={item.product.thumbnail} />
                            <p>{item.product.name}</p>
                            <p>Quantity: {item.quantity}</p>
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
