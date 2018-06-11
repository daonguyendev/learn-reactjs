import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const name = "Dao";

/**
 * How to write jsx code: 
 * - Search html to jsx
 * - Paste html tag to this online tool
 * - Copy & Paste jsx code to component
 */
class MyName extends Component {
  render() {
    return (
      <div>
        <h3>My name is : {name}</h3>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"><MyName/></h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
