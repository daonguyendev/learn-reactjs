import React, { Component } from 'react';

class Section extends Component {
    constructor(props) {
        super(props);
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
                    </div>
                    </div>
                </div>
                </div>
            </section>
        );
    }
}

export default Section;