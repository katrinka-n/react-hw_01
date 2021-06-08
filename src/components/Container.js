import React, { Component } from 'react';
import './Container.css';
import LeftNavbar from './LeftNavbar.js';
import Header from './Header.js';
import Main from './Main.js';

class Container extends Component {
  render() {
    return (
      <div className="container">
        <LeftNavbar />
        <div>
          <Header />
          <Main />
        </div>
      </div>
    );
  }
}

export default Container;
