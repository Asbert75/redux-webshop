import React, { Component } from 'react';
import './hero.css';
import {connect} from 'react-redux';

class Hero extends Component {
    render() {
        return (
            <div className="Hero">
                <h2>Redux Webshop</h2>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        state
    }
}

export default connect(mapStateToProps)(Hero);
