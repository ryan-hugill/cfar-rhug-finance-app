import React from 'react';

export class MarketNewsCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={this.props.className}>
        <h1 className="content-header-text">News</h1>
      </div>
    );
  }
}