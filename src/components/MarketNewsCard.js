import { Card } from './Card';

export function MarketNewsCard(props){
  return (
    <Card className={props.className}>
      <h1 className="content-header-text">News</h1>
    </Card>
  );
}
