import React, { Component } from 'react';

class NewItems extends Component {
    constructor(props) {
        super(props);
        
    }
    

    render() {
        return (
            <div className="col-4">
              <div className="card-deck">
                <div className="card">
                  <div className="card-img-top">
                    <a href="/details"><img src={this.props.image} alt="For react router" className="img-fluid" /></a>
                    <div className="card-body">
                      <h4 className="card-title"><a href="/details">{this.props.title}</a></h4>
                      <p className="card-text">{this.props.quote}</p>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
            </div>
        );
    }
}

export default NewItems;