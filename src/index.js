import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './sass/index.scss';

import TopHeaderContainer from './top-header/TopHeaderContainer';
import SideNavDisplayContainer from './side-nav/SideNavDisplayContainer';
import SideSectionContainer from './side-section/SideSectionContainer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          {/* NEED TO REFACTOR FOR MOBILE/TABLET DISPLAY */}
          <div className="col-md-12 col-xs-12 TopHeader--container">
            <TopHeaderContainer title="Latest News" />
          </div>
        </div>

        {/* NEED TO REFACTOR FOR MOBILE/TABLET DISPLAY */}
        <div className="row">  
          <div className="col-md-3 col-xs-12 SideNav--container">
            <SideNavDisplayContainer />
          </div>

          <div className="col-md-6 col-xs-12 SideSection--container">
            <SideSectionContainer />
          </div>
          
          <div className="col-md-3 hide-sm-only hide-xs-only" />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
