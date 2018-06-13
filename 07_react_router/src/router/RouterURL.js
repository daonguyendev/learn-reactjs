import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import News from '../components/News';
import Home from '../components/Home';
import Details from '../components/Details';
import Contact from '../components/Contact';

class RouterURL extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/news" component={News}/>
                <Route exact path="/details" component={Details}/>
                <Route exact path="/contact" component={Contact}/>
            </div>
        );
    }
}

export default RouterURL;