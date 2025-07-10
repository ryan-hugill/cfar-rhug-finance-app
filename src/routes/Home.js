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
        <BalancesCard className="balances-home content-box-home" />
        <TransactionsCard className="transactions-home content-box-home" link={true}/>
        <InvestmentsCard className="investments-home content-box-home" />
        <SpendingChartCard className="spending-chart-home graph-container-home" />
        <NetWorthGraphCard className="net-worth-home graph-container-home" />
        <MarketNewsCard className="market-news-home"/>
      </div>
    );
  }
}