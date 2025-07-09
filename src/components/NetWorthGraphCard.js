import { Card } from './Card';

export function NetWorthGraphCard(props) {
  return (
    <Card className={props.className}>
      {/*Remove placeholder once we get graphs*/}
      <h1 className="graph-placeholder">This is a bar graph</h1>
    </Card>
  );
}
