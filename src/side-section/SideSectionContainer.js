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
  handleDataMap = (list) =>
    list.map(item => {
      const url = item.thumbnails[0].url;
      const title = item.metadata.headline ? item.metadata.headline : item.metadata.title;
      return <SectionCardContainer 
        preview={url} 
        title={title}
      />
    })


  render() {
    let storage;
    const { articles, videos } = this.state;
    const { view } = this.props;

    if (view === 'articles') {
      storage = articles;
    } else if (view === 'videos') {
      storage = videos;
    } else {
      //need to fix for recent
      storage = articles;
    }

    return (
      <div className="SideSection--row">
        {this.handleDataMap(storage)}
      </div>
    )
  }
}

export default SideSectionContainer;
