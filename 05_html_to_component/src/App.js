import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopMenu from './Component/TopMenu/TopMenu';
import Header from './Component/Header/Header';
import Section from './Component/Section/Section';
import Footer from './Component/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <TopMenu/>
        <Header/>
        <Section title="New 01"      
                  firstPosition="order-lg-1"
                  image="img/01.jpg"
                  description="This is description of new 01"/>
        <Section title="New 02" 
                  secondPosition="order-lg-2"
                  image="img/02.jpg"
                  description="This is description of new 02"/>
        <Section title="New 03"      
                  firstPosition="order-lg-1"
                  image="img/03.jpg"
                  description="This is description of new 03"/>
        <Footer/>
      </div>
    );
  }
}

export default App;
