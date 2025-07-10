import { Link } from 'react-router';
import { Card } from './Card';

export function TransactionsCard(props) {
  const {className, link} = props;
  return (
    <Card className={className}>
      <h1 className="content-header-text">
        {link ? <Link to="/spend">Transactions</Link> : "Transactions"}
      </h1>
    </Card>
  );
}
