import React from 'react';
import Universal_Banner from './Universal_Banner.jsx';
import Header from './Header.jsx';
import Main_Nav from './Main_Nav.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <Universal_Banner />
        <Header />
        <Main_Nav />
      </div>
    )
  }
}