import React, { Component } from 'react';
import './navigation.css';
import {connect} from 'react-redux';

import {actionToggleHistory, actionHandleLogin, actionHandleLogout, actionToggleCart} from '../../actions/actions.js';

class Navigation extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <button onClick={ e => { this.props.dispatch(actionToggleCart());}}><p>{ this.props.showCart ? "Hide Cart" : "View Cart" }</p></button>
                    </li>
                    <li>
                        <button id="toggleHistory" onClick={()=>{ this.props.dispatch(actionToggleHistory(this.props.showHistory)) }}>
                            <p>{!this.props.showHistory ? "Show history" : "Hide history"}</p>
                        </button>
                    </li>
                    <li>
                        { this.props.admin ?
                            <button onClick={ e => { this.props.dispatch(actionHandleLogout());}}><p>Logout</p></button>
                            :
                            <button onClick={ e => { this.props.dispatch(actionHandleLogin());}}><p>Login as admin</p></button>
                        }
                    </li>
                </ul>
            </nav>
        );
    }
}

const mapStateToProps = state => {
    return {
        showHistory: state.showHistory,
        admin: state.admin,
        showCart: state.showCart
    }
}

export default connect(mapStateToProps)(Navigation);
