import React from 'react';

import { SpendAnalyzer } from '../components/SpendAnalyzer';
import { TransactionsCard } from '../components/TransactionsCard';

export class Spend extends React.Component {
  render() {
    return (
      <div className="content-area-home">
        <TransactionsCard />
        <SpendAnalyzer />
      </div>
    );
  }
}
