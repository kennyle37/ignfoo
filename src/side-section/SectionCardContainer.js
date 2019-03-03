import React from 'react';
import Card from './Card';
import Preview from './Preview';

const SideSectionCardContainer = ({ preview, title }) => {
  return (
    <div className="row SideSection--card-container">
      <Preview preview={preview} />
      <Card title={title} />
    </div>
  )
}

export default SideSectionCardContainer;
