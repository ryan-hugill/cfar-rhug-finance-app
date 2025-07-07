import React from 'react';

import { SpendAnalyzer } from '../components/SpendAnalyzer';
import { TransactionsCard } from '../components/TransactionsCard';

export class TransactionsPage extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="content-area-transactions" link={false}>
        <TransactionsCard className="transactions"/>
        <SpendAnalyzer />
      </div>
    );
  }
}
