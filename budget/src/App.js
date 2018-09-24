import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Newshole">
        <header className="Newshole - Budget">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="Newshole: Budget">Welcome to Newshole:Budget</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
