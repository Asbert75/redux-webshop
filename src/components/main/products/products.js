import React, { Component } from 'react';
import './products.css';
import {connect} from 'react-redux';

import {actionChangeProductView} from '../../../actions/actions.js';

import Compact from "./compact.js";
import Expanded from "./expanded.js";

class Products extends Component {
    render() {
        return (
            <div className="Products">
            {   !this.props.loadingProducts
                ?   <h3>Loading Products...</h3>
                :
                <React.Fragment>
                    <div className="viewOpts">
                        <button disabled={this.props.productView === "expanded"} onClick={ e => this.props.dispatch(actionChangeProductView("expanded"))}><p>Expanded</p></button>
                        <button disabled={this.props.productView === "compact"} onClick={ e => this.props.dispatch(actionChangeProductView("compact"))}><p>Compact</p></button>
                    </div>
                    { this.props.productView === "expanded"
                    ?   <Expanded />
                    : this.props.productView === "compact"
                    ?   <Compact />
                    : <p>An Error Occured!</p>
                    }
                </React.Fragment>
            }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loadingProducts: state.loadingProducts,
        productView: state.productView,
        admin: state.admin,
    }
}

export default connect(mapStateToProps)(Products);
