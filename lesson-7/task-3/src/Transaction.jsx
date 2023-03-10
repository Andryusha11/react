import React from 'react';
import moment from 'moment';

const date = (date) => moment(date).format('DD MMM');
const dateTime = (time) => moment(time).format('HH:mm');
// const rightNumbers = (numbers) =>
//   new Intl.NumberFormat('en-GB').format(numbers);
const formatter = new Intl.NumberFormat('en-GB');

const Transaction = ({ from, to, amount, rate, time }) => {
  return (
    <li className="transaction">
      <span className="transaction__date">{date(time)}</span>
      <span className="transaction__time">{dateTime(time)}</span>
      <span className="transaction__assets">{`${from} → ${to}`}</span>
      <span className="transaction__rate">{rate}</span>
      <span className="transaction__amount">{formatter.format(amount)}</span>
    </li>
  );
};

export default Transaction;
