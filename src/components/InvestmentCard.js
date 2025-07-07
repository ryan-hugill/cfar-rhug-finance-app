import React from 'react';

export class InvestmentsCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={this.props.className}>
        <h1 className="content-header-text">Investments</h1>
      </div>
    );
  }
}