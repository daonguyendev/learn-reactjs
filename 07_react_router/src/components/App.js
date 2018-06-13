import React, { Component } from 'react';
import './../App.css';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Footer from './Footer';
import News from './News';
import Details from './Details';
import Contact from './Contact';
import RouterURL from '././../router/RouterURL';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav/>
          {/* <Home/> */}
          {/* <News/> */}
          {/* <Details/> */}
          {/* <Contact/> */}

          <RouterURL/>

          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
