import React from 'react';

export class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return(
      <div className="header header-footer-bar">
        <h4>cfar.dev/finance</h4>
      </div>
    );
  }
}