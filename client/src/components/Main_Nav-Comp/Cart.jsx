import React from 'react';
import DefaultCartLogo from './Cart/Cart_NoHover.jsx';
import HoverCartLogo from './Cart/Cart_Hover.jsx';
import CartMenu from './Cart/CartMenu.jsx';

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartOnHover: false
    }
    this.hover = this.hover.bind(this);
    this.noHover = this.noHover.bind(this);
  }

  hover() { this.setState({ cartOnHover: true }) }

  noHover() { this.setState({ cartOnHover: false }) }

  render() {
    let { cartOnHover } = this.state;

    let logoClassName = !cartOnHover ? "cart-logo" : "cart-logo icon-selected";
    let logo = !cartOnHover ? <DefaultCartLogo /> : <HoverCartLogo />;
    let menuStatus = !cartOnHover ? "cart-container hidden" : "cart-container";

    return (
      <li className="cart-icon" onMouseOver={this.hover} onMouseLeave={this.noHover}>
        <div className={logoClassName} > {logo} </div>
        <div className={menuStatus}> <CartMenu /> </div>
      </li>
    )
  }
}