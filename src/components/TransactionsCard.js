import { Link } from 'react-router';

export function TransactionsCard() {
  return (
    <div className="transactions-home content-box-home">
      <h1 className="content-header-text">
        <Link to="/spend">Transactions</Link>
      </h1>
    </div>
  );
}