import React from 'react';

export default class AuthMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {

    return (
      <div>

        <h2 className="auth-header">Sign In</h2>

        <div className='auth-input'>
          <input className='auth-email' type="email" placeholder="Email" />
          <input className='auth-password' type="password" placeholder="Password" />
        </div>

        <p className="auth-forgot-password">forgot password?</p>

        <div className="auth-submit">
          <button className='auth-button'> Submit </button>
        </div>

        <div className='auth-social'>
          <button><p> SIGN IN WITH FACEBOOK </p></button>
          <button><p> SIGN IN WITH GOOGLE </p></button>
          <button><p> SIGN IN WITH AMAZON </p></button>
        </div>

        <div>
          <button className='auth-button auth-create-account'> Create An Account </button>
        </div>

      </div >
    )
  }

}