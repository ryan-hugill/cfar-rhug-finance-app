import { SpendAnalyzer } from '../components/SpendAnalyzer';
import { TransactionsCard } from '../components/TransactionsCard';

export function TransactionsPage() {
  return (
    <div className="content-area-transactions" link={false}>
      <TransactionsCard className="transactions"/>
      <SpendAnalyzer />
    </div>
  );
}
