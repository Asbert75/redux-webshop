import React, { Component } from 'react';
import {connect} from 'react-redux';
import './login.css';

import {actionHandleLogin} from '../../../actions/actions.js';
import {actionHandleLogout} from '../../../actions/actions.js'

class Login extends Component {
    render() {
        return (
            <div className="Login">
            { this.props.admin ?
              <button onClick={ e => {
                    this.props.dispatch(actionHandleLogout());
                }}>Logout</button>
              :
              <button onClick={ e => {
                    this.props.dispatch(actionHandleLogin());
                }}>Login as admin</button>
            }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      admin: state.admin
    }
}

export default connect(mapStateToProps)(Login);
