import { Link } from 'react-router';

export function TransactionsCard(props) {
  const {className, link} = props;
  return (
    <div className={className}>
      <h1 className="content-header-text">
        {link ? <Link to="/spend">Transactions</Link> : "Transactions"}
      </h1>
    </div>
  );
}
