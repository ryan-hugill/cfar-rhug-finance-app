import React from 'react';

class BalancesHome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="balances-home content-box-home">
        <h1 className="content-header-text">Account Balances</h1>
      </div>
    );
  }
}

class TransactionsHome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="transactions-home content-box-home">
        <h1 className="content-header-text">Transactions</h1>
      </div>
    );
  }
}

class InvestmentsHome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="investments-home content-box-home">
        <h1 className="content-header-text">Investments</h1>
      </div>
    );
  }
}

class SpendingChartHome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="spending-chart-home graph-container-home">
        {/*Remove placeholder once we get graphs*/}
        <h1 className="graph-placeholder">This is a pie chart</h1>
      </div>
    );
  }
}

class NetWorthGraphHome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="net-worth-home graph-container-home">
        {/*Remove placeholder once we get graphs*/}
        <h1 className="graph-placeholder">This is a bar graph</h1>
      </div>
    );
  }
}

class FinanceNewsHome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="finance-news-home">
        <h1 className="content-header-text">Finance News</h1>
      </div>
    );
  }
}

class HomeContent extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="content-area-home">
        <BalancesHome />
        <TransactionsHome />
        <InvestmentsHome />
        <SpendingChartHome />
        <NetWorthGraphHome />
        <FinanceNewsHome />
      </div>
    );
  }
}

export class HomePage extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <HomeContent />
      </div>
    );
  }
}