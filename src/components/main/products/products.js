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
            { !this.props.admin ?
                 !this.props.loadingProducts
                ?   <h3>Loading Products...</h3>
                :
                    <React.Fragment>
                        <div className="viewOpts">
                            <button disabled={this.props.productView === "expanded"} onClick={ e => this.props.dispatch(actionChangeProductView("expanded"))}>Expanded</button>
                            <button disabled={this.props.productView === "compact"} onClick={ e => this.props.dispatch(actionChangeProductView("compact"))}>Compact</button>
                        </div>
                        { this.props.productView === "expanded"
                        ?   <Expanded />
                        : this.props.productView === "compact"
                        ?   <Compact />
                        : <p>An Error Occured!</p>
                        }
                    </React.Fragment>
                 : null
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
