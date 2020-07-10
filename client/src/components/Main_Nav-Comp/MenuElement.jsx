import React from 'react';
import Women_Menu from './Menus/Women_Menu.jsx';
import Men_Menu from './Menus/Men_Menu.jsx';
import Accessories_Menu from './Menus/Accessories_Menu.jsx';
import Alo_Menu from './Menus/We_Are_Alo_Menu.jsx';

export default class MeneElement extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      onHover: false
    }
    this.handleHover = this.handleHover.bind(this);
    this.outOfHover = this.outOfHover.bind(this);
  }

  handleHover() { this.setState({ onHover: true }) }
  outOfHover() { this.setState({ onHover: false }) }

  render() {
    let { onHover } = this.state;
    let { name } = this.props

    let menuSelected = (name === "WOMEN") ? <Women_Menu /> : (name === "MEN") ? <Men_Menu /> : (name === "ACCESSORIES") ? <Accessories_Menu /> : <Alo_Menu />;
    let menuClass = onHover ? "main-nav__menu" : "main-nav__menu hidden"

    return (
      <li className="main-nav__title"
        onMouseOver={this.handleHover}
        onMouseLeave={this.outOfHover}>
        <a className="main-nav__title-name" href="">{name}</a>
        <div className={menuClass}> {menuSelected} </div>
      </li >
    )
  }
}