import React, { Component } from 'react';
import './App.css';
import AppContent from './AppContent';

class App extends Component {
  //--- Initialization
  constructor(props) {
    super(props);
    this.state = {
      status : "init",
      status2 : "init2"
    }
  //---
  }

  //--- Mounting
  componentWillMount() {
    console.log('componentWillMount is running!')
  }

  componentDidMount() {
    console.log('componentDidMount is running!');
  }
  //---

  //--- Updation -> with state
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate is running!');
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate is running!');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate is running!');
  }

  updateState = () => {
    this.setState({
      status:"Updated status!",
      status2:"Updated status2!"
    });
  }
  //---

  render() {
    console.log('This is render function');
    console.log(this.state.status);
    return (
      <div className="App">
        <AppContent name={this.state.status2}/>
        <button onClick={() => this.updateState()}> Click to update state</button>
      </div>
    );
  }
}

export default App;
