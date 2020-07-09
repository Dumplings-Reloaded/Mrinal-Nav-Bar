import * as React from "react";

function SvgCartHover(props) {
  return (
    <svg
      className="Cart_Hover_svg__icon-bag Cart_Hover_svg__icon-bag-hover"
      width={18}
      height={24}
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <path
          className="Cart_Hover_svg__bag-path-hover"
          d="M18.04 5.424h-4.795v-1.56C13.245 1.733 11.565 0 9.5 0 7.435 0 5.755 1.733 5.755 3.864v1.56H.96a.47.47 0 00-.46.474v17.627c0 .26.208.475.46.475h17.08a.47.47 0 00.46-.475V5.898a.47.47 0 00-.46-.474z"
          fill="#000"
        />
        <path
          d="M6.675 3.864C6.675 2.256 7.942.95 9.5.95c1.558 0 2.825 1.307 2.825 2.915v1.56h-5.65v-1.56z"
          fill="#FFF"
        />
      </g>
    </svg>
  );
}

export default SvgCartHover;