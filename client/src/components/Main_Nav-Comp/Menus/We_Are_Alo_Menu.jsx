import React from 'react';

const We_Are_Alo_Menu = (props) => {
  return (
    <div className="main-nav__menu-container we-are-alo-container">
      <div className="main-nav__column">

        <ul className="flex-column we-are-alo-ul">
          <li className="main-nav__item">
            <a href="">About Us</a></li>
          <li className="main-nav__item">
            <a href="">Unparalled Performance</a></li>
          <li className="main-nav__item">
            <a href="">Sweatshop Free & Eco-aware</a></li>
          <li className="main-nav__item">
            <a href="">The Alo Yoga Family</a></li>
          <li className="main-nav__item">
            <a href="">Alo Blog</a></li>
          <li className="main-nav__item">
            <a href="">Shop Our Instagram</a></li>
          <li className="main-nav__item">
            <a href="">Alo Challennges - Join One!</a></li>
        </ul>

        <ul>
          <li className="main-nav__video"><a href=""> Video # 1 </a> </li>
          <li className="main-nav__video"><a href=""> Video # 2 </a> </li>
        </ul>
      </div>
    </div>
  )
}

export default We_Are_Alo_Menu;