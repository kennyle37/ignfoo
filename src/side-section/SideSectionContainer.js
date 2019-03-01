import React from 'react';
import '../sass/index.scss';

import SectionCardContainer from './SectionCardContainer';

const SideSectionContainer = () => {
  return (
    <div className="SideSection--row">
      <SectionCardContainer />
      <SectionCardContainer />
      <SectionCardContainer />
    </div>
  )
}

export default SideSectionContainer;
