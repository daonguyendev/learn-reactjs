import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


/**
 * Map ~ Foreach
 */
const numbersArray01 = [1,2,3];
const numbersArray02 = numbersArray01.map((numsArr01) => numsArr01*2 + " ");

const numbersArray03 = numbersArray01.map((numsArr01) => (
    <li>Number: {numsArr01} </li>
));

class NumbersArray extends Component {
  render() {
    return (
      <div>
        {numbersArray02}
        <br/>
        {numbersArray03}
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
          <NumbersArray/>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
