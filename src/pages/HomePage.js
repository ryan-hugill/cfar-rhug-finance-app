import { BalancesCard } from '../components/BalancesCard';
import { TransactionsCard } from '../components/TransactionsCard';
import { InvestmentsCard } from '../components/InvestmentCard';
import { SpendingChartCard } from '../components/SpendingChartCard';
import { NetWorthGraphCard } from '../components/NetWorthGraphCard';
import { MarketNewsCard } from '../components/MarketNewsCard';

export function HomePage() {
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
