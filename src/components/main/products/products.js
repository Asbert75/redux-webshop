import React, { Component } from 'react';
import './products.css';
import {connect} from 'react-redux';

import {actionAddToCart, actionUpdateStock} from '../../../actions/actions.js';

class Products extends Component {
    render() {
        return (
            <div className="Products">
                { !this.props.loadingProducts 
                ?   <h3>Loading Products...</h3>
                :   <ul className={this.props.productView}>
                        { this.props.products.map( (product, index) => 
                            <li key={index}>
                                <img src={product.thumbnail} alt="Thumbnail" />
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <p className={ product.stock === 0 ? "outOfStock" : "inStock" }>In stock: {product.stock}</p>
                                <p>{product.price}</p>
                                <button
                                    disabled={product.stock === 0}
                                    onClick={ e => { 
                                        this.props.dispatch(actionAddToCart(product));
                                        this.props.dispatch(actionUpdateStock(product.id, 1));
                                    }}>
                                    Add to Cart
                                </button>
                            </li>
                        )}
                    </ul>
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loadingProducts: state.loadingProducts,
        products: state.products,
        productView: state.productView
    }
}

export default connect(mapStateToProps)(Products);
