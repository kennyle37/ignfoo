import React, { Component } from 'react';

class MobileNav extends Component {
  state = {
    value: 'latest'
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <select className="MobileNav--container" value={this.state.value} onChange={this.handleChange}>
        <option className="MobileNav--link" value="latest">Latest</option>
        <option className="MobileNav--link" value="videos">Videos</option> 
        <option className="MobileNav--link" value="articles">Articles</option>
      </select>
    )
  }
}

export default MobileNav;
