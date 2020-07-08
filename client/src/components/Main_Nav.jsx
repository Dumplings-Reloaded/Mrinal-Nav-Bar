import React from 'react';
import Logo from './Logo.jsx';
import Search from './Main_Nav-Comp/Search.jsx';
import Authentication from './Main_Nav-Comp/Authentication.jsx';
import Cart from './Main_Nav-Comp/Cart.jsx';

import MenuElement from './Main_Nav-Comp/MenuElement.jsx';

export default class Main_Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="main-nav-container">

        <div className="main-nav-logo">
          <Logo />
        </div>

        <div className="menu">
          <ul className="menu-list">

            <li className="main-nav__title">
              <a className="main-nav__title-name new-in" href="">NEW IN</a>
            </li>

            <MenuElement name={"WOMEN"} />
            <MenuElement name={"MEN"} />
            <MenuElement name={"ACCESSORIES"} />
          </ul>
        </div>

        <div className="Main-Nav navbar-icons">
          <ul className="nav-icons-list">
            <MenuElement name={"WE ARE ALO"} />
            <Search />
            <Authentication />
            <Cart />
          </ul>
        </div>

      </div >
    )
  }
}