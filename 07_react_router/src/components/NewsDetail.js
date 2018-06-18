import React, { Component } from 'react';
import Data from './Data.json';
import NewsRelated from './NewsRelated';

class NewsDetail extends Component {
    render() {
        // var x = 2;
        // var y = "2";
        // y = parseInt(y, 20);
        // if (x===y) {console.log("equals");}
        // console.log(typeof(y));

        // console.log(this.props.match.params.id);
        // console.log(typeof(this.props.match.params.id));

        var count = 1;

        console.log(this.props);

        return (
            <div>
                <header className="masthead">
                <div className="container h-100">
                    <div className="row h-100">
                    <div className="col-lg-7 my-auto">
                        <div className="header-content mx-auto">
                        <h1 className="mb-5">Details</h1>
                        </div>
                    </div>
                    <div className="col-lg-5 my-auto">
                        <div className="device-container">
                        <div className="device-mockup iphone6_plus portrait white">
                            <div className="device">
                            <div className="button">
                                {/* You can hook the "home button" to some JavaScript events or just remove it */}
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </header>
                {/* begin news-details */}
                
                {
                    Data.map((value, key) => {
                        console.log(typeof(value.id));
                        if(value.id == this.props.match.params.id) {
                            return (
                                <div className="jumbotron jumbotron-fluid">
                                    <div className="container">
                                        <img src={value.image} alt="true" className="img-fluid width-100" />
                                        <h3 className="lead">{value.title}</h3>
                                        <hr className="my-2" />
                                        {value.content}
                                    </div>
                                </div>
                            )
                        }
                    })
                }

                <div className="container">
                <h4 className="card-title text-center">Related News</h4>
                <div className="row">
                    <div className="col-12">
                    <div className="card-deck">
                        {
                            Data.map((value, key) => {
                                console.log(key);
                                if(value.id != this.props.match.params.id) {
                                    if (count <= 4) {
                                        count++;
                                        return (
                                            <NewsRelated key={key}
                                                        newsId={value.id}
                                                        image={value.image} 
                                                        title={value.title}
                                                        quote={value.quote}/>
                                        )
                                    }    
                                }
                                
                            })
                        }
                    </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default NewsDetail;