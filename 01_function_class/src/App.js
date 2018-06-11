import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/**
 * Normal function()
 */
function AppTitle() {
  return <h1 className="App-title">Welcome to React</h1>;
}

/**
 * Anonymous function()
 */
var AppIntro = function() {
  return (
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  );
}

/**
 * Arrow function()
 */
var AppLogo = () => (
  <img src={logo} className="App-logo" alt="logo" />
);

/**
 * Class -> shortcut: rcjc
 */
class AppHeader extends Component {
  render() {
    return (
      <header className="App-header">
        <AppLogo/>
        <AppTitle/>
      </header>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader/>
        <AppIntro/>
      </div>
    );
  }
}

export default App;
