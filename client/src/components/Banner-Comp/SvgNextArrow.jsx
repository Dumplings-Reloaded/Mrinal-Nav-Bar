import * as React from "react";

function SvgNextArrow(props) {
  return (
    <svg width="30" height="40" viewBox="0 0 30 40" fill="none" {...props}>
      <path fill="#aebae1" fillOpacity={0.8} d="M0 0h30v40H0z" />
      <path
        d="M12.526 14.083a.77.77 0 011.235-.917l7.358 9.905-7.322 9.501a.77.77 0 01-1.219-.94l6.612-8.578-6.664-8.97z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgNextArrow;