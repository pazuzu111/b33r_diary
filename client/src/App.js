import React, { Component } from 'react';
import Controls from './Controls';

//assets
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  render() {
    return (
        <div className="App">
            <Controls />
        </div>
    );
  }
}

