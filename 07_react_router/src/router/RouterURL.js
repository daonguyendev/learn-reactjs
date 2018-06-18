import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import News from '../components/News';
import Home from '../components/Home';
import NewsDetail from '../components/NewsDetail';
import Contact from '../components/Contact';

class RouterURL extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/news" component={News}/>
                <Route exact path="/news/:slug.:id.html" component={NewsDetail}/>
                <Route exact path="/contact" component={Contact}/>
            </div>
        );
    }
}

export default RouterURL;