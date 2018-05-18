import React, { Component } from 'react';
import './history.css';
import {connect} from 'react-redux';

class History extends Component {
    render() {
        return (
            <div className="History">
                <ul>
                    { this.props.actionHistory.map( (action, index) => <li key={index}>{action}</li> )}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        actionHistory: state.actionHistory
    }
}

export default connect(mapStateToProps)(History);
