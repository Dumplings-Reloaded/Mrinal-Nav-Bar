import React from 'react';
import NormalAuth from './Authentication/Auth-regular.jsx';
import HoveredAuth from './Authentication/Auth-hovered.jsx';
import AuthMenu from './Authentication/AuthMenu.jsx';

export default class Authentication extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isClicked: false
    }
    this.handleAuthClick = this.handleAuthClick.bind(this);
  }

  handleAuthClick() { this.setState({ isClicked: !this.state.isClicked }) }

  render() {
    let { isClicked } = this.state;

    let logoClassName = (!isClicked) ? "auth-logo" : "auth-logo icon-selected"
    let logo = (!isClicked) ? <NormalAuth /> : <HoveredAuth />;
    let menuStatus = (!isClicked) ? "auth-menu-container hidden" : "auth-menu-container";

    return (
      <li className="auth-icon">
        <div>
          <div className={logoClassName} onClick={this.handleAuthClick}>
            {logo}
          </div>

          <div className={menuStatus}> <AuthMenu /></div>

        </div >
      </li>
    )
  }

}