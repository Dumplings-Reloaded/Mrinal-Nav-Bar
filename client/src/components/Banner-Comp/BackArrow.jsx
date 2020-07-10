import React from 'react';
import BackButton from './SvgBackArrow.jsx';

const BackArrow = (props) => {
  return (
    <div className="arrow-link back">
      <button className="backButton" name="back" onClick={() => props.displayBannerMsg(props.messageIndex, 'back')}>
        <BackButton />
      </button>
    </div>
  )
}

export default BackArrow;
