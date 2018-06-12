import React, { Component } from 'react';

class AppContent extends Component {

    //--- Updation -> with props
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps of AppContent.js is running! ' + nextProps.name);
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate of AppContent.js is running!');
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate of AppContent.js is running!');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate of AppContent.js is running!');
    }

    updateState = () => {
        this.setState({
        status:"Updated status!"
        });
    }
    //---
        

    render() {
        console.log('Render of AppContent.js is running!');
        return ( 
            <div>
                <h4>{this.props.name}</h4>
            </div>
        );
    }
}

export default AppContent;