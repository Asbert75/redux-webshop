import React, { Component } from 'react';
import './App.css';

import Hero from './components/hero/hero.js';
import Main from './components/main/main.js';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Hero />
                <Main />
            </div>
        );
    }
}

export default App;
