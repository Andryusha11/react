import React, { Component } from 'react';
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

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      time: getTimeWithOffset(this.props.time),
    };

    setInterval(() => {
      this.setState({
        time: getTimeWithOffset(props.time),
      });
    }, 1000);
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.state.location}</div>
        <div className="clock__time">{formatDate(this.state.time)}</div>
      </div>
    );
  }
}

export default Clock;
