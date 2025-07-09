import { Card } from './Card';

export function SpendingChartCard(props) {
  return (
    <Card className={props.className}>
      {/*Remove placeholder once we get graphs*/}
      <h1 className="graph-placeholder">This is a pie chart</h1>
    </Card>
  );
}
