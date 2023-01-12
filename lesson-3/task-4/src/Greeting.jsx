import React from 'react';
import './index.scss';

const Greeting = (props) => {
  const ageDate = Date.now() - props.birthDate;
  const ageInMilis = new Date(ageDate);
  const age = Math.abs(ageInMilis.getUTCFullYear() - 1970);
  return (
    <div className="greeting">{`My name is ${props.firstName} ${props.lastName}. I'm ${age} years old`}</div>
  );
};

export default Greeting;
