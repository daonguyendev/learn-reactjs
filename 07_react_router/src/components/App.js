import React, { Component } from 'react';
import './../css/App.css';
import Nav from './Nav';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Home/>
      </div>
    );
  }
}

export default App;
