import React from 'react';

export class BalancesCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={this.props.className}>
        <h1 className="content-header-text">Account Balances</h1>
      </div>
    );
  }
}