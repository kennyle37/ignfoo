import React, { Component } from 'react';
import jsonp from 'jsonp';

import Card from './Card';
import Preview from './Preview';

class SideSectionCardContainer extends Component {
  state = {
    commentCount: null
  }
  componentDidMount() {
    this.handleGetComments(this.props.contentId);
  }

  handleGetComments = (key) => {
    const url = `https://ign-apis.herokuapp.com/comments?ids=${key}`;

    jsonp(url, null, (err, data) => {
      if (err) {
        console.error(err.message);
      } else {
        this.setState({
          commentCount: data.content[0].count
        })
      }
    })
  }

  render() {
    const { preview, title, duration, posted } = this.props;
    return (
      <div className="row SideSection--card-container">
        <Preview preview={preview} duration={duration} />
        <Card title={title} posted={posted} commentCount={this.state.commentCount} />
      </div>
    )
  }
}

export default SideSectionCardContainer;
