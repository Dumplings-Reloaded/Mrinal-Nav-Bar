import * as React from "react";

function SvgBackArrow(props) {
  return (
    <svg width="30" height="40" viewBox="0 0 30 40" fill="none" {...props}>
      <path fill="#aebae1" fillOpacity={0.8} d="M0 0h30v40H0z" />
      <path
        d="M19.474 13.083a.77.77 0 00-1.235-.917l-7.358 9.905 7.322 9.501a.77.77 0 001.219-.939l-6.612-8.579 6.664-8.97z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgBackArrow;