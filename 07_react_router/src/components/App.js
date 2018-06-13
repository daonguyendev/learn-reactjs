import React, { Component } from 'react';
import './../App.css';

import Nav from './Nav';
import Home from './Home';
import Footer from './Footer';
import News from './News';
import Details from './Details';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        {/* <Home/> */}
        {/* <News/> */}
        {/* <Details/> */}
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
