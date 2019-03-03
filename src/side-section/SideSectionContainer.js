import React, { Component } from 'react';
import jsonp from 'jsonp';

import SectionCardContainer from './SectionCardContainer';

class SideSectionContainer extends Component {
  state = {
    data: [],
    articles: [],
    videos: [],
  }

  componentDidMount() {
    this.handleGetData();
  }

  //function that fetches our data depending on our current view
  handleGetData = () => {
    const url = 'https://ign-apis.herokuapp.com/content';
    
    jsonp(url, null, (err, data) => {
      if (err) {
        console.error(err.message);
      } else {
        this.setState({
          data
        }, () => this.handleDataFilter(this.state.data))
      }
    })
  }

  //function that filter out our content
  handleDataFilter = (info) => {
    let temp;

    info.data.filter(current => {
      if (current.contentType === 'article') {
        temp = this.state.articles;
        temp.push(current);
        this.setState({
          articles: temp
        })
      } else if (current.contentType === 'video') {
        temp = this.state.videos;
        temp.push(current);
        this.setState({
          videos: temp
        })
      }
      return current;
    })
    console.log('this is data', info)
  }

  //map function that spread out our view after we get it
  /*
  take in a view

  check what the current view is and map depending on that view
  */
  handleDataMap = () => {

  }

  render() {
    return (
      <div className="SideSection--row">
        <SectionCardContainer />
        <SectionCardContainer />
      </div>
    )
  }
}

export default SideSectionContainer;
