import React from 'react';

export class SpendingChartCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={this.props.className}>
        {/*Remove placeholder once we get graphs*/}
        <h1 className="graph-placeholder">This is a pie chart</h1>
      </div>
    );
  }
}