import React, { Component } from 'react';
import jsonp from 'jsonp';
import moment from 'moment';
import SectionCardContainer from './SectionCardContainer';

class SideSectionContainer extends Component {
  state = {
    count: 12, //number of data we are querying for
    startIndex: 0,
    data: null, //needs to be an array
    latest: [],
    articles: [],
    videos: [],
  }

  componentDidMount() {
    this.handleGetData(this.state.startIndex, this.state.count); //get the startIndex and the count to start
    window.addEventListener('scroll', this.debounce(this.handleGetData, 500))
    // window.addEventListener('scroll', this.handleListScroll(this.handleGetData, this.de))
  }

  //import debounce function
  debounce = (fn, time) => {
    let timeout;

    return function() {
      const functionCall = () => fn.apply(this, arguments);

      clearTimeout(timeout);
      timeout = setTimeout(functionCall, time);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.view !== this.props.view) {
      //call handle get data
      //wait for it to get the data
      //then set the state to that data
      if (this.state.data.length > 12) {
        this.setState({
          count: 12, //number of data we are querying for
          startIndex: 0,
          data: null, //needs to be an array
          latest: [],
          articles: [],
          videos: [],
        }, () => this.handleGetData())
      }
    }
  }

  //function that fetches our data depending on our current view
  handleGetData = () => {
    console.log('iran')
    const { startIndex, count } = this.state;
    if (startIndex > 288) return;
    const url = `https://ign-apis.herokuapp.com/content?startIndex=${startIndex}&count=${count}`;

    jsonp(url, null, (err, data) => {
      if (err) {
        console.error(err.message);
      } else {
        //if it's our first run, just put the first 12 posts in
        if (this.state.data === null) {
          this.setState({
            data: data.data,
            startIndex: this.state.startIndex+12,
          }, () => this.handleDataFilter(this.state.data));
        } else {
          /*
          put the current state in a temp
          target the temp state's data array and append the new fetched data array to it
          put the newly appended array into our temp state array 
          set our new state to be the temp state and refilter the item
          */

          let tempState = this.state;
          let oldData = tempState.data;
          let newData = data.data;
          let updatedList = oldData.concat(newData); 
          tempState.data = updatedList;
          tempState.startIndex += count;
          this.setState({
            data: tempState.data,
            startIndex: tempState.startIndex,
          }, () => this.handleDataFilter(data.data));

        }
      }
    })
  }

  //takes in a data array and distribute the content to article, video, and latest
  handleDataFilter = (info) => {
    let temp;

    info.filter(current => {
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
      temp = this.state.latest;
      temp.push(current);
      this.setState({
        latest: temp
      })
      return current;
    })
  }

  //map function that spread out our view after we get it
  handleDataMap = (list) =>
    list.map(item => {
      const { headline, duration, publishDate, title } = item.metadata;
      const url = item.thumbnails[0] ? item.thumbnails[0].url : 'http://assets1.ignimgs.com/2018/01/17/nintendo-question-mark-1516191925958_1280w.jpg'; //check for empty thumbnails
      const itemName = headline ? headline : title;
      const contentId = item.contentId;
      const itemDuration = duration;
      const itemDate = publishDate;
      return <SectionCardContainer
        key={contentId}
        contentId={contentId}
        preview={url} 
        title={itemName}
        duration={itemDuration}
        posted={itemDate}
      />
    })

  //sort the list by earliest to latest post
  handleNewistSort = (list) => {
    let sortedList = list.sort((a,b) => new moment(b.metadata.publishDate) - new moment(a.metadata.publishDate))
    return sortedList
  }

  //on our scroll, handle get data calls after user stopped scrolling
  // handleListScroll = () => {

  // }

  render() {
    let storage;
    const { articles, videos, latest } = this.state;
    const { view } = this.props;

    if (view === 'articles') {
      storage = articles;
    } else if (view === 'videos') {
      storage = videos;
    } else if (view === 'latest') {
      storage = this.handleNewistSort(latest);
    }
    console.log('storage', storage)

    return (
      <div className="SideSection--row">
        {this.handleDataMap(storage)}
      </div>
    )
  }
}

export default SideSectionContainer;
