import React from 'react';

class Transactions extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
        <div className="transactions">
            <h1 className="content-header-text">Transactions</h1>
        </div>
    );
  }
}

class SpendAnalyzer extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
        <div className="spend-analyzer">
            <h1 className="content-header-text">Spend Analyzer</h1>
        </div>
    );
  }
}

class TransactionsContent extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="content-area-transactions">
        <Transactions />
        <SpendAnalyzer />
      </div>
    );
  }
}

export class TransactionsPage extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <TransactionsContent />
      </div>
    );
  }
}
