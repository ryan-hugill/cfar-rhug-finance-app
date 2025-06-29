import './App.css';
import React from 'react';

export class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return(
      <div className="header header-footer-bar"></div>
    );
  }
}

export class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return(
      <div className="footer header-footer-bar"></div>
    );
  }
}

export class GenericStockPhoto extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return(
      <div className="stock-photo-container">
        {/*Remove placeholder once we get graphs*/}
        <h1 className="stock-photo-placeholder">[Insert Generic Stock Photo Here]</h1>
      </div>
    );
  }
}