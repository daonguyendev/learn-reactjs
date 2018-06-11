import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/**
 * props way 1 - using function
 */
function AppHeader(props) {
  return (
    <header className="App-header">
      <img src={props.imageLink} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to {props.title}</h1>
    </header>
  );
}

/**
 * props way 2 - using class
 */
class AppIntro extends Component {
  render() {
    return (
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.<br/>
        Note: {this.props.note}
      </p>
    );
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
       <AppHeader title="React" imageLink={logo}/>
       <AppHeader title="Angular" imageLink="https://seeklogo.com/images/A/angular-logo-B76B1CDE98-seeklogo.com.png"/>
        <AppIntro note=" In class, react will self-understanding have props thought keyword this."/>
      </div>
    );
  }
}

export default App;
