import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './sass/index.scss';

import TopHeaderContainer from './top-header/TopHeaderContainer';
import SideNavDisplayContainer from './side-nav/SideNavDisplayContainer';
import SideSectionContainer from './side-section/SideSectionContainer';

class App extends Component {
  state = {
    view: 'Latest',
  }

  //get the view of our current page and store it in state
  handleCurrentView = (e) => {
    document.querySelector('.active').classList.remove('active');
    e.currentTarget.classList.add('active');
    const selection = e.currentTarget.querySelector('.SideNav--card-description').textContent;
    this.setState({
      view: selection  
    })
  }

  render() {
    const view = this.state.view.toLowerCase();

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-xs-12 TopHeader--container">
            <TopHeaderContainer mobileTitle="Latest" pcTitle="News" />
          </div>
        </div>

        <div className="row">  
          <div className="col-md-3 col-xs-12 SideNav--container">
            <SideNavDisplayContainer handleCurrentView={this.handleCurrentView} />
          </div>

          <div className="col-md-6 col-xs-12 SideSection--container">
            <SideSectionContainer view={view} />
          </div>
          
          <div className="col-md-3 hide-sm-only hide-xs-only" />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
