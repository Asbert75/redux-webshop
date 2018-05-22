import React, { Component } from 'react';
import './history.css';
import {connect} from 'react-redux';

import {actionUndoUser, actionRedoUser, actionUndoAdmin, actionRedoAdmin, actionToggleHistory } from '../../../actions/actions.js';

class History extends Component {
    render() {
        return (
          <React.Fragment>
            <button id="toggleHistory" onClick={()=>{
              this.props.dispatch(actionToggleHistory(this.props.showHistory))
            }}>{!this.props.showHistory ? "Show history" : "Hide history"}</button>
            <div className={this.props.showHistory ? "History showHistory" : "History hideHistory"}>

              {  !this.props.admin ?
                <React.Fragment>
                  <button disabled={!this.props.canUndo} onClick={ e => { this.props.dispatch(actionUndoUser()) }}>◄ Undo</button>
                  <button disabled={!this.props.canRedo} onClick={ e => { this.props.dispatch(actionRedoUser()) }}>Redo ►</button>
                </React.Fragment> :
                <React.Fragment>
                  <button disabled={!this.props.products.past.length} onClick={ e => { this.props.dispatch(actionUndoAdmin()) }}>Undo</button>
                  <button disabled={!this.props.products.future.length}onClick={ e => { this.props.dispatch(actionRedoAdmin()) }}>Redo</button>
                </React.Fragment>
                }
                <ul>
                    { this.props.actionHistory.map( (action, index) => <li key={index}>{action}</li> )}
                </ul>
            </div>
          </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        actionHistory: state.actionHistory,
        canUndo: state.cart.past.length >= 1,
        canRedo: state.cart.future.length >= 1,
        products: state.products,
        admin: state.admin,
        showHistory: state.showHistory,
    }
}

export default connect(mapStateToProps)(History);
