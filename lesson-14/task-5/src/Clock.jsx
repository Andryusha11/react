import React, { useEffect, useState } from 'react';
import moment from 'moment';
import './clock.scss';

const formatDate = (date) => moment(date).format('LTS');

const getTimeWithOffset = (offset) => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(
    currentTime.setHours(currentTime.getHours() + offset + utcOffset)
  );
};

const Clock = ({ location, offset }) => {
  const [data, setData] = useState({
    location,
    time: getTimeWithOffset(offset),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData({ time: getTimeWithOffset(offset), location });
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="clock">
      <div className="clock__location">{data.location}</div>
      <div className="clock__time">{formatDate(data.time)}</div>
    </div>
  );
};

export default Clock;
