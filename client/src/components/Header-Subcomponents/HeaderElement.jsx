import React from 'react';

const HeaderElement = (props) => {
  let { name, selection, headerSelection } = props

  // change className based on click of header element
  let className = (selection === name) ? "header-item selected" : "header-item not-selected";

  return (
    <li className={className} onClick={() => { headerSelection(name) }}>
      {props.name}
    </li>
  )
}

export default HeaderElement;