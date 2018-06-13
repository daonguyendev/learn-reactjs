import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Data from './Data.json';

class News extends Component {
    render() {
        return (
            <div>
              <header className="masthead">
                <div className="container h-100">
                  <div className="row h-100">
                    <div className="col-lg-7 my-auto">
                      <div className="header-content mx-auto">
                        <h1 className="mb-5">News</h1>
                      </div>
                    </div>
                    <div className="col-lg-5 my-auto">
                      <div className="device-container">
                        <div className="device-mockup iphone6_plus portrait white">
                          <div className="device">
                            <div className="screen">
                              {/* Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! */}
                              <img src="img/demo-screen-1.jpg" className="img-fluid" alt="For react router" />
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
              {/* begin news */}
              <div className="container pt-3">
                <div className="row nt-3">

                  {
                    Data.map((value, key) => {
                      return (
                        <NewsItem key={key}
                        newsId={value.id}
                        image={value.image} 
                        title={value.title}
                        quote={value.quote}/>
                      )
                    })
                  }

                </div>
              </div>
            </div>
        );
    }
}

export default News;