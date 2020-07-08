import React from 'react';

const Accessories_Menu = (props) => {
  return (
    <div className="main-nav__menu-container">
      <div className="main-nav__column">

        <div className="main-nav__column-title">
          <a href="">Accessories</a>
        </div>

        <ul className="flex-column">
          <li className="main-nav__item">
            <a href="">Gift Card</a></li>
          <li className="main-nav__item">
            <a href="">Books</a></li>
          <li className="main-nav__item">
            <a href="">Shoes & Socks</a></li>
          <li className="main-nav__item">
            <a href="">Hats & Hair Accessories</a></li>
          <li className="main-nav__item">
            <a href="">Yoga Mats & Essentials</a></li>
          <li className="main-nav__item">
            <a href="">Bags</a></li>
        </ul>

      </div>
    </div>

  )
}

export default Accessories_Menu;