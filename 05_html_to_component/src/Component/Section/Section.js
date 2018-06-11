import React, { Component } from 'react';

class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStatus : 0
        }
    }

    clickEditButton = () => {
        this.setState({currentStatus : 1});
    }

    clickSaveButton = () => {
        this.setState({currentStatus : 0});
    }

    renderButton = () => {
        return (
            <div className="row">
                <div className="btn btn-group">
                <div className="btn btn-info" onClick={() => this.clickEditButton()}>Edit</div>
                <div className="btn btn-danger">Remove</div>
                </div>
            </div>
        )
    }

    renderForm = () => {
        return (
            <div className="row">
                <div className="form-group">
                    <input type="text" name="name" className="form-control"/>   
                    <div className="btn btn-success" onClick={() => this.clickSaveButton()}>Save</div>                       
                </div>
            </div> 
        )
    }

    checkDisplay = () => {
        if (this.state.currentStatus === 0) {
            return this.renderButton();
        } else {
            return this.renderForm();
        }
    }

    render() {
        return (
            <section>
                <div className="container">
                <div className="row align-items-center">
                    <div className={"col-lg-6 " + this.props.firstPosition}>
                    <div className="p-5">
                        <img className="img-fluid rounded-circle" src={this.props.image} alt />
                    </div>
                    </div>
                    <div className={"col-lg-6 " + this.props.secondPosition}>
                    <div className="p-5">
                        <h2 className="display-4">{this.props.title}</h2>
                        <p>{this.props.description}</p>
                        
                        {this.checkDisplay()}
                        
                    </div>
                    </div>
                </div>
                </div>
            </section>
        );
    }
}

export default Section;