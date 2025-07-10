import React from 'react';

import { BalancesCard } from '../components/BalancesCard';
import { TransactionsCard } from '../components/TransactionsCard';
import { InvestmentsCard } from '../components/InvestmentsCard';
import { SpendingChartCard } from '../components/SpendingChartCard';
import { NetWorthGraphCard } from '../components/NetWorthGraphCard';
import { MarketNewsCard } from '../components/MarketNewsCard';

export class Home extends React.Component {
  render() {
    return (
      <div className="content-area-home">
        <BalancesCard />
        <TransactionsCard />
        <InvestmentsCard />
        <SpendingChartCard />
        <NetWorthGraphCard />
        <MarketNewsCard />
      </div>
    );
  }
}