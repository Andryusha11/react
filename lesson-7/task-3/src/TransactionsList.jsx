import React, { Component } from 'react';
import Transaction from './Transaction';

class TransactionsList extends Component {
  render() {
    return (
      <ul className="transactions">
        {this.props.transactions.slice().map((transaction) => (
          <Transaction
            key={transaction.id}
            to={transaction.to}
            amount={transaction.amount}
            rate={transaction.rate}
            time={transaction.time}
            from={transaction.from}
          />
        ))}
      </ul>
    );
  }
}

export default TransactionsList;
