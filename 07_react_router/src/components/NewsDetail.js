import React, { Component } from 'react';

class NewsDetail extends Component {
    render() {
        console.log(this.props.match.params.slug);
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
                            <div className="screen">
                                {/* Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! */}
                                <img src="img/demo-screen-1.jpg" className="img-fluid" alt />
                            </div>
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
                <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <img src="http://placehold.it/1900x800" alt className="img-fluid" />
                    <p className="lead">Jumbo helper text</p>
                    <hr className="my-2" />
                    <p>Lorem ipsum dolor sit amet</p>
                    <p>Lorem ipsum dolor sit amet</p>
                    <p>Lorem ipsum dolor sit amet</p>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                </div>
                <div className="container">
                <h4 className="card-title text-center">Related News</h4>
                <div className="row">
                    <div className="col-12">
                    <div className="card-deck">
                        <div className="card">
                        <a href="/details"><img className="card-img-top" src="http://placehold.it/500x300/" alt /></a>
                        <div className="card-body">
                            <h4 className="card-title">Title</h4>
                            <p className="card-text">Text</p>
                        </div>
                        </div>
                        <div className="card">
                        <a href="/details"><img className="card-img-top" src="http://placehold.it/500x300/" alt /></a>
                        <div className="card-body">
                            <h4 className="card-title">Title</h4>
                            <p className="card-text">Text</p>
                        </div>
                        </div>
                        <div className="card">
                        <a href="/details"><img className="card-img-top" src="http://placehold.it/500x300/" alt /></a>
                        <div className="card-body">
                            <h4 className="card-title">Title</h4>
                            <p className="card-text">Text</p>
                        </div>
                        </div>
                        <div className="card">
                        <a href="/details"><img className="card-img-top" src="http://placehold.it/500x300/" alt /></a>
                        <div className="card-body">
                            <h4 className="card-title">Title</h4>
                            <p className="card-text">Text</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default NewsDetail;