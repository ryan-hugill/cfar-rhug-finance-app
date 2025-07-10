import { SpendAnalyzer } from '../components/SpendAnalyzer';
import { TransactionsCard } from '../components/TransactionsCard';

export function Spend() {
  return (
    <div className="content-area-transactions" link={false}>
      <TransactionsCard className="transactions"/>
      <SpendAnalyzer />
    </div>
  );
}
