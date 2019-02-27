import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './sass/index.scss';

import TopHeaderContainer from './top-header/TopHeaderContainer';
import SideNavContainer from './side-nav/SideNavCardContainer';
import SideSectionContainer from './side-section/SideSectionContainer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          {/* NEED TO REFACTOR FOR MOBILE/TABLET DISPLAY */}
          <div className="col-md-12 col-xs-12">
            <TopHeaderContainer title="Latest News" />
          </div>
        </div>

        {/* NEED TO REFACTOR FOR MOBILE/TABLET DISPLAY */}
        <div className="row">  
          <div className="box col-md-3 col-xs-12">SIDE NAV</div>
          <div className="box col-md-6 col-xs-12">SIDE SECTION</div>
          <div className="box col-md-3 hide-sm-only hide-xs-only">DEAD SPACE</div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
