import React, { Component } from 'react';
import {connect} from 'react-redux';

import {actionAddToCart} from '../../../actions/actions.js';

class Compact extends Component {
    render() {
        return (
            <ul className="Compact">
            { this.props.productList.map( (product, index) =>
                <li key={index}>
                    <img src={product.thumbnail} alt="Thumbnail" />
                    <h3>{product.name}</h3>
                    <p className="description">{product.description}</p>
                    <p className={ product.stock === 0 ? "outOfStock" : "inStock" }>Stock: {product.stock}</p>
                    <button
                        className="btnBuy"
                        disabled={product.stock === 0}
                        onClick={ e => {
                            this.props.dispatch(actionAddToCart(product));
                        }}>
                        <p className="price">${product.price}</p><p className="buyText">
                        {  product.stock === 0 ? "N/A" : "Buy"}
                        </p>
                    </button>
                </li>
            )}
            </ul>
        );
    }
}

const mapStateToProps = state => {
    return {
        productList: state.products.present
    }
}

export default connect(mapStateToProps)(Compact);
