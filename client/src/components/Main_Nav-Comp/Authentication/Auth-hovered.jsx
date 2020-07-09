import * as React from "react";

function SvgAuthHovered(props) {
  return (
    <svg
      className="Auth-hovered_svg"
      width="19"
      height="19"
      {...props}
    >
      <g clipPath="url(#Auth-hovered_svg__clip-542A0A53-EA95-402D-8EF2-46D03499A290)">
        <path d="M9.5 11a5 5 0 100-10 5 5 0 000 10zm0 18a9 9 0 100-18 9 9 0 000 18z" />
        <path
          fill="none"
          stroke="#000"
          strokeMiterlimit={50}
          d="M9.5 11a5 5 0 100-10 5 5 0 000 10zm0 18a9 9 0 100-18 9 9 0 000 18z"
        />
      </g>
    </svg>
  );
}

export default SvgAuthHovered;