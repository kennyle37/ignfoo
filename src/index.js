import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './sass/index.scss';

import TopHeaderContainer from './top-header/TopHeaderContainer';
import SideNavContainer from './side-nav/SideNavContainer';
import SideSectionContainer from './side-section/SideSectionContainer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-8 col-md-6 col-lg-12">
            <TopHeaderContainer title="Latest News" />
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
