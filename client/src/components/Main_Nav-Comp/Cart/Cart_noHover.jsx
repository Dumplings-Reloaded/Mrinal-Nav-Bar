import * as React from "react";

function SvgCartNoHover(props) {
  return (
    <svg
      className="Cart_noHover_svg__icon-bag Cart_noHover_svg__icon-bag-static"
      width={18}
      height={24}
      {...props}
    >
      <path
        className="Cart_noHover_svg__bag-path-static"
        d="M17.54 5.424a.47.47 0 01.46.474v17.627a.47.47 0 01-.46.475H.46a.47.47 0 01-.46-.475V5.898a.47.47 0 01.46-.474h4.795v-1.56C5.255 1.733 6.935 0 9 0c2.065 0 3.745 1.733 3.745 3.864v1.56zm-11.365 0h5.64v-1.56c0-1.608-1.264-2.915-2.82-2.915-1.555 0-2.82 1.307-2.82 2.915zm10.905.949h-4.335V8.61a.47.47 0 01-.46.475.47.47 0 01-.46-.475V6.373h-5.65V8.61a.47.47 0 01-.46.475.47.47 0 01-.46-.475V6.373H.92V23.05h16.16z"
      />
    </svg>
  );
}

export default SvgCartNoHover;