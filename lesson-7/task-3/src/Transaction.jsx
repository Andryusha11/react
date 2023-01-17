import React from 'react';
import moment from 'moment';

const date = (date) => moment().format('DD MMM');
const dateTime = (time) => moment(time).format('hh:mm');
const rightAmount = (amount) => new Intl.NumberFormat('en-GB').format(amount);

const Transaction = ({ from, to, amount, rate, time }) => {
  return (
    <li className="transaction">
      <span className="transaction__date">{date(time)}</span>
      <span className="transaction__time">{dateTime(time)}</span>
      <span className="transaction__assets">{`${from} ➡  ${to}`} </span>
      <span className="transaction__rate">{rate}</span>
      <span className="transaction__amount">{rightAmount(amount)}</span>
    </li>
  );
};

export default Transaction;
