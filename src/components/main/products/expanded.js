import React, { Component } from 'react';
import {connect} from 'react-redux';

import {actionAddToCart} from '../../../actions/actions.js';

class Expanded extends Component {
    render() {
        return ( 
            <ul className="Expanded">
            { this.props.products.map( (product, index) => 
                <li key={index}>
                    <img src={product.thumbnail} alt="Thumbnail" />
                    <h3>{product.name}</h3>
                    <p className="description">{product.description}</p>
                    <div className="pricing">
                        <p className={ product.stock === 0 ? "outOfStock" : "inStock" }>Stock: {product.stock}</p>
                        <p>${product.price}</p>
                    </div>
                    <button
                        className="btnBuy"
                        disabled={product.stock === 0}
                        onClick={ e => { 
                            this.props.dispatch(actionAddToCart(product));
                        }}>
                        Buy
                    </button>
                </li>
            )}
            </ul>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(Expanded);
