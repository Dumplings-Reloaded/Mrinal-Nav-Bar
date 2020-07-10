import React from 'react';
import NextButton from './SvgNextArrow.jsx';

const NextArrow = (props) => {
  return (
    <div className="arrow-link next">
      <button className="nextButton" name="next" onClick={() => props.displayBannerMsg(props.messageIndex, 'next')}>
        <NextButton />
      </button>
    </div >
  )
}

export default NextArrow;

