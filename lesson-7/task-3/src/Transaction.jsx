import React from 'react';
import moment from 'moment';

const date = (date) => moment(date).format('DD MMM');
const dateTime = (time) => moment(time).format('hh:mm');
const rightNumbers = (numbers) =>
  new Intl.NumberFormat('en-GB').format(numbers);

const Transaction = ({ from, to, amount, rate, time }) => {
  return (
    <li className="transaction">
      <span className="transaction__date">{date(time)}</span>
      <span className="transaction__time">{dateTime(time)}</span>
      <span className="transaction__assets">{`${from} ➡ ${to}`} </span>
      <span className="transaction__rate">{rightNumbers(rate)}</span>
      <span className="transaction__amount">{rightNumbers(amount)}</span>
    </li>
  );
};

export default Transaction;
