import React, { Component } from 'react';

class MobileNav extends Component {
  state = {
    value: 'Latest'
  }

  //change the view of our app depending on our nav selection
  handleChange = (e) => {
    this.setState({
      value: e.target.value
    }, () => this.props.handleCurrentView(this.state.value))
  }

  render() {
    return (
      <select className="MobileNav--container" value={this.state.value} onChange={this.handleChange}>
        <option className="MobileNav--link" value="Latest">Latest</option>
        <option className="MobileNav--link" value="Videos">Videos</option> 
        <option className="MobileNav--link" value="Articles">Articles</option>
      </select>
    )
  }
}

export default MobileNav;
