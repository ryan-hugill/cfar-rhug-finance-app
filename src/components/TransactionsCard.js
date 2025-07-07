import React from 'react';
import { Link } from 'react-router';

export class TransactionsCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {className, link} = this.props;
    return (
      <div className={className}>
        <h1 className="content-header-text">
          {link ? <Link to="/spend">Transactions</Link> : "Transactions"}
        </h1>
      </div>
    );
  }
}