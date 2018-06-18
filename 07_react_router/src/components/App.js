import React, { Component } from 'react';
import './../App.css';

import {BrowserRouter as Router} from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import RouterURL from '././../router/RouterURL';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav/>
          {/* <Home/> */}
          {/* <News/> */}
          {/* <NewsDetail/> */}
          {/* <Contact/> */}

          <RouterURL/>

          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
