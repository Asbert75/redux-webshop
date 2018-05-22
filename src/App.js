import React, { Component } from 'react';
import './App.css';

import Hero from './components/hero/hero.js';
import Main from './components/main/main.js';
import Navigation from './components/navigation/navigation.js';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navigation />
                <Hero />
                <Main />
            </div>
        );
    }
}

export default App;
