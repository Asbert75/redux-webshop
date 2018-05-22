import React, { Component } from 'react';
import './history.css';
import {connect} from 'react-redux';

import {actionUndoUser, actionRedoUser} from '../../../actions/actions.js';

class History extends Component {
    render() {
        return (
            <div className="History">
                <ul>
                    { this.props.actionHistory.map( (action, index) => <li key={index}>{action}</li> )}
                </ul>
                <button disabled={!this.props.canUndo} onClick={ e => { this.props.dispatch(actionUndoUser()) }}>Step Backwards</button>
                <button disabled={!this.props.canRedo} onClick={ e => { this.props.dispatch(actionRedoUser()) }}>Step forward</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        actionHistory: state.actionHistory,
        canUndo: state.cart.past.length >= 1,
        canRedo: state.cart.future.length >= 1
    }
}

export default connect(mapStateToProps)(History);
